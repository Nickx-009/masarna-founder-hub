
// ConvertKit service for secure API integration
export interface ConvertKitSubscriptionData {
  email: string;
  tags?: string[];
}

export interface ConvertKitResponse {
  success: boolean;
  message?: string;
  subscription?: any;
}

// This would typically be handled server-side, but for a frontend-only implementation
// we'll implement rate limiting and validation
class ConvertKitService {
  private lastRequestTime: number = 0;
  private requestCount: number = 0;
  private readonly RATE_LIMIT_WINDOW = 60000; // 1 minute
  private readonly MAX_REQUESTS_PER_WINDOW = 5;

  // Simple rate limiting
  private isRateLimited(): boolean {
    const now = Date.now();
    
    if (now - this.lastRequestTime > this.RATE_LIMIT_WINDOW) {
      this.requestCount = 0;
      this.lastRequestTime = now;
    }
    
    if (this.requestCount >= this.MAX_REQUESTS_PER_WINDOW) {
      return true;
    }
    
    this.requestCount++;
    return false;
  }

  // Validate email format and sanitize input
  private validateAndSanitizeEmail(email: string): string | null {
    const sanitized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(sanitized) || sanitized.length > 254) {
      return null;
    }
    
    // Additional security: check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+=/i,
      /<iframe/i
    ];
    
    if (suspiciousPatterns.some(pattern => pattern.test(sanitized))) {
      return null;
    }
    
    return sanitized;
  }

  async subscribe(data: ConvertKitSubscriptionData): Promise<ConvertKitResponse> {
    // Rate limiting check
    if (this.isRateLimited()) {
      return {
        success: false,
        message: 'Too many requests. Please try again later.'
      };
    }

    // Validate and sanitize email
    const sanitizedEmail = this.validateAndSanitizeEmail(data.email);
    if (!sanitizedEmail) {
      return {
        success: false,
        message: 'Invalid email address provided.'
      };
    }

    try {
      // In a real implementation, this would be a server-side endpoint
      // For now, we'll use environment variables (would need Supabase integration)
      const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;
      const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;
      
      if (!apiKey || !formId) {
        console.error('ConvertKit credentials not configured');
        return {
          success: false,
          message: 'Service temporarily unavailable. Please try again later.'
        };
      }
      
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: sanitizedEmail,
          tags: data.tags || ['website-newsletter'],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        return {
          success: true,
          message: 'Successfully subscribed to newsletter!',
          subscription: result
        };
      } else {
        const errorData = await response.json();
        
        if (errorData.message && errorData.message.includes('already subscribed')) {
          return {
            success: false,
            message: 'This email is already subscribed to our newsletter.'
          };
        } else {
          return {
            success: false,
            message: 'Subscription failed. Please try again later.'
          };
        }
      }
    } catch (error) {
      console.error('ConvertKit subscription error:', error);
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.'
      };
    }
  }
}

export const convertKitService = new ConvertKitService();
