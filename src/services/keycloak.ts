import Keycloak from 'keycloak-js';
// Keycloak configuration service

// Helper to get env variables whether using Vite (import.meta.env) or Create React App (process.env)
const getEnv = (key: string) => {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // @ts-ignore
    return import.meta.env[`VITE_${key}`] || import.meta.env[key];
  }
  // @ts-ignore
  if (typeof process !== 'undefined' && process.env) {
    // @ts-ignore
    return process.env[`REACT_APP_${key}`] || process.env[key];
  }
  return undefined;
};

const keycloakConfig = {
  url: getEnv('KEYCLOAK_URL') || 'https://vm100.upi.edu/',
  realm: getEnv('KEYCLOAK_REALM') || 'sso',
  clientId: getEnv('KEYCLOAK_CLIENT_ID') || 'Varcel-TestedApps',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;