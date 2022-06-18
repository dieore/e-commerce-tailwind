import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
    nombre: string;
    descripcion: string;
    stock: number;
    precio: number;
    imagen: string;
    promo: boolean;
    categoriaId: string;
    _id: string;
}

type Props = {
    product: Product;
    showDetails: boolean;
}

const ProductCard: React.FC<Props> = ({ product, showDetails }): JSX.Element => {
    const [hover, setHover] = useState<boolean>(showDetails);
    const [mobile, setMobile] = useState<boolean>()
    const { nombre, descripcion, stock, precio, imagen, promo, _id, categoriaId } = product;

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.clientWidth < 768) {
                setMobile(true);
                setHover(true);
            } else {
                setMobile(false);
                if (!showDetails) setHover(false);
            }
        })
    }, [])

    return (
        //if I put block on the parent of the image component, the responsive way on layout prop
        //It's gonna work https://nextjs.org/docs/api-reference/next/image
        
        <Link href={`/products/${_id}`}>
            <div
                onMouseOver={() => !mobile && setHover(true)}
                onMouseLeave={() => !mobile && !showDetails && setHover(false)}
                className={hover ? "rounded bg-white w-full hover:shadow-2xl cursor-pointer" : "h-80 rounded bg-white w-full hover:shadow-2xl cursor-pointer"}
            >
                <div className="block rounded">
                    <img
                        src={imagen}
                        alt="Producto"
                        className="rounded-t"
                    />
                </div>
                <hr />
                {/* si tiene precio anterior y esta en oferta, mostrarlo (cuando haga las props) */}
                {promo && hover && <p className="px-3 text-xs text-gray-500 line-through font-light">Aca iria el precio anterior</p>}
                <div className="flex items-center">
                    <p className="p-3 text-lg font-normal">${precio?.toString().toUpperCase()}</p>
                    {promo && <p className="px-2 text-md text-green-800 text-sm font-normal">20 % OFF</p>}
                </div>
                {stock <= 2 && <p className="px-3 text-xs text-green-800 font-normal">ÚLTIMAS UNIDADES</p>}
                {hover && <p className="p-3 text-sm font-light text-gray-500">{nombre}</p>}
            </div>
        </Link>
    )
};

export default ProductCard;