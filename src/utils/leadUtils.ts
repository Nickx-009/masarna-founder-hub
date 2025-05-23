
import { LeadFormData } from '@/components/LeadCaptureForm';

export interface Lead extends LeadFormData {
  timestamp: string;
  source: string; 
  ctaText: string;
  ctaContext: string;
}

export const saveLeadToLocalStorage = (lead: Lead): void => {
  const existingLeads = getLeadsFromLocalStorage();
  existingLeads.push(lead);
  localStorage.setItem('masarna_leads', JSON.stringify(existingLeads));
};

export const getLeadsFromLocalStorage = (): Lead[] => {
  try {
    return JSON.parse(localStorage.getItem('masarna_leads') || '[]');
  } catch (error) {
    console.error('Error retrieving leads from localStorage:', error);
    return [];
  }
};

export const exportLeadsToCSV = (): string => {
  const leads = getLeadsFromLocalStorage();
  
  if (leads.length === 0) {
    return '';
  }
  
  // Get all possible headers from lead objects
  const headers = Array.from(
    new Set(
      leads.flatMap(lead => Object.keys(lead))
    )
  );
  
  // Create CSV header row
  let csv = headers.join(',') + '\n';
  
  // Add each lead as a row
  leads.forEach(lead => {
    const row = headers.map(header => {
      // Get the value or empty string if it doesn't exist
      const value = lead[header as keyof Lead] || '';
      // Wrap in quotes and escape any quotes inside
      return `"${String(value).replace(/"/g, '""')}"`;
    });
    
    csv += row.join(',') + '\n';
  });
  
  return csv;
};

export const downloadLeadsAsCSV = (): void => {
  const csv = exportLeadsToCSV();
  
  if (!csv) {
    console.error('No leads to export');
    return;
  }
  
  // Create a download link
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.setAttribute('href', url);
  link.setAttribute('download', `masarna-leads-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const trackCTAClick = (ctaText: string, source: string, ctaContext: string = 'general'): void => {
  // In a real implementation, this would send data to analytics service
  console.log('CTA Clicked:', { ctaText, source, ctaContext, timestamp: new Date().toISOString() });
  
  // For now we'll just store it in localStorage for demonstration
  const clicks = JSON.parse(localStorage.getItem('masarna_cta_clicks') || '[]');
  clicks.push({
    ctaText,
    source,
    ctaContext,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('masarna_cta_clicks', JSON.stringify(clicks));
};
