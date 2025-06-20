// Simple admin authentication system
export interface AdminCredentials {
  username: string;
  password: string;
}

export interface AdminSession {
  isAuthenticated: boolean;
  username?: string;
  expiresAt?: string;
}

class AdminAuthService {
  private readonly SESSION_KEY = 'masarna_admin_session';
  private readonly SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours
  
  // In production, these would be stored securely server-side
  private readonly ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'masarna2024!' // This should be hashed and stored securely
  };

  // Simple password hashing (in production, use bcrypt or similar)
  private hashPassword(password: string): string {
    // This is a very basic hash - use proper hashing in production
    return btoa(password + 'salt_masarna_2024');
  }

  // Verify credentials
  authenticate(credentials: AdminCredentials): boolean {
    if (typeof window === 'undefined') return false;
    
    const hashedPassword = this.hashPassword(credentials.password);
    const expectedHash = this.hashPassword(this.ADMIN_CREDENTIALS.password);
    
    if (credentials.username === this.ADMIN_CREDENTIALS.username && 
        hashedPassword === expectedHash) {
      
      const session: AdminSession = {
        isAuthenticated: true,
        username: credentials.username,
        expiresAt: new Date(Date.now() + this.SESSION_DURATION).toISOString()
      };
      
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
      return true;
    }
    
    return false;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      const sessionData = sessionStorage.getItem(this.SESSION_KEY);
      if (!sessionData) return false;
      
      const session: AdminSession = JSON.parse(sessionData);
      
      if (!session.isAuthenticated || !session.expiresAt) return false;
      
      // Check if session has expired
      if (new Date(session.expiresAt) < new Date()) {
        this.logout();
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Auth check error:', error);
      return false;
    }
  }

  // Get current session
  getCurrentSession(): AdminSession | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const sessionData = sessionStorage.getItem(this.SESSION_KEY);
      if (!sessionData) return null;
      
      return JSON.parse(sessionData);
    } catch (error) {
      console.error('Session retrieval error:', error);
      return null;
    }
  }

  // Logout
  logout(): void {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(this.SESSION_KEY);
  }

  // Extend session
  extendSession(): void {
    if (typeof window === 'undefined') return;
    
    const session = this.getCurrentSession();
    if (session && session.isAuthenticated) {
      session.expiresAt = new Date(Date.now() + this.SESSION_DURATION).toISOString();
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }
  }
}

export const adminAuth = new AdminAuthService();