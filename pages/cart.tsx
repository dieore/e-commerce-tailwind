import { NextPage } from "next";
import Link from "next/link";

const Cart: NextPage = (): JSX.Element => {
    return (
        <div className="h-screen bg-gray-200 p-8 sm:p-4">
            <div className="h-4/5 flex items-center justify-center">
                <div className="bg-white p-10 flex flex-col justify-evenly items-center h-64 sm:h-52">
                    <h1 className="text-2xl sm:text-xl font-light">No hay productos en el carrito</h1>
                    <Link href="/products">
                        <a className="sm:text-sm border p-2 rounded bg-green-700 text-white hover:opacity-95">Ir a productos</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;