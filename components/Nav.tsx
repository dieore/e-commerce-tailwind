import { useEffect, useState } from "react";

const Nav: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.clientWidth > 920) setOpenMenu(false);
        })
    }, [])

    return (
        <>
            <nav className="sticky top-0 z-10 grid grid-cols-3 p-5 bg-green-900 items-center">
                <p className="font-extrabold text-3xl text-white tracking-wider cursor-pointer md:text-2xl">TIENDAMAS</p>
                <input placeholder="Buscar producto" className="h-8 rounded lg:col-start-3 md:col-span-2 lg:mx-6 border border-solid outline-none focus:border-green-300 p-2" />
                <div className="flex items-center justify-evenly lg:hidden cursor-pointer font-light tracking-wide text-white">
                    <a>Categorias</a>
                    <a>Productos</a>
                    <a>Destacados</a>
                    <a>Promos</a>
                </div>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="xxl:hidden col-start-4 lg:flex items-center justify-self-end"
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