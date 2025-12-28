import Link from "./Link";

const Footer = () => {
    return (
        <footer className="footer">
            <h1>First/Last name</h1>
            <ul className="footer-list">
                <li>Phone number:<Link href="tel: +1234567809">+1234567809</Link></li>
                <li>Email:<Link href="mailto: someone@gmail.com">someone@gmail.com</Link></li>
                <li>Git:<Link href="https://github.com/test">https://github.com/test</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;