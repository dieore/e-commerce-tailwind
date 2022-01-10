import React, { useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

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
    product: Product
}

let styleOff: string;
let styleOn: string;

interface SelectedImage {
    0: string;
    1: string;
    2: string;
}

const ProductDetailCard: React.FC<Props> = ({ product }): JSX.Element => {
    let styleOff = "w-20 border lg:w-10";
    let styleOn = "w-20 border border-2 border-gray-500 lg:w-10";

    const [img, setImg] = useState<string>(product.imagen);
    const [quantity, setQuantity] = useState<number>(1);
    const [smallsImages, setSmallImages] = useState<SelectedImage>({
        0: styleOff,
        1: styleOff,
        2: styleOff
    })
    const { nombre, descripcion, stock, precio, imagen, promo, categoriaId, _id } = product;

    return (
        <>
            <div className="grid bg-white shadow-lg rounded p-3 grid-cols-2 sm:grid-cols-1">
                <div className="p-4 flex flex-row-reverse justify-between lg:justify-center lg:flex-col">
                    <div className="w-full">
                        <Image
                            src={img}
                            alt="Producto"
                            layout="responsive"
                            width="13rem"
                            height="13rem"
                            className="rounded"
                        />
                    </div>
                    <div className="flex flex-col justify-evenly mt-2 p-4 lg:p-0 lg:flex-row">
                        {
                            [0, 1, 2].map((p, idx) => (
                                <div
                                    onMouseMove={() => setSmallImages({ ...smallsImages, [idx]: styleOn })}
                                    className={smallsImages[idx]}
                                >
                                    <Image
                                        src={imagen}
                                        alt="Producto"
                                        layout="responsive"
                                        width="13rem"
                                        height="13rem"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col p-4">
                    <div className="h-64 flex flex-col justify-between">
                        <p className="text-2xl lg:text-xl font-medium">{nombre}</p>
                        {!promo && <p className="line-through">${precio}</p>}
                        <div className="flex items-center justify-between w-2/6 md:w-full">
                            <p className="text-4xl font-light">${precio}</p>
                            <p className="text-green-900 font-medium">{!promo && "35% off"}</p>
                        </div>
                        <div className="flex justify-between text-sm w-2/6 md:w-full">
                            <p>Cantidad:</p>
                            <select onChange={(e) => setQuantity(Number(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <p className="text-sm"> ({stock} {stock > 1 ? "disponibles" : "disponible"})</p>
                        {!promo && <p className="flex rounded w-max p-1 text-white bg-green-800 text-sm">Oferta del día</p>}
                        <p className="flex">{stock > 1 ? "Stock disponible" : "¡Último en stock!"}</p>
                        <p className="text-sm text-green-900 font-medium">Pagá con tarjeta de débito/crédito o efectivo</p>
                    </div>
                    <br />
                    <div className="h-60 flex flex-col justify-between">
                        <button className="border border-green-900 p-2 text-green-900 rounded hover:opacity-95">Agregar al carrito</button>
                        <button className="border p-2 bg-green-800 text-white rounded hover:opacity-95">Comprar ahora</button>
                        <div className="flex justify-between flex-col h-28">
                            <p className="text-green-900 text-sm font-medium hover:underline cursor-pointer">Envío a destino | Ver zona de entrega</p>
                            <p className="text-sm hover:underline cursor-pointer">¿Dudas? Contacta a un vendedor</p>
                            <p className="text-sm hover:underline cursor-pointer">Venta telefónica o por whatsapp</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-full">
                    <h2 className="text-lg font-medium px-4 pt-3">Productos similares</h2>
                    <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-4">
                        {
                            [0, 1, 2, 3].map(p => (
                                <ProductCard showDetails={true} product={{ nombre: "Proteina de arvejas vegana Granger 1kg", stock: 20, categoriaId: "5", descripcion: "Aporta proteínas que favorecen la recuperación muscular y el aumento de masa muscular.", precio: 200, imagen: "https://siempresano.com.ar:3009/api/containers/images/download/aritos de fruta.jpg" }} />
                            ))
                        }
                    </div>
                </div>
                <hr className="m-3 col-span-full" />
                <div className="col-span-full p-4">
                    <h2 className="font-medium" >Descripción del producto</h2>
                    <p className="pt-2 font-light tracking-wide" >{descripcion}</p>
                </div>
            </div>
        </>
    )
};

export default ProductDetailCard;