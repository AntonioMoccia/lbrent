import Image from 'next/image'
import { Logo, MENU_LINKS } from '../../constants'
function Navbar() {
    return (
        <header className=' h-20 w-full flex items-center py-2 px-2 md:px-4'>
            {/**LOGO */}
            <div className=' w-auto'>
                <Image src={Logo} alt='Alt logo' width={150} height={68} />
            </div>

            {/**MENU */}
            <nav className=' hidden'>
                <ul>
                    {MENU_LINKS.map((item, i) => (
                        <li key={i}>{item.label}</li>
                    ))}
                </ul>
            </nav>
            {/**BURGER MENU */}
            <div>

            </div>
        </header>
    )
}

export default Navbar