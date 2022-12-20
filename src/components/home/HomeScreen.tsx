import useLocales from '../../hooks/useLocales'
import { useDarkMode } from '../../themes/useDarkMode'
import Header from '../header/Header'
import CustomizedDialogs from '../common/elements/DialogBox'

const HomeScreen = ({toggleTheme}:any) => {
  const { t } = useLocales()
  // const [theme, toggleTheme] = useDarkMode()
  return (
    <>
    <Header toggleTheme={toggleTheme} />
      <div className="main-div">
        <h1 data-testid="password-exist" className="homescreen-text">
          {t<string>('home')}
        </h1>
        <div className="centering-div">
          <h1 className="h1-padding">TCL-CPAAS {t<string>('home')}</h1>
        </div>
      </div>
      {/* <CustomizedDialogs /> */}
    </>
  )
}

export default HomeScreen
