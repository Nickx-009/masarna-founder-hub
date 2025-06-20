import { LeadFormData } from '@/components/LeadCaptureForm';
import { secureStorage } from './secureStorage';

export interface SecureLead extends LeadFormData {
  id: string;
  timestamp: string;
  source: string; 
  ctaText: string;
  ctaContext: string;
  ipHash?: string; // Hashed IP for analytics without storing actual IP
}

// Input sanitization utility
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 500); // Limit length
};

// Validate lead data
export const validateLeadData = (lead: Partial<SecureLead>): boolean => {
  if (!lead.name || !lead.email || !lead.company) {
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(lead.email)) {
    return false;
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /<iframe/i,
    /eval\(/i,
    /document\./i
  ];

  const textFields = [lead.name, lead.email, lead.company, lead.phone || ''];
  return !textFields.some(field => 
    suspiciousPatterns.some(pattern => pattern.test(field))
  );
};

// Generate simple hash for IP (for analytics without storing actual IP)
const generateIPHash = (): string => {
  // This is a placeholder - in a real implementation, you'd hash the actual IP
  return btoa(Date.now().toString()).substring(0, 8);
};

// Generate unique lead ID
const generateLeadId = (): string => {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
};

// Save lead securely
export const saveSecureLead = (lead: Omit<SecureLead, 'id' | 'timestamp' | 'ipHash'>): boolean => {
  try {
    // Sanitize all input fields
    const sanitizedLead: SecureLead = {
      id: generateLeadId(),
      name: sanitizeInput(lead.name),
      email: sanitizeInput(lead.email),
      company: sanitizeInput(lead.company),
      phone: lead.phone ? sanitizeInput(lead.phone) : undefined,
      interest: sanitizeInput(lead.interest),
      timestamp: new Date().toISOString(),
      source: sanitizeInput(lead.source),
      ctaText: sanitizeInput(lead.ctaText),
      ctaContext: sanitizeInput(lead.ctaContext),
      ipHash: generateIPHash()
    };

    // Validate sanitized data
    if (!validateLeadData(sanitizedLead)) {
      console.error('Lead validation failed');
      return false;
    }

    // Get existing leads
    const existingLeads = getSecureLeads();
    
    // Check for duplicate emails (prevent spam)
    const isDuplicate = existingLeads.some(existingLead => 
      existingLead.email.toLowerCase() === sanitizedLead.email.toLowerCase()
    );
    
    if (isDuplicate) {
      console.warn('Duplicate email detected');
      return false;
    }

    // Add new lead
    existingLeads.push(sanitizedLead);
    
    // Store securely (keep only last 1000 leads for performance)
    const leadsToStore = existingLeads.slice(-1000);
    secureStorage.setSecureItem('leads', leadsToStore);
    
    console.log('Lead saved securely:', { id: sanitizedLead.id, email: sanitizedLead.email });
    return true;
  } catch (error) {
    console.error('Error saving secure lead:', error);
    return false;
  }
};

// Get leads securely
export const getSecureLeads = (): SecureLead[] => {
  try {
    const leads = secureStorage.getSecureItem('leads');
    return Array.isArray(leads) ? leads : [];
  } catch (error) {
    console.error('Error retrieving secure leads:', error);
    return [];
  }
};

// Export leads to CSV (with sanitization)
export const exportSecureLeadsToCSV = (): string => {
  const leads = getSecureLeads();
  
  if (leads.length === 0) {
    return '';
  }
  
  // Define headers (excluding sensitive fields)
  const headers = ['Date', 'Name', 'Email', 'Company', 'Phone', 'Interest', 'Source', 'CTA'];
  
  // Create CSV header row
  let csv = headers.join(',') + '\n';
  
  // Add each lead as a row
  leads.forEach(lead => {
    const row = [
      new Date(lead.timestamp).toLocaleDateString(),
      `"${lead.name.replace(/"/g, '""')}"`,
      `"${lead.email.replace(/"/g, '""')}"`,
      `"${lead.company.replace(/"/g, '""')}"`,
      `"${(lead.phone || '').replace(/"/g, '""')}"`,
      `"${lead.interest.replace(/"/g, '""')}"`,
      `"${lead.source.replace(/"/g, '""')}"`,
      `"${lead.ctaText.replace(/"/g, '""')}"`
    ];
    
    csv += row.join(',') + '\n';
  });
  
  return csv;
};

// Clear all leads (admin function)
export const clearSecureLeads = (): void => {
  secureStorage.removeSecureItem('leads');
  console.log('All leads cleared');
};

// Track CTA clicks securely
export const trackSecureCTAClick = (ctaText: string, source: string, ctaContext: string = 'general'): void => {
  try {
    const clickData = {
      ctaText: sanitizeInput(ctaText),
      source: sanitizeInput(source),
      ctaContext: sanitizeInput(ctaContext),
      timestamp: new Date().toISOString(),
      id: `cta_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
    };
    
    const existingClicks = secureStorage.getSecureItem('cta_clicks') || [];
    existingClicks.push(clickData);
    
    // Keep only last 500 clicks for performance
    const clicksToStore = existingClicks.slice(-500);
    secureStorage.setSecureItem('cta_clicks', clicksToStore);
    
    console.log('CTA click tracked securely:', clickData);
  } catch (error) {
    console.error('Error tracking CTA click:', error);
  }
};