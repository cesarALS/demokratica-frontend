import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-SecBlue flex items-center justify-center h-[10vh] fixed top-0 z-50">
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
                <HeaderLink link='/conocenos' name="Conócenos"></HeaderLink>
                <HeaderLink link='/' name="Precios"></HeaderLink>
                <HeaderLink link='/ayuda' name="Ayuda"></HeaderLink>
                <HeaderLink link='/FAQs' name="Preguntas Frecuentes"></HeaderLink>
            </div>
            <div className="flex justify-center items-center w-[15%] h-full">
                <Link href={'/'} passHref>
                    <button className="bg-PrimCreamCan rounded-md px-8 border-[0.15em] border-black transition-transform transform duration-200 hover:scale-110">
                        Ingresa
                    </button>
                </Link>
            </div>
        </header>
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