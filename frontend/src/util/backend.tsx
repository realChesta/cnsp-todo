
export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production";
};

export const getBackendUrl = (): string => {
  const prodUrl = 'https://securetodo-backend';
  const devUrl = 'http://localhost:8000';

  return isProduction() ? prodUrl : devUrl;
};

export const fetchBackend = (path: string,  auth: boolean, options?: RequestInit, ): Promise<Response> => {
  let opts = options;
  if (auth) {
    opts = {
      ...options,
      headers: {
        ...options?.headers,
        'Authorization': `Basic ${localStorage.getItem('auth')}`
      }
    };
  }
  return fetch(getBackendUrl() + path, opts);
}
