import { SyntheticEvent, useEffect, useState } from 'react'
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from '../../../redux/store'
import { Email } from '../../../types/authType'
import { forgotPassword, resetForgotPaswordPrms } from '../../../redux/slices/authSlice'
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
import BannerBg from '../../common/elements/banner'
import BackgroundBox from '../../common/elements/backGroundBox'
import useLocales from '../../../hooks/useLocales'
import Header from '../../header/Header'
import { useNavigate } from 'react-router-dom'
import ModalMail from '../../modals/ModalMail'

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

const ForgotPassword = ({ toggleTheme }: any) => {
    const { forgotPassEmail } = useAppSelector((state: any) => state.auth)
    const [open, setOpen] = useState(true)
    const dispatch = useAppDispatch()
    const { t } = useLocales()
    const [email, setEmail] = useState('')

    const forgotPasswordSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const userEmail: Email = { email }
        dispatch(forgotPassword(userEmail))
    }

    useEffect(() => {
        dispatch(resetForgotPaswordPrms())
    }, [])

    const handleEmailChange = (e: SyntheticEvent) => {
        e.preventDefault()
        const submitButtonElement = document.getElementById(
            'btn-enable-style'
        ) as HTMLButtonElement
        setEmail((e.target as HTMLInputElement).value)
        const emailVariable = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/
        const emailBoxElement = document.getElementById(
            'email-box'
        ) as HTMLInputElement
        if ((e.target as HTMLInputElement).value.match(emailVariable)) {
            setOpen(false)
            submitButtonElement.className = 'customBtn-01 btn-enable-style'
        } else {
            setOpen(true)
            submitButtonElement.className = 'customBtn-01'
        }
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
                <Box sx={{ flexGrow: 1 }} id="login-form" className="account__form">
                    <div className="form__inner">
                        <Box sx={{ width: 1 }} className="account__form__header">
                            <h3 className="title">{t<string>('forgotPassword')}</h3>
                            <span className="box-help-text">{t<string>('forgotPassHelpTxt')}</span>
                        </Box>
                        <Box
                            sx={{ flexGrow: 1, paddingTop: '0 !important' }}
                            className="account__form__body"
                        >
                            <form onSubmit={forgotPasswordSubmit} action="#" method="post">
                                <FormGroup>
                                    {/* Email Input feilds */}
                                    <FormControl
                                        className="input-wrapper no-margin yes-margin"
                                        id="email-box"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            position: 'relative',
                                            width: 1,
                                            margin: '20px 0px',
                                        }}
                                    >
                                        <InputLabel htmlFor="ammount" className="label__icon">
                                            <MailOutlineIcon id="mail-icon" />
                                        </InputLabel>
                                        <TextField
                                            className="input-field"
                                            required
                                            id="ammount"
                                            label={t<string>('enterYourRegisteredEmailId')}
                                            variant="standard"
                                            autoComplete='false'
                                            sx={{ width: 1, borderRadius: '10px !important' }}
                                            name="ammount"
                                            type="text"
                                            onInput={handleEmailChange}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    {/* submit button */}
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
                                            disabled={open}
                                            variant="contained"
                                            className="customBtn-01"
                                            sx={{
                                                fontSize: '18px',
                                                lineHeight: '21px',
                                                fontFamily: 'ubuntu',
                                                letterSpacing: '-0.72px',
                                            }}
                                        >
                                            {t<string>('getLink')}
                                        </ColorButton>
                                    </FormControl>
                                </FormGroup>
                            </form>
                        </Box>
                    </div>
                </Box>
            </Box>
            <ModalMail modalData={{ email, action: forgotPasswordSubmit }} open={forgotPassEmail} setOpen={(status: any) => { dispatch(resetForgotPaswordPrms()) }} />
        </>
    )
}

export default ForgotPassword
