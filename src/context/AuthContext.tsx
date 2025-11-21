import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import keycloak from '../services/keycloak';
import { KeycloakProfile } from 'keycloak-js';

interface AuthContextType {
  isAuthenticated: boolean;
  userProfile: KeycloakProfile | undefined;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userProfile: undefined,
  login: () => {},
  logout: () => {},
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<KeycloakProfile | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const initKeycloak = async () => {
      try {
        console.log("Initializing Keycloak...");
        const authenticated = await keycloak.init({
          onLoad: 'check-sso',
          // Ensure this file exists in public/ folder for production
          silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
          pkceMethod: 'S256',
          checkLoginIframe: false, // Important to prevent timeouts in modern browsers
          enableLogging: true
        });

        console.log("Keycloak init result:", authenticated);
        setIsAuthenticated(authenticated);

        if (authenticated) {
          const profile = await keycloak.loadUserProfile();
          setUserProfile(profile);
        }
      } catch (error) {
        // This catch block is critical for preventing the "Timeout" error from crashing the app
        console.warn("Keycloak initialization failed or timed out. Proceeding as guest.", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    initKeycloak();
  }, []);

  const login = () => {
    keycloak.login().catch((err) => {
        console.error("Login failed", err);
        // DEMO FALLBACK: If keycloak fails (no server/network), enable demo mode
        // Remove this in production if strict security is required
        alert("Keycloak server unreachable. Entering Demo Mode.");
        setIsAuthenticated(true);
        setUserProfile({
            firstName: "Ahmad",
            lastName: "Fauzi Ramadhan",
            email: "ahmadfauzi@upi.edu",
            username: "2108567",
            attributes: {
                faculty: ["FPMIPA"],
                major: ["S1 Teknik Informatika"]
            }
        });
    });
  };

  const logout = () => {
    keycloak.logout().catch(() => {
        // Fallback for logout errors
        setIsAuthenticated(false);
        setUserProfile(undefined);
        window.location.href = "/";
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userProfile, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};