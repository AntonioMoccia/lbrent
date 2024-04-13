import Image from 'next/image'
import { Logo, FOOTER_MENU } from '../constants'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from 'lucide-react';


function Footer() {
    return (
        <footer className=' h-[150px] max-h-[200px] pt-5 lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <div className=' h-1/2 lg:w-[80%] flex justify-between items-center px-4'>
                <div>
                    <Image src={Logo} alt='Alt logo' width={100} height={68} />
                </div>
                <div>
                    <ul className=' flex gap-2'>
                        {
                            FOOTER_MENU.map((item, i) => (
                                <li className=' text-xs lg:text' key={i}>{item.label}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className=' flex gap-2'>
                    <a target='__blank' href='https://www.instagram.com/lb_rent_/'>
                        <FaInstagram className='text-xl bg-transparent text-black' />
                    </a>
                    <a target='__blank' href='https://www.facebook.com/autonoleggiolbrent/'>
                        <FaFacebook className='text-xl bg-transparent text-black' />
                    </a>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className=' w-[80%] pl-[10%] h-[1px] bg-black' />{/**Divider */}
            </div>
            <div className=' h-1/2 flex justify-center items-center'>
                2077 Untitled Ui. All rights reserved
            </div>
        </footer>
    )
}

export default Footer