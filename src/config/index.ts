// export const HOST_API_BASE_URL = process.env.REACT_APP_HOST_API_URL || '';
// export const MOCK_API_BASE_URL = process.env.REACT_APP_MOCK_API_URL || 'http://api.sspdev.digodev.com';


export const HOST_API_BASE_URL = import.meta.env.VITE_API_URL || '';
export const MOCK_API_BASE_URL = import.meta.env.VITE_MOCK_API_URL || 'http://api.sspdev.digodev.com';