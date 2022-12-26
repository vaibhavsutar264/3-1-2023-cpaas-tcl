import * as React from 'react'
import { SyntheticEvent, useState, useEffect } from 'react'
import { login, resetLoginParms } from '../../../redux/slices/authSlice'
import { UserLogin } from '../../../types/authType'
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from '../../../redux/store'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import {
    Box,
    TextField,
    InputLabel,
    styled,
    Button,
    ButtonProps,
    FormGroup,
    FormControl,
} from '@mui/material'
import { purple } from '@mui/material/colors'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import useLocales from '../../../hooks/useLocales'
import { getFromLocalStorage } from '../../../hooks/useLocalStorage'
import BackgroundBox from '../../common/elements/backGroundBox'
import BannerBg from '../../common/elements/banner'
import { apiVrbls, appRoutes, localStorageVar } from '../../../utils/constants'
import Header from '../../header/Header'
import * as Yup from 'yup'
import DoneIcon from '@mui/icons-material/Done';
import { on } from 'events'


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    height: '70px',
    width: '100%',
    borderRadius: '35px',
    mixBlendMode: 'luminosity',
    opacity: 0.5,
    '&:hover': {
        backgroundColor: purple[700],
    },
}))

interface State {
    email: string
    password: string
    amount: string
    weight: string
    weightRange: string
    showPassword: boolean
}

