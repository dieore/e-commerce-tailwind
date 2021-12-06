import { useEffect, useState } from "react";

const Nav: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.clientWidth > 768) setOpenMenu(false);
        })
    }, [])

    return (
        <>
            <nav className="sticky grid grid-cols-12 grid-rows-1 p-5 bg-green-900">
                <img src="/img/logo.png" className="md:col-span-6 h-12 col-span-2 cursor-pointer" />
                <div className="md:hidden col-span-10 flex items-center justify-self-end gap-6">
                    <input placeholder="Buscar producto" className="border border-solid border-green-100 outline-none focus:border-green-300" />
                    <a className="text-white hover:underline cursor-pointer font-medium font-mono tracking-wide">Inicio</a>
                    <a className="text-white hover:underline cursor-pointer font-medium font-mono tracking-wide">Categorias</a>
                    <a className="text-white hover:underline cursor-pointer font-medium font-mono tracking-wide">Productos</a>
                    <a className="text-white hover:underline cursor-pointer font-medium font-mono tracking-wide">Destacados</a>
                    <a className="text-white hover:underline cursor-pointer font-medium font-mono tracking-wide">Promos</a>
                    <a className="text-white hover:underline cursor-pointer font-medium font-mono tracking-wide">Contacto</a>
                    <img src="/img/faceIcon.png" className="h-8 cursor-pointer" />
                    <img src="/img/instaIcon.png" className="h-8 cursor-pointer" />
                </div>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="xxl:hidden md:flex col-span-6 flex items-center justify-self-end"
                >
                    <img src="/img/burguer.png" className="h-8 cursor-pointer" />
                </div>
            </nav>
            {
                openMenu && (
                    <div className="grid grid-cols-6 p-5 text-center bg-green-800">
                        <a className="text-white hover:underline cursor-pointer font-medium col-span-6 mb-5">Inicio</a>
                        <a className="text-white hover:underline cursor-pointer font-medium col-span-6 mb-5">Categorias</a>
                        <a className="text-white hover:underline cursor-pointer font-medium col-span-6 mb-5">Productos</a>
                        <a className="text-white hover:underline cursor-pointer font-medium col-span-6 mb-5">Destacados</a>
                        <a className="text-white hover:underline cursor-pointer font-medium col-span-6 mb-5">Promos</a>
                        <a className="text-white hover:underline cursor-pointer font-medium col-span-6 mb-5">Contacto</a>
                        <div className="col-span-6 flex mb-5 justify-center gap-3">
                            <img src="/img/faceIcon.png" className="h-8 cursor-pointer" />
                            <img src="/img/instaIcon.png" className="h-8 cursor-pointer" />
                        </div>
                        <input placeholder="Buscar producto" className="mt-5 col-span-6 mb-5 justify-self-center border border-solid border-green-100 outline-none focus:border-green-300" />

                    </div>
                )
            }
        </>
    )
};

export default Nav;