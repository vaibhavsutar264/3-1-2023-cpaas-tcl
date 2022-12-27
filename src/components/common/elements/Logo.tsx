import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/CPaaSLogo.png'
import DarkLogo from '../../../assets/images/CPaaSLogo-dark.png'

const TclLogo = ({ theme = 'light' }: any) => {
    if (theme === 'light') {
        return (
            <Link className="logo" to="/">
                <img id="tata-logo-invoice" src={DarkLogo} alt="CPAAS TCL" />
            </Link>
        )
    } else {
        return (
            <Link className="logo" to="/">
                <img src={Logo} alt="CPAAS TCL" />
            </Link>

        )
    }
}

export default TclLogo
