import ChangeThemeButton from "./ChangeThemeButton";
import Link from "./Link";


const Header = () => {
    return (
        <header className="header">
            <h1>First/Last name</h1>
            <ul className="header_list">
                <li><Link href="/todo-list">Головна</Link></li>
                <li><Link href="/contacts">Контакти</Link></li>
                <li><Link href="/">Про мене</Link></li>
            </ul>
            <ChangeThemeButton/>
        </header>
    )
}

export default Header;