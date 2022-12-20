import { Suspense, lazy } from 'react'
import Loading from '../components/loader/Loading'
import PrivateRoutes from '../utils/PrivateRoutes'
import { appRoutes } from '../utils/constants'
import { useRoutes } from 'react-router-dom'
import { useSelector } from '../redux/store'

// eslint-disable-next-line react/display-name
const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    )
}
function Routes({ toggleTheme }: { toggleTheme: any }) {
    const { user } = useSelector((state: any) => state.auth || {})
    return useRoutes([
        {
            path: '',
            children: [
                { path: appRoutes.LOGIN, element: <Login toggleTheme={toggleTheme} /> },
                { path: appRoutes.ROOT, element: <HomeScreen toggleTheme={toggleTheme} /> },
                { path: appRoutes.RESET_PASSWORD, element: <ResetPassword toggleTheme={toggleTheme} /> },
                { path: appRoutes.FORGOT_PASSWORD, element: <ForgotPassword toggleTheme={toggleTheme} /> },
            ],
        },
        {
            path: '',
            element: <PrivateRoutes />,
            children: [
                { path: appRoutes.SET_PASSWORD, element: <SetPassword toggleTheme={toggleTheme} /> },
                { path: appRoutes.ACCOUNT_DETAILS, element: <AccountDetails toggleTheme={toggleTheme} /> },
                { path: appRoutes.WELOCME, element: <Welcome /> },
                { path: appRoutes.BILLING, element: <Billing toggleTheme={toggleTheme} /> },
                { path: appRoutes.DASHBOARD, element: <Dashboard toggleTheme={toggleTheme} /> },
            ],
        },
        { path: appRoutes.NOT_FOUND, element: <Notfound /> },
    ])
}

const Login = Loadable(lazy(() => import('../components/login/login-screen/Login')))
const ResetPassword = Loadable(lazy(() => import('../components/login/reset-password/ResetPassword')))
const ForgotPassword = Loadable(lazy(() => import('../components/login/forgot-password/ForgotPassword')))
const SetPassword = Loadable(lazy(() => import('../components/login/set-password/SetPassword')))
const Notfound = Loadable(lazy(() => import('../components/notfound/Notfound')))
const HomeScreen = Loadable(lazy(() => import('../components/home/HomeScreen')))
const Billing = Loadable(lazy(() => import('../components/billing/Billing')))
const Dashboard = Loadable(lazy(() => import('../components/dashboard/Dashboard')))
const AccountDetails = Loadable(lazy(() => import('../components/account-details/AccountDetails')))
const Welcome = Loadable(lazy(() => import('../components/welcome/welcome')))

export default Routes
