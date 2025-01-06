import Image from 'next/image'
import Link from 'next/link'
import { hoverScale } from '@/utils/tailwindUtils';
import demokraticaRoutes from '@/utils/routeUtils';
import TitleLogo from '../0.atoms/1.TitleLogo';

const headerRoutes: (keyof typeof demokraticaRoutes)[] = [
    "ayuda", "casosDeUso", "conozcanos", "precios", "faqs"
]

const Header = () => {

    return (
        
        // La etiqueta que devuelve este componente es nav, simplememente porque nav es un contenedor que contiene muchos links, y claramente nuestro header es ese tipo de contenedor.
        
        <nav className={`bg-SecBlue flex items-center justify-center h-header-size w-full fixed top-0 z-50`}>
            <div className="flex justify-center items-center w-[15%] h-full">
                    <div className="flex items-center justify-center w-[80%] h-[90%]"   >
                        <Link href={'/'} passHref title='Demokratica'>
                            <TitleLogo baseFill="#000000" classNameGeneral={`w-[80%] ${hoverScale(110,100)}`}/>                     
                        </Link>
                    </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-[70%] h-full ">
                {headerRoutes.map(route =>{
                        return <HeaderLink
                            key={route}
                            name={demokraticaRoutes[route].name}
                            link={demokraticaRoutes[route].link}
                        >
                        </HeaderLink>
                    })
                }
            </div>
            <div className="flex justify-center items-center w-[15%] h-full">
                <Link 
                    href={demokraticaRoutes.login.link} 
                    passHref 
                    title="Loguearse"
                    className={`flex items-center justify-center bg-PrimCreamCan rounded-md px-8 border-[0.15em] border-black h-[50%] w-[60%] ${hoverScale(115,100)}`}

                >
                    {demokraticaRoutes.login.name}
                </Link>
            </div>
        </nav>
    );
};

// Este es un componente que, en principio, solo se usa en el header. Por eso lo puse acá

interface HeaderLinkProps {
    name: string,
    link: string
}

const HeaderLink = ( { name, link }: HeaderLinkProps) => {
    return (
        <Link href={link} className={`object-cover text-[1.05em] ${hoverScale(115,100)}`}>{name}</Link>
    );
}

export default Header;