const Login = ({ toggleTheme }: any) => {
    const { t } = useLocales()
    const navigate = useNavigate()
    const [open, setOpen] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const { user, isError, isAuthenticated } = useAppSelector((state: any) => state.auth || {})
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        amount: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    })
    
    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(resetLoginParms())
        }
        if (getFromLocalStorage(localStorageVar.TOKEN_VAR) && getFromLocalStorage(localStorageVar.TOKEN_VAR) !== null) {
            if (user) {
                if (user.attributes[apiVrbls.USER.IS_LOGGED_IN_FIRST]) {
                    navigate(appRoutes.SET_PASSWORD)
                } else {
                    navigate(appRoutes.DASHBOARD)
                }
            }
        }
    }, [user, navigate, isAuthenticated, dispatch])
      
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
        }),
        onSubmit: () => {
            const userDetails: UserLogin = {
                email: email,
                password: password,
            }
            dispatch(login(userDetails, email))
        }
    })
    const { handleSubmit, handleChange, touched, errors } = formik

    const validateEmail = (email: any) => {
        return /^[^ ]+@[^ ]+\.[a-z]{2,4}$/.test(email)
    }

    const validatePassword = (password: any) => {
        return `${password}`.length >= 5;
    }

    const handleEmailChange = (e: SyntheticEvent) => {
        e.preventDefault()
        setEmail((e.target as HTMLInputElement).value)
        const emailVariable = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/
        const submitButtonElement = document.getElementById('btn-enable-style') as HTMLButtonElement
        if ((e.target as HTMLInputElement).value.match(emailVariable)) {
            submitButtonElement.className = 'customBtn-01 btn-enable-style'
            setOpen(false)
        } else {
            setOpen(true)
            submitButtonElement.className = 'customBtn-01'
        }
    }

    const handlePasswordChange = (e: SyntheticEvent) => {
        e.preventDefault()
        setPassword((e.target as HTMLInputElement).value)
    }


    const handlePasteChange = (e: SyntheticEvent) => {
        e.preventDefault()
        setPassword((e.target as HTMLInputElement).value)
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <>
            <Header toggleTheme={toggleTheme} />
            <Box className="account__screen">
                {/* ACCOUNT SCREEN BANNER START*/}
                <BannerBg />
                {/* ACCOUNT SCREEN ANIMATION START */}
                <BackgroundBox />
                {/* ACCOUNT FORM START */}
                {(user == null) ? (
                    <Box
                    sx={{ flexGrow: 1 }}
                    id="login-form"
                    className="account__form login-form"
                >
                    <div className="form__inner">
                        <Box sx={{ width: 1 }} className="account__form__header">
                            <h3 className="title">{t<string>('login')}</h3>
                            <span className="box-help-text">{t<string>('enterEmailIdPassword')}</span>
                        </Box>
                        <Box sx={{ width: 1 }} className="account__form__error">
                            <p className="error__msg">
                                {isError ? (<p>{t<string>('yourEmailIdPasswordNotMatch')}</p>) : ('')}
                            </p>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} className="account__form__body">
                            <form onSubmit={handleSubmit} action="#" method="post">
                                <FormGroup>
                                    {/* Email id Input */}
                                    <FormControl
                                        className="input-wrapper yes-margin"
                                        data-margin={true}
                                        id="email-box"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            position: 'relative',
                                            width: 1,
                                            margin: '20px 0px',
                                        }}
                                    >
                                        <InputLabel
                                            htmlFor="username"
                                            id="label__icon"
                                            className="label__icon"
                                        >
                                            <MailOutlineIcon id="mail-icon" />
                                        </InputLabel>
                                        {validateEmail(email) && <span className='checkIcon'><DoneIcon color='success' /></span>}
                                        
                                        <TextField
                                            className="input-field"
                                            required
                                            id="username"
                                            label={t<string>('enterYourEmailID')}
                                            variant="standard"
                                            sx={{ width: 1, borderRadius: '10px !important', border: 'none !important' }}
                                            type="email"
                                            inputProps={{
                                                'data-testid': 'email-element',
                                                autoComplete: 'off',
                                            }}
                                            name="email"
                                            onChange={handleChange}
                                            onInput={handleEmailChange}
                                            value={email}
                                        />
                                    </FormControl>
                                    {touched.email && errors.email && (
                                        <p>
                                            {errors.email == 'email is a required field' ? (
                                                <p className="text-error">{t<string>('email')}</p>
                                            ) : (
                                                errors.email == 'email must be a valid email' ? (
                                                    <p className="text-error">
                                                        {t<string>('mustBeValidEmail')}
                                                    </p>
                                                ) : (
                                                    ''
                                                )
                                            )}
                                            
                                        </p>
                                    )}

                                    {/* Password Input */}
                                    <FormControl
                                        className="input-wrapper password-checkHide no-margin"
                                        id="password-box"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            position: 'relative',
                                            width: 1,
                                            margin: '20px 0px',
                                        }}
                                    >
                                        <InputLabel htmlFor="password" className="label__icon">
                                            <LockOpenIcon id="unlock-icon" />
                                        </InputLabel>
                                        <TextField
                                            required
                                            id="password"
                                            label={t<string>('password')}
                                            variant="standard"
                                            sx={{ width: 1, borderRadius: '10px !important' }}
                                            type={values.showPassword ? 'text' : 'password'}
                                            autoComplete="false"
                                            name="password"
                                            inputProps={{ 'data-testid': 'password-element' }}
                                            className="form-control input-custom input-field"
                                            value={password}
                                            onPaste={handlePasteChange}
                                            onInput={handlePasswordChange}
                                            onChange={handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            className="password-toggle"
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {!values.showPassword ? (
                                                                <VisibilityOffOutlinedIcon />
                                                            ) : (
                                                                <VisibilityOutlinedIcon />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </FormControl>
                                    {touched.password && errors.password && (
                                        <p>
                                            {errors.password == 'password is a required field' ? (
                                                <p className="text-error">
                                                    {t<string>('enterPassword')}
                                                </p>
                                            ) : (
                                                errors.password ==
                                                'password must be at least 8 characters' ? (
                                                <p className="text-error">
                                                    {t<string>('atleastEightCharPassword')}
                                                </p>
                                            ) : (
                                                ''
                                            )
                                            )}
                                        </p>
                                    )}
                                    {/* Forgot Password Link */}
                                    <FormControl
                                        className="input-wrapper password-checkHide no-margin fp-margin"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            position: 'relative',
                                            width: 1,
                                            margin: '20px 0px',
                                        }}
                                    >
                                        <Link
                                            to={appRoutes.FORGOT_PASSWORD}
                                            id={appRoutes.FORGOT_PASSWORD}
                                            className="forgot-password"
                                            style={{ width: 'max-content', fontFamily: 'ubuntu' }}
                                        >
                                            {t<string>('forgotPassword')}
                                        </Link>
                                    </FormControl>
                                    {/* Login Button */}
                                    <FormControl
                                        className="input-wrapper submitBtn"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            position: 'relative',
                                            width: 1,
                                            marginTop: '50px',
                                        }}
                                    >
                                        <ColorButton
                                            type="submit"
                                            id="btn-enable-style"
                                            data-testid="button-element"
                                            variant="contained"
                                            disabled={open}
                                            className='customBtn-01'
                                            // className={`customBtn-01 ${(validatePassword(password) && validateEmail(email)) ? 'btn-enable-style' : 'no-pointers'} `}
                                            sx={{
                                                fontSize: '18px',
                                                lineHeight: '21px',
                                                fontFamily: 'ubuntu',
                                                letterSpacing: '-0.72px',
                                            }}
                                        >
                                            {t<string>('loginBtn')}
                                        </ColorButton>
                                    </FormControl>
                                </FormGroup>
                            </form>
                        </Box>
                    </div>
                </Box>
                ) : (
                    <div><h1>set password screen</h1></div>
                )}
            </Box>
        </>
    )
}

export default Login
