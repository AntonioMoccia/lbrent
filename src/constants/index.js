import Logo from '../assets/logo.png'
import HeroImage from '../assets/hero-image.png'
import SlideImage1 from '../assets/slide-1.png'
import SlideImage2 from '../assets/slide-2.png'
import SlideImage3 from '../assets/slide-3.png'
import CardImage from '../assets/cardImage.png'
import CarImage from '../assets/car.png'
const MENU_LINKS = [
    {
        label: 'Home',
        href: "/"
    },
    {
        label: 'Breve termine',
        href: "/breve-termine"
    },
    {
        label: 'Lungo termine',
        href: "/lungo-termine"
    },
]
const SLIDER = [
    {
        img: SlideImage1
    },
    {
        img: SlideImage2
    },
    {
        img: SlideImage1
    },
    {
        img: SlideImage2
    },
    {
        img: SlideImage1
    },
    {
        img: SlideImage3
    }
]
const FOOTER_MENU = [
    {
        label: 'Terms',
        href: "/"
    },
    {
        label: 'Privacy',
        href: "/"
    },
    {
        label: 'Cookie',
        href: "/"
    },
]

const Cards = [
    {
        title: "BMWM 440 COUPE 1",
        image: CardImage,
        neopatentato: false,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Automatic',
        segment:'sportiva'
    },
    {
        title: "BMWM 440 COUPE 2",
        image: CardImage,
        neopatentato: true,
        posti: 2,
        carburante: 'Diesel',
        cambio: 'Automatic',
        segment:'sportiva'
    },
    {
        title: "BMWM 440 COUPE 3",
        image: CardImage,
        neopatentato: false,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Automatic',
        segment:'sportiva'
    },
    {
        title: "BMWM 440 COUPE 4",
        image: CardImage,
        neopatentato: true,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Automatic',
        segment:'crossover'
    },
    {
        title: "BMWM 440 COUPE 5",
        image: CardImage,
        neopatentato: true,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Manual',
        segment:'sportiva'
    },
    {
        title: "BMWM 440 COUPE 5",
        image: CardImage,
        neopatentato: false,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Automatic',
        segment:'sportiva'
    },
    {
        title: "BMWM 440 COUPE 5",
        image: CardImage,
        neopatentato: true,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Manual',
        segment:'crossover'
    },
    {
        title: "BMWM 440 COUPE 5",
        image: CardImage,
        neopatentato: true,
        posti: 2,
        carburante: 'Benzina',
        cambio: 'Automatic',
        segment:'sportiva'
    }
]

export {
    Logo,
    MENU_LINKS,
    HeroImage,
    SLIDER,
    FOOTER_MENU, 
    Cards,
    CarImage
}