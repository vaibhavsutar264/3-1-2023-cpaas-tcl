import { Suspense, lazy } from 'react'
import Loading from '../components/loader/Loading'
import PrivateRoutes from '../utils/PrivateRoutes'
import { appRoutes } from '../utils/constants'
import { useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from '../redux/store'



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
        // { path: appRoutes.ROOT, element: { <HomeScreen /> } },
        {
            path: '',
            children: [
                { path: appRoutes.LOGIN, element: <Login /> },
                { path: appRoutes.ROOT, element: <HomeScreen /> },
                { path: appRoutes.RESET_PASSWORD, element: <ResetPassword /> },
                { path: appRoutes.FORGOT_PASSWORD, element: <ForgotPassword /> },
                // {
                //     path: appRoutes.BILLING,
                //     element: <Billing toggleTheme={toggleTheme} />,
                // },
                // { path: `${appRoutes.ACCOUNT_DETAILS}/${user.id}`, element: <AccountDetails toggleTheme={toggleTheme} /> },
                // { path: appRoutes.ACCOUNT_DETAILS, element: <AccountDetails toggleTheme={toggleTheme} /> },
                { path: appRoutes.MODAL, element: <Modal /> },
                { path: appRoutes.MODAL_TICKET, element: <ModalTicket /> },
                { path: appRoutes.MODAL_WELCOME, element: <ModalWelcome /> },
                { path: appRoutes.MODAL_MAIL, element: <ModalMail /> },
                // { path: appRoutes.SET_PASSWORD, element: <SetPassword /> },
            ],
        },
        {
            path: '',
            element: <PrivateRoutes />,
            children: [
                {path: appRoutes.SET_PASSWORD, element: <SetPassword /> },
                { path: appRoutes.ACCOUNT_DETAILS, element: <AccountDetails toggleTheme={toggleTheme} /> },
                {
                    path: appRoutes.BILLING,
                    element: <Billing toggleTheme={toggleTheme} />,
                },
                {
                    path: appRoutes.DASHBOARD,
                    element: <Dashboard toggleTheme={toggleTheme} />,
                },
                // { path: appRoutes.INVOICE, element: <InvoiceBill /> },
            ],
        },
        {
            path: appRoutes.NOT_FOUND,
            element: <Notfound />,
        },
    ])
}

const Login = Loadable(
    lazy(() => import('../components/login/login-screen/Login'))
)
const ResetPassword = Loadable(
    lazy(() => import('../components/login/reset-password/ResetPassword'))
)
const ForgotPassword = Loadable(
    lazy(() => import('../components/login/forgot-password/ForgotPassword'))
)
const SetPassword = Loadable(
    lazy(() => import('../components/login/set-password/SetPassword'))
)
const Notfound = Loadable(lazy(() => import('../components/notfound/Notfound')))
const HomeScreen = Loadable(lazy(() => import('../components/home/HomeScreen')))
const Billing = Loadable(lazy(() => import('../components/billing/Billing')))
const Dashboard = Loadable(lazy(() => import('../components/dashboard/Dashboard')))
const RaiseTicket = Loadable(
    lazy(() => import('../components/common/elements/RaiseTicket'))
)
const AccountDetails = Loadable(
    lazy(() => import('../components/account-details/AccountDetails'))
)
const Modal = Loadable(
    lazy(() => import('../components/modals/Modal'))
)
const ModalTicket = Loadable(
    lazy(() => import('../components/modals/ModalTicket'))
)
const ModalWelcome = Loadable(
    lazy(() => import('../components/modals/ModalWelcome'))
)
const ModalMail = Loadable(
    lazy(() => import('../components/modals/ModalMail'))
)

export default Routes
