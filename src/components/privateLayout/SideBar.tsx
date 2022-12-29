import * as React from 'react'
import {
  appRoutes,
} from '../../utils/constants'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Link, useNavigate } from 'react-router-dom'
import useLocales from '../../hooks/useLocales'
import { useDispatch, useSelector } from '../../redux/store'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined'
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import Ticket from '../common/icons/tickets'
import { reset, updateWidth } from '../../redux/slices/commonSlice'

type SidebarProps = {
  toggleTheme: any
  handleADWidth?: any
  handleBDWidth?: any
}


export const SideBar = ({
  toggleTheme,
  handleADWidth,
  handleBDWidth,
}: SidebarProps ) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector((state: any) => state.auth || [])
  const { t } = useLocales()
  const navigate = useNavigate()


  const getActiveClass = (path: any) => {
    return window.location.pathname.includes(path) ? 'sidebar-active' : ''
  }
  if (user == null) {
    navigate('/')
  }

  React.useEffect(() => {
    dispatch(reset())
  }, [])

  const [sidebarWidth, setSidebarWidth] = React.useState<boolean>(false);

  return (
    <>
      <div
        className="dashboard__sidebar"
        id="sidebar-left"
        style={{
          // transition: 'all 350ms 0ms ease-in',
          zIndex: 1,
          height: '100vh',
          position: 'fixed',
          top: '90px',
          width: '300px'
        }}
      >
        <div className="sidebar__inner">
          <ul className="sidebar__list">
            <li className="list__item">
              <Link
                className={`item__link ${getActiveClass(appRoutes.DASHBOARD)}`}
                to={appRoutes.DASHBOARD}
              >
                <span className="link__icon">
                  <SpeedOutlinedIcon />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('dashboard')}
                </span>
                {(window.location.pathname == appRoutes.DASHBOARD)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('dashboard')}
                  </span>):''}  
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <PersonOutlineOutlinedIcon />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('userManagement')}
                </span>
                {(window.location.pathname == appRoutes.USER_MANAGEMENT)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('userManagement')}
                  </span>):''}  
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <HomeRepairServiceOutlinedIcon />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('services')}
                </span>
                {(window.location.pathname == appRoutes.SERVICES)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('services')}
                  </span>):''}
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <ChatBubbleTwoToneIcon />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('sms')}
                </span>
                {(window.location.pathname == appRoutes.SMS)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('sms')}
                  </span>):''}  
              </Link>
            </li>
            <li className="list__item">
              <Link
                className={`item__link ${getActiveClass(appRoutes.BILLING)}`}
                to={appRoutes.BILLING}
              >
                <span className="link__icon">
                  <ReceiptOutlinedIcon />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('billingInvoice')}
                </span>
                {(window.location.pathname == appRoutes.BILLING)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('billingInvoice')}
                  </span>):''}
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  {/* <ConfirmationNumberOutlinedIcon /> */}
                  <Ticket />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('tickets')}
                </span>
                {(window.location.pathname == appRoutes.TICKETS)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('tickets')}
                  </span>):''}
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <SettingsIcon />
                </span>
                <span className="link__text" id="link__text">
                  {t<string>('support')}
                </span>
                {(window.location.pathname == appRoutes.SUPPORT)?(
                  <span className="link__text" id="link__col-text">
                    {t<string>('support')}
                  </span>):''}
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
            // if (handleBDWidth) {
            //   handleBDWidth()
            // }
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
