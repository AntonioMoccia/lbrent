import Image from 'next/image'
import { Logo, FOOTER_MENU } from '../constants'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


function Footer() {
    return (
        <footer className=' h-[200px] max-h-[200px]'>
            <div className=' h-1/2  flex justify-between items-center px-4'>
                <div>
                    <Image src={Logo} alt='Alt logo' width={100} height={68} />
                </div>
                <div>
                    <ul className=' flex gap-2'>
                        {
                            FOOTER_MENU.map((item, i) => (
                                <li className=' text-sm' key={i}>{item.label}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className=' flex gap-2'>
                    <FaInstagram className='text-2xl bg-transparent text-black' />
                    <FaWhatsapp className='text-2xl bg-transparent text-black' />
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
            <div className=' w-[80%] pl-[10%] h-[1px] bg-black'/>{/**Divider */}
            </div>
            <div className=' h-1/2 flex justify-center items-center'>
            2077 Untitled Ui. All rights reserved
            </div>
        </footer>
    )
}

export default Footer