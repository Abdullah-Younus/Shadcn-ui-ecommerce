import logo from '/public/logo.webp';
import Image from 'next/image';
const Header = () => {
    return (
        <div>
            <Image src={logo} alt='logo' />
        </div>
    )
}

export default Header;