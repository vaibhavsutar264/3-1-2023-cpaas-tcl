import * as React from 'react'
import { useEffect } from 'react'
import { useDarkMode } from '../../../themes/useDarkMode'
import {
  apiVrbls,
  appRoutes,
  appThemes,
  localStorageVar,
  typeVar,
} from '../../../utils/constants'
import { lightTheme, darkTheme } from '../../../themes/globalStyles'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/images/CPaaSLogo.png'
import DarkLogo from '../../../assets/images/CPaaSLogo-dark.png'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import { availableLanguages } from '../../../i18n'
import {
  getFromLocalStorage,
  setInLocalStorage,
} from '../../../hooks/useLocalStorage'
import useLocales from '../../../hooks/useLocales'
import { useTranslation } from 'react-i18next'
import { logout } from '../../../redux/slices/authSlice'
import { useDispatch, useSelector } from '../../../redux/store'
import Setting from '../icons/setting'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined'
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import Globe from '../../../assets/images/svg/globe.svg'
import GlobeDark from '../../../assets/images/svg/globe-dark.svg'
import Ticket from '../icons/tickets'

type SidebarProps = {
  toggleTheme: any
  handleADWidth?: any
  handleBDWidth?: any
}

export const SideBar = ({
  toggleTheme,
  handleADWidth,
  handleBDWidth,
}: SidebarProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector((state: any) => state.auth || [])
  const { i18n } = useTranslation()
  const { t } = useLocales()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handelLogout = () => {
    dispatch(
      logout({
        refreshToken: `${getFromLocalStorage(localStorageVar.TOKEN_VAR)}`,
        username: user[apiVrbls.USER.EMAIL_ID],
      })
    )
  }
  const [theme] = useDarkMode()
  const themeMode = theme === appThemes.LIGHT_THEME ? lightTheme : darkTheme
  const getitem = getFromLocalStorage(localStorageVar.THEME_VAR)

  const getActiveClass = (path: any) => {
    return window.location.pathname.includes(path) ? 'active' : ''
  }
  if (user == null) {
    navigate('/')
  }

  // useEffect(() => {
  //     const noTranslate= document.getElementById('demo-select-small')
  //     console.log(noTranslate?.innerHTML)
  //     // noTranslate.innerHTML = `English`
  // },[])

  const [sidebarWidth, setSidebarWidth] = React.useState<boolean>(false);
  // const sidebarFunc = () => {
  //   console.log('hello world');
  //   setSidebarWidth(!sidebarWidth);
  // }

  return (
    <>
      <div
        className="dashboard__navbar"
        id="sidebar-top"
        style={{ position: 'fixed', top: 0, zIndex: 2 }}
      >
        <div className="dashboard__container">
          <div className="logo" >
            {getitem == appThemes.LIGHT_THEME ? (
              <img id="tata-logo-invoice" src={DarkLogo} alt="CPAAS TCL" />
            ) : (
              <img id="tata-logo-invoice" src={Logo} alt="CPAAS TCL" />
            )}
          </div>
          <div className="right__elements">
            <div className="right__elementsItem search__group">
              <Paper
                component="form"
                className="search__form"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 478,
                }}
              >
                <InputBase
                  onFocus={(e) => {
                    e.target.placeholder = ''
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = `${t<string>('searchWithinSite')}`
                  }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder={t<string>('searchWithinSite')}
                  inputProps={{
                    'aria-label': 'Search Products, Orders and Clients',
                  }}
                />
                <IconButton
                  id="searchicon-sidebar"
                  type="button"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
            <div className="right__elementsItem theme__toggle">
              <div className="toggle__wrapper">
                <button className="lightMode active" onClick={toggleTheme}>
                  <LightModeIcon />
                </button>
                <button className="darkMode" onClick={toggleTheme}>
                  <DarkModeIcon />
                </button>
              </div>
            </div>
            <div className="right__elementsItem language__selector">
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 100,
                  position: 'relative',
                }}
                size="small"
                // id="lang-background-white"
                id="lang-background-invoices"
              >
                <img
                  src={getitem == appThemes.LIGHT_THEME ? Globe : GlobeDark}
                  alt=""
                  style={{
                    width: '18px',
                    height: '18px',
                    position: 'absolute',
                    top: '50%',
                    left: '-12px',
                    transform: 'translateY(-50%)',
                  }}
                />
                <Select
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={i18n.language == ('en-ZA' || 'en-US') ? 'English' : i18n.language}
                  label="Language"
                  onChange={(e) => {
                    i18n.changeLanguage(e.target.value)
                    setInLocalStorage(localStorageVar.LANG_VAR, e.target.value)
                  }}
                >
                  {availableLanguages.map((language) => (
                    <MenuItem key={language} value={language}>
                      {language == 'en-ZA' ? 'English' : language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="right__elementsItem notification">
              <Badge
                badgeContent={4}
                id="notification-badge"
                sx={{
                  color: '#fff',
                  // minWidth: '16px',
                  // height: '16px',
                  // fontSize: '0.55rem',
                }}
              >
                <NotificationsNoneIcon color="action" fontSize='inherit' />
                {/* <IconButton size="large">
                  <NotificationsNoneIcon color="action" fontSize='inherit' />
                </IconButton> */}
              </Badge>
            </div>
            <div className="right__elementsItem profile__setting">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                  marginRight: 0,
                  '& .MuiAvatar-root': {
                    fontSize: 12,
                  },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{ width: 25, height: 25 }}
                />
                <span className="userName">{user?.firstname}</span>
                <ArrowDropDownIcon className="dropArrow" />
              </Button>
              <Menu
                className="profile__menu right__menu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <div className="dropProfile__wrapper">
                    <div className="profile__picture">
                      <Avatar alt="Remy Sharp" src="" />
                    </div>
                    <div className="profile__content">
                      <p className="name">{user?.firstname}</p>
                      <p className="deg">{user?.firstname}</p>
                      <p className="status">
                        {t<string>('lastActivity')}: 2 Aug, 2022{' '}
                        {t<string>('at')} 5:30{t<string>('amPm')}
                      </p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose} style={{ paddingTop: '8px' }}>
                  <a
                    href="/accountdetails"
                    className="profile__dropLink userinfo-dropdown"
                  >
                    <span className="icon">
                      <Setting />
                    </span>
                    <span className="text">{t<string>('setting')}</span>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="/" className="profile__dropLink userinfo-dropdown">
                    <span className="icon">
                      <LockOutlinedIcon />
                    </span>
                    <span className="text">{t<string>('changePassword')}</span>
                  </a>
                </MenuItem>
                <MenuItem onClick={handelLogout} style={{ paddingTop: '12px' }}>
                  <span className="icon">
                    <LogoutOutlinedIcon />
                  </span>
                  <span className="text logout-text">
                    {t<string>('logout')}
                  </span>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <div
        className="dashboard__sidebar"
        id="sidebar-left"
        style={{
          // transition: 'all 350ms 0ms ease-in',
          zIndex: 1,
          height: '100vh',
          position: 'fixed',
          top: '90px',
        }}
      >
        <div className="sidebar__inner">
          <ul className="sidebar__list">
            <li className="list__item">
              <Link
                className={`item__link ${getActiveClass(appRoutes.DASHBOARD)}`}
                to={appRoutes.DASHBOARD}
              >
                <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  <SpeedOutlinedIcon />
                </span>
                {(window.location.pathname == appRoutes.DASHBOARD)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('dashboard')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('dashboard')}
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
              <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  <PersonOutlineOutlinedIcon />
                </span>
                {(window.location.pathname == appRoutes.USER_MANAGEMENT)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('userManagement')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('userManagement')}
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
              <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  <HomeRepairServiceOutlinedIcon />
                </span>
                {(window.location.pathname == appRoutes.SERVICES)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('services')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('services')}
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
              <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  <ChatBubbleTwoToneIcon />
                </span>
                {(window.location.pathname == appRoutes.SMS)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('sms')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('sms')}
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link
                className={`item__link ${getActiveClass(appRoutes.BILLING)}`}
                to={appRoutes.BILLING}
              >
                <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  <ReceiptOutlinedIcon />
                </span>
                {(window.location.pathname == appRoutes.BILLING)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('billingInvoice')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('billingInvoice')}
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
              <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  {/* <ConfirmationNumberOutlinedIcon /> */}
                  <Ticket />
                </span>
                {(window.location.pathname == appRoutes.TICKETS)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('tickets')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('tickets')}
                </span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
              <Box component='span' className='iconWithLink flexElement'>
                <span className="link__icon">
                  <SettingsIcon />
                </span>
                {(window.location.pathname == appRoutes.SUPPORT)?(
                <span className="link__text" id="link__col-text">
                  {t<string>('support')}
                </span>):''}
                </Box>
                <span className="link__text" id="link__text">
                  {t<string>('support')}
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="sidebarToggle"
          onClick={() => {
            // sidebarFunc()
            setIsOpen((pre: any) => (!pre))
            if (handleADWidth) {
              handleADWidth()
            }
            if (handleBDWidth) {
              handleBDWidth()
            }
            const texts = document.querySelectorAll<HTMLElement>('#link__text')
            const textsCol = document.querySelectorAll<HTMLElement>('#link__col-text')
            const sidebarLeft = document.querySelector(
              '#sidebar-left'
            ) as HTMLElement
            const text = document.querySelector('#link__text') as HTMLElement
            const textCol = document.querySelector('#link__col-text') as HTMLElement
            const iconsWithLink = document.querySelectorAll<HTMLElement>('.iconWithLink')
            const sidebarItemLinks = document.querySelectorAll<HTMLElement>('.dashboard__sidebar .sidebar__list .list__item .item__link')
            if (sidebarWidth == true) {
              console.log(sidebarLeft.style.width)
              for (let i = 0; i < texts.length; i++) {
                texts[i].style.display = 'none'
              }
              for (let i = 0; i < textsCol.length; i++) {
                textsCol[i].style.display = 'block'
              }
              sidebarLeft.style.width = 'max-content'
              sidebarLeft.style.paddingLeft = '8px'
              sidebarLeft.style.paddingRight = '8px'
              for (let i = 0; i < iconsWithLink.length; i++) {
                iconsWithLink[i].classList.remove('blockElement');
                iconsWithLink[i].classList.add('flexElement');
              }
              for (let i = 0; i < sidebarItemLinks.length; i++) {
                sidebarItemLinks[i].style.justifyContent = 'center';
              }
              setSidebarWidth(!sidebarWidth);
            }
            if (sidebarWidth == false) {
              console.log(sidebarLeft.style.width)
              for (let i = 0; i < texts.length; i++) {
                texts[i].style.display = 'block'
              }
              for (let i = 0; i < textsCol.length; i++) {
                textsCol[i].style.display = 'none'
              }
              sidebarLeft.style.width = '300px'
              sidebarLeft.style.paddingLeft = '30px'
              sidebarLeft.style.paddingRight = '30px'
              for (let i = 0; i < iconsWithLink.length; i++) {
                iconsWithLink[i].classList.remove('flexElement');
                iconsWithLink[i].classList.add('blockElement');
              }
              for (let i = 0; i < sidebarItemLinks.length; i++) {
                sidebarItemLinks[i].style.justifyContent = 'flex-start';
              }
              setSidebarWidth(!sidebarWidth);
            }
          }}
        >
          {isOpen ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}


        </button>
      </div>
    </>
  )
}
