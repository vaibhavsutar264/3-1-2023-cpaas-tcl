export const apiRoutes = {
  BASE_URL: 'http://localhost:4000',

  // User
  LOGIN: '/api/v1/login',
  MOCKLOGIN: '/auth/login',
  SET_PASSWORD: '/api/v1/auth/password',
  FORGOT_PASSWORD: '/api/v1/password/forgot',
  RESET_PASSWORD: '/api/v1/password/reset',
  LOGOUT: '/api/v1/logout',

  // Billing
  GET_INVOICES: '/Invoices',
}

export const apiHelpers = {
  HEADER_AUTHORIZATION: 'Authorization',
  HEADER_CONTENT_TYPE: 'Content-Type',
  TOKEN_TYPE: 'Bearer',
  CONTENT_TYPE_APP_JSON: 'application/json',
}

export const appThemes = {
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark',
}

export const localStorageVar = {
  THEME_VAR: 'theme',
  TOKEN_VAR: 'token',
  USER_VAR: 'user',
  I18_LANG_VAR: 'i18nextLng',
  LANG_VAR: 'lng',
}

export const thunkPaths = {
  LOGIN_THUNK: 'auth/login',
  LOGOUT_THUNK: 'auth/logout',
  UPDATEPASSWORD_THUNK: 'auth/updatePassword',
}

export const slices = {
  AUTH_SLICE: 'auth',
  BILLING_SLICE: 'billing',
}

export const typeVar = {
  IMAGE_WEBP: 'image/webp',
  IMAGE_PNG: 'image/png',
}

export const appRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  CHECK_PROTECTED: '/checkprotected',
  SET_PASSWORD: '/setpassword',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/password/reset/:token',
  NOT_FOUND: '*',
  BILLING: '/invoices',
}

export const breadCrums = {
  BILLING: {
    path: [
      { transName: 'dashboard', type: 'link', linkURL: appRoutes.BILLING },
      { transName: 'billingInvoiceshead', type: 'text', linkURL: '' },
    ],
    PageName: 'billingInvoiceshead',
  },
}

export const dataTables = {
  BILLING: (values: []) => ({
    data: values,
    columns: [
      { eleName: 'Invoice_no', headTrans: 'id', sort: true, filter: false },
      {
        eleName: 'Customer_LE',
        headTrans: 'customerLe',
        sort: true,
        filter: false,
      },
      {
        eleName: 'Tata_Entity',
        headTrans: 'entity',
        sort: true,
        filter: false,
      },
      { eleName: 'PO_number', headTrans: 'poNo', sort: true, filter: false },
      {
        eleName: 'Payment_Status',
        headTrans: 'status',
        sort: true,
        filter: false,
      },
      {
        eleName: 'Invoice_amt',
        headTrans: 'invoiceAmount',
        sort: true,
        filter: false,
      },
      {
        eleName: 'Invoice_date',
        headTrans: 'invoiceIssuedDate',
        sort: true,
        filter: false,
      },
      { eleName: 'Due_date', headTrans: 'dueDate', sort: true, filter: false },
    ],
    tableName: 'billing',
  }),
}
