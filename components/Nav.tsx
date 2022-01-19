import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import AppContext from '../AppContext';
import { AuthService } from "../services/AuthService";
import { useRouter, NextRouter } from 'next/router'

const Nav: React.FC = () => {
    const { openMenu, setOpenMenu, currentUser } = useContext<any>(AppContext);
    const [showCategories, setShowCategories] = useState<boolean>(false);
    const router: NextRouter = useRouter();

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.clientWidth > 920) setOpenMenu(false);
        })
    }, [])

    const handleLogout = async (): Promise<void> => {
        await AuthService.logout();
        router.push("/");
    }

    return (
        <>
            <nav className="sticky top-0 z-20 flex justify-between lg:flex p-3 bg-green-900 items-center">
                <div className="flex justify-between w-1/5">
                    {
                        openMenu
                            ? <input placeholder="Buscar producto" className="text-xs p-1 border border-solid outline-none focus:border-green-300" />
                            : <a href="/" className="font-light text-2xl text-white tracking-wider cursor-pointer md:text-xl">TIENDAMAS</a>
                    }
                    <div className="flex items-center pl-3 lg:hidden">
                        <input placeholder="Buscar producto" className="rounded md:w-40 text-sm p-1 border border-solid outline-none focus:border-green-300" />
                        <img
                            src="/img/search.png"
                            // onClick={() => setOpenMenu(!openMenu)}
                            className="h-7 cursor-pointer pl-2"
                        />
                    </div>
                </div>
                <div className="xxl:hidden lg:flex items-center">
                    <hr className="h-7 w-0.5 mr-3 bg-white" />
                    <img
                        src="/img/shop.png"
                        // onClick={() => setOpenMenu(!openMenu)}
                        className="h-7 cursor-pointer xxl:hidden lg:flex justify-self-end"
                    />
                    <img
                        src="/img/burguer.png"
                        onClick={() => setOpenMenu(!openMenu)}
                        className="h-7 pl-4 cursor-pointer"
                    />
                </div>
                <div className="font-light flex items-center justify-between lg:hidden cursor-pointer text-white w-3/6">
                    {
                        currentUser
                            ? <Link href="/account"><a className="hover:underline hover:text-green-900 hover:bg-white bg-green-800 p-1 px-3 rounded">Mi cuenta</a></Link>
                            : <Link href="/login" ><a className="hover:underline hover:text-green-900 hover:bg-white bg-green-800 p-1 px-3 rounded">Ingresar</a></Link>
                    }
                    <a onMouseOver={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)} className="hover:underline">Categorias</a>
                    <Link href="/products" ><a className="hover:underline">Productos</a></Link>
                    <a className="hover:underline">Destacados</a>
                    <a className="hover:underline">Promos</a>
                    {
                        currentUser && <a onClick={handleLogout} className="hover:underline hover:text-green-900 hover:bg-white p-1 px-3 rounded">Salir</a>
                    }
                    <img
                        src="/img/shop.png"
                        // onClick={() => setOpenMenu(!openMenu)}
                        className="h-7 cursor-pointer"
                    />
                </div>
            </nav>
            {
                openMenu && (
                    <div className="bg-green-900 fixed w-3/6 h-full text-white flex flex-col justify-between z-20">
                        <div className="font-light flex flex-col">
                            {
                                currentUser && <Link href="/account"><a className="hover:underline p-5 cursor-pointer">Mi cuenta</a></Link>
                            }
                            <div onMouseOver={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)} className="flex flex-col justify-center">
                                <a className="hover:underline p-5 cursor-pointer">Categorias</a>
                                {showCategories && <Categories />}
                            </div>
                            <a href="/products" className="hover:underline p-5 cursor-pointer">Productos</a>
                            <a className="hover:underline p-5 cursor-pointer">Destacados</a>
                            <a className="hover:underline p-5 cursor-pointer">Promos</a>
                            <a className="hover:underline p-5 cursor-pointer">Contacto</a>
                            {
                                currentUser
                                    ? <a onClick={handleLogout} className="text-left hover:underline p-5 cursor-pointer">Salir</a>
                                    : <Link href="/login"><a className="text-left hover:underline p-5 cursor-pointer">Ingresar</a></Link>
                            }
                        </div>
                        <a href="/" className="font-light text-2xl tracking-wider cursor-pointer mb-16 p-5 self-center md:text-base">TIENDAMAS</a>
                    </div>
                )
            }
        </>
    )
};

export default Nav;

const Categories = () => {
    return (
        <ul className="pl-5 text-sm">
            <li className="hover:underline cursor-pointer p-3">Categoria 1</li>
            <li className="hover:underline cursor-pointer p-3">Categoria 2</li>
            <li className="hover:underline cursor-pointer p-3">Categoria 3</li>
            <li className="hover:underline cursor-pointer p-3">Categoria 4</li>
            <li className="hover:underline cursor-pointer p-3">Categoria 5</li>
        </ul>
    )
};
