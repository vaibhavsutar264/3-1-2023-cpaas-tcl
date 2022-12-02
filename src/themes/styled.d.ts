import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    textForLogin: string
    primary: string
    background: string
    font: string
    border: string
    label: string
    successBorder: string
    opacity: string
    sidebarBg: string
    sidebarTopBg: string
    sidebarLeftBg: string
    inputBg: string
    inputHeaderBorder: string
    dashboardContentBg: string
    tableHeaderBg: string
    dashboardTitle: string
    inputHeaderPlaceholderColor: string
  }
}
