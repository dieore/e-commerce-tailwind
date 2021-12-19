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
            {
                openMenu && (
                    <div className="fixed h-full w-3/6 z-20 bg-green-900 text-white flex flex-col justify-between">
                        <div className="flex flex-col">
                            <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Categorias</a>
                            <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Productos</a>
                            <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Destacados</a>
                            <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Promos</a>
                            <a className="hover:underline hover:bg-green-700 p-5 cursor-pointer">Ayuda</a>
                        </div>
                        <a href="/" className="font-extrabold text-3xl tracking-wider cursor-pointer p-5 self-center">TIENDAMAS</a>
                    </div>
                )
            }
            <nav className="sticky top-0 z-10 grid grid-cols-2 grid-rows-3 p-3 bg-green-900 items-center">
                <a href="/" className="font-extrabold text-3xl text-white tracking-wider cursor-pointer">TIENDAMAS</a>
                <img
                    src="/img/burguer.png"
                    onClick={() => setOpenMenu(!openMenu)}
                    className="h-8 cursor-pointer xxl:hidden lg:flex justify-self-end"
                />

                <hr className="grid col-span-2" />
                <input placeholder="Buscar producto" className="p-1 border border-solid outline-none focus:border-green-300 rounded" />
                <div className="flex items-center justify-between lg:hidden cursor-pointer text-white mx-4">
                    <a className="hover:underline">Categorias</a>
                    <a className="hover:underline">Productos</a>
                    <a className="hover:underline">Destacados</a>
                    <a className="hover:underline">Promos</a>
                    <a className="hover:underline cursor-pointer">Ayuda</a>
                </div>
                <img
                    src="/img/shop.png"
                    onClick={() => setOpenMenu(!openMenu)}
                    className="h-8 cursor-pointer xxl:hidden lg:flex justify-self-end"
                />
            </nav>
        </>
    )
};

export default Nav;