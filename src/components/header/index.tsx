import Logo from '../../assets/logo.svg'
import style from './style.module.scss'
import LangSelector from './LangSelector'
import Feedback from './feedback'
import { Link } from 'react-router-dom'

const Header = () => {

    const handleLanguageChange = (language: string) => {
        console.log("Selected language:", language);
    };

    return (
        <header className={style.header}>
            <div>
                <div className={style.leftContainer}>
                    <img src={Logo} alt="Logo" />
                    <nav>
                        <Link to="/user-management">User Management</Link>
                        <Link to="/object-viewer">Object Viewer</Link>
                    </nav>
                </div>
                <div className={style.rightContainer}>
                    <div>
                        <span>Edgar</span>
                        <span>Full Stack Developer</span>
                    </div>
                    <Feedback />
                    <LangSelector onChange={handleLanguageChange} />
                </div>
            </div>
        </header>
    )
}

export default Header