// Secure storage utility with encryption for sensitive data
class SecureStorage {
  private readonly STORAGE_KEY = 'masarna_secure_data';
  private readonly ENCRYPTION_KEY = 'masarna_encrypt_2024'; // In production, this should be more secure

  // Simple encryption/decryption using base64 encoding
  // In a real implementation, use proper encryption libraries
  private encrypt(data: string): string {
    if (typeof window === 'undefined') return data;
    
    try {
      return btoa(unescape(encodeURIComponent(data)));
    } catch (error) {
      console.error('Encryption error:', error);
      return data;
    }
  }

  private decrypt(encryptedData: string): string {
    if (typeof window === 'undefined') return encryptedData;
    
    try {
      return decodeURIComponent(escape(atob(encryptedData)));
    } catch (error) {
      console.error('Decryption error:', error);
      return encryptedData;
    }
  }

  // Store encrypted data
  setSecureItem(key: string, value: any): void {
    if (typeof window === 'undefined') return;
    
    try {
      const serializedValue = JSON.stringify(value);
      const encryptedValue = this.encrypt(serializedValue);
      
      const existingData = this.getAllSecureData();
      existingData[key] = {
        data: encryptedValue,
        timestamp: new Date().toISOString(),
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString() // 90 days retention
      };
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingData));
    } catch (error) {
      console.error('Secure storage error:', error);
    }
  }

  // Retrieve and decrypt data
  getSecureItem(key: string): any {
    if (typeof window === 'undefined') return null;
    
    try {
      const allData = this.getAllSecureData();
      const item = allData[key];
      
      if (!item) return null;
      
      // Check expiration
      if (new Date(item.expires) < new Date()) {
        this.removeSecureItem(key);
        return null;
      }
      
      const decryptedValue = this.decrypt(item.data);
      return JSON.parse(decryptedValue);
    } catch (error) {
      console.error('Secure retrieval error:', error);
      return null;
    }
  }

  // Remove specific item
  removeSecureItem(key: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const allData = this.getAllSecureData();
      delete allData[key];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allData));
    } catch (error) {
      console.error('Secure removal error:', error);
    }
  }

  // Get all secure data
  private getAllSecureData(): Record<string, any> {
    if (typeof window === 'undefined') return {};
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Secure data retrieval error:', error);
      return {};
    }
  }

  // Clean up expired data
  cleanupExpiredData(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const allData = this.getAllSecureData();
      const now = new Date();
      let hasChanges = false;
      
      Object.keys(allData).forEach(key => {
        if (allData[key].expires && new Date(allData[key].expires) < now) {
          delete allData[key];
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allData));
      }
    } catch (error) {
      console.error('Cleanup error:', error);
    }
  }
}

export const secureStorage = new SecureStorage();

// Auto cleanup on initialization
if (typeof window !== 'undefined') {
  secureStorage.cleanupExpiredData();
}