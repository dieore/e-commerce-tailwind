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
            <nav className="sticky top-0 z-10 grid grid-cols-4 p-5 bg-green-900 items-center lg:grid-cols-3 sm:grid-rows-2 sm:grid-cols-2">
                <p className="font-extrabold text-3xl text-white tracking-wider cursor-pointer md:text-2xl sm:text-lg">TIENDAMAS</p>
                <input placeholder="Buscar producto" className="h-8 lg:mx-2 border border-solid outline-none focus:border-green-300 p-2 rounded md:col-span-2 sm:row-start-2 sm:col-start-1 sm:mx-0 sm:col-span-full sm:h-7" />
                <div className="flex items-center justify-evenly lg:hidden cursor-pointer tracking-wide text-white col-start-3 col-span-2">
                    <a className="hover:underline">Categorias</a>
                    <a className="hover:underline">Productos</a>
                    <a className="hover:underline">Destacados</a>
                    <a className="hover:underline">Promos</a>
                </div>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="xxl:hidden col-start-4 lg:flex items-center justify-self-end sm:col-start-2"
                >
                    <img src="/img/burguer.png" className="h-8 cursor-pointer" />
                </div>
            </nav>
            {
                openMenu && (
                    <div className="fixed h-full w-3/6 z-20 5 bg-green-900 flex flex-col text-white">
                        <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Categorias</a>
                        <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Productos</a>
                        <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Destacados</a>
                        <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Promos</a>
                    </div>
                )
            }
        </>
    )
};

export default Nav;