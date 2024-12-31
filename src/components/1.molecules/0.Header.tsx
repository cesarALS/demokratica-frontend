import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    return (
        
        // La etiqueta que devuelve este componente es nav, simplememente porque nav es un contenedor que contiene muchos links, y claramente nuestro header es ese tipo de contenedor.
        
        <nav className={`bg-SecBlue flex items-center justify-center h-header-size w-full fixed top-0 z-50`}>
            <div className="flex justify-center items-center w-[15%] h-full">
                <div className="flex items-center justify-center w-[80%] h-[90%]"   >
                    <Link href={'/'} passHref>
                        <Image 
                            src="demokratica_general/logo_titulo.svg" 
                            alt="Demokratica" 
                            width={100} 
                            height={100}
                            layout="responsive"
                            className="object-cover transition-transform transform duration-200 hover:scale-110"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-[70%] h-full ">
                <HeaderLink link='/' name="Casos de Uso"></HeaderLink>
                <HeaderLink link='/conozcanos' name="Conózcanos"></HeaderLink>
                <HeaderLink link='/precios' name="Precios"></HeaderLink>
                <HeaderLink link='/ayuda' name="Ayuda"></HeaderLink>
                <HeaderLink link='/FAQs' name="Preguntas Frecuentes"></HeaderLink>
            </div>
            <div className="flex justify-center items-center w-[15%] h-full">
                <Link href={'/ingrese'} passHref>
                    <button className="bg-PrimCreamCan rounded-md px-8 border-[0.15em] border-black transition-transform transform duration-200 hover:scale-110">
                        Ingrese
                    </button>
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
        <Link href={link} className="object-cover transition-transform transform duration-200 hover:scale-115 text-[1.05em]">{name}</Link>
    );
}

export default Header;