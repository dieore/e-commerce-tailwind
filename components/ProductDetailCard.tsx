import React, { useState } from "react";
import Image from "next/image";

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
    one: string;
    two: string;
    three: string;
}

const ProductDetailCard: React.FC<Props> = ({ product }): JSX.Element => {
    let styleOff = "w-20 border md:w-10";
    let styleOn = "w-20 border border-2 border-gray-500 md:w-10";

    const [img, setImg] = useState<string>(product.imagen);
    const [quantity, setQuantity] = useState<number>(1);
    const [smallsImages, setSmallImages] = useState<SelectedImage>({
        one: styleOff,
        two: styleOff,
        three: styleOff
    })
    const { nombre, descripcion, stock, precio, imagen, promo, categoriaId, _id } = product;

    return (
        <>
            <div className="md:hidden bg-white shadow-lg rounded p-10 grid grid-cols-3">
                <div className="flex col-span-2">
                    <div className="flex-col">
                        <div
                            onMouseMove={() => setSmallImages({ one: styleOn, two: styleOff, three: styleOff })}
                            className={smallsImages.one}
                        >
                            <Image
                                src={imagen}
                                alt="Producto"
                                layout="responsive"
                                width="13rem"
                                height="13rem"
                            />
                        </div>
                        <div
                            onMouseMove={() => setSmallImages({ one: styleOff, two: styleOn, three: styleOff })}
                            className={smallsImages.two}
                        >
                            <Image
                                src={imagen}
                                alt="Producto"
                                layout="responsive"
                                width="13rem"
                                height="13rem"
                            />
                        </div>
                        <div onMouseMove={() => setSmallImages({ one: styleOff, two: styleOff, three: styleOn })}
                            className={smallsImages.three}
                        >
                            <Image
                                src={imagen}
                                alt="Producto"
                                layout="responsive"
                                width="13rem"
                                height="13rem"
                            />
                        </div>
                    </div>
                    <div className="w-3/4 pl-20">
                        <Image
                            src={img}
                            alt="Producto"
                            layout="responsive"
                            width="13rem"
                            height="13rem"
                            className="rounded"
                        />
                    </div>
                </div>
                <div className="p-4 border border-gray-200 rounded">
                    <div className="h-full flex flex-col justify-between">
                        <p className="text-2xl">{nombre}</p>
                        {!promo && <p className="line-through">${precio}</p>}
                        <div className="flex items-center w-2/4 justify-between">
                            <p className="text-4xl font-light">${precio}</p>
                            <p className="text-green-900 font-medium">{!promo && "35% off"}</p>
                        </div>
                        <p className="text-sm text-green-900 font-medium">Pagá con tarjeta de débito/crédito o efectivo</p>
                        {!promo && <p className="rounded w-max p-1 text-white bg-green-800 text-sm">Oferta del día</p>}
                        <p>{stock > 1 ? "Stock disponible" : "¡Último en stock!"}</p>
                        <div className="flex w-3/4 justify-between">
                            <p>Cantidad:</p>
                            <select onChange={(e) => setQuantity(Number(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <p> ({stock} {stock > 1 ? "disponibles" : "disponible"})</p>
                        </div>
                        <p className="text-green-900 text-sm font-medium hover:underline cursor-pointer">Envío a destino | Ver zona de entrega</p>
                        <hr />
                        <button className="border border-green-900 p-2 m-2 text-green-900 rounded hover:opacity-95">Agregar al carrito</button>
                        <button className="border p-2 m-2 bg-green-800 text-white rounded hover:opacity-95">Comprar ahora</button>
                        <hr />
                        <p className="text-sm hover:underline cursor-pointer">¿Dudas? Contacta a un vendedor</p>
                        <div>
                            <p className="text-sm hover:underline cursor-pointer">Venta telefónica o por whatsapp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden bg-white p-10">
                <hr className="p-5" />
                <h3 className="font-medium">Descripción</h3>
                <p className="col-span-3">{descripcion}</p>
            </div>



            <div className="xxl:hidden md:grid bg-white shadow-lg rounded p-1 grid-cols-2">
                <div className="p-4 flex flex-col justify-between">
                    <div>
                        <Image
                            src={img}
                            alt="Producto"
                            layout="responsive"
                            width="13rem"
                            height="13rem"
                            className="rounded"
                        />
                    </div>
                    <div className="flex justify-evenly mt-2">
                        <div
                            onMouseMove={() => setSmallImages({ one: styleOn, two: styleOff, three: styleOff })}
                            className={smallsImages.one}
                        >
                            <Image
                                src={imagen}
                                alt="Producto"
                                layout="responsive"
                                width="13rem"
                                height="13rem"
                            />
                        </div>
                        <div
                            onMouseMove={() => setSmallImages({ one: styleOff, two: styleOn, three: styleOff })}
                            className={smallsImages.two}
                        >
                            <Image
                                src={imagen}
                                alt="Producto"
                                layout="responsive"
                                width="13rem"
                                height="13rem"
                            />
                        </div>
                        <div onMouseMove={() => setSmallImages({ one: styleOff, two: styleOff, three: styleOn })}
                            className={smallsImages.three}
                        >
                            <Image
                                src={imagen}
                                alt="Producto"
                                layout="responsive"
                                width="13rem"
                                height="13rem"
                            />
                        </div>
                    </div>
                    <hr />
                    <p className="text-sm text-green-900 font-medium">Pagá con tarjeta de débito/crédito o efectivo</p>
                    {!promo && <p className="rounded w-max p-1 text-white bg-green-800 text-sm">Oferta del día</p>}
                    <p>{stock > 1 ? "Stock disponible" : "¡Último en stock!"}</p>
                </div>
               {/* responsive */}
                <div className="flex flex-col p-4">
                    <div className="h-64 flex flex-col justify-between">
                        <p className="font-medium">{nombre}</p>
                        {!promo && <p className="line-through">${precio}</p>}
                        <div className="flex items-center justify-between w-4/5">
                            <p className="text-4xl font-light">${precio}</p>
                            <p className="text-green-900 font-medium">{!promo && "35% off"}</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Cantidad:</p>
                            <select onChange={(e) => setQuantity(Number(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <p className="text-sm"> ({stock} {stock > 1 ? "disponibles" : "disponible"})</p>
                        <p className="text-green-900 text-sm font-medium hover:underline cursor-pointer">Envío a destino | Ver zona de entrega</p>
                    </div>
                    <br/>
                    <div className="h-60 flex flex-col justify-between">
                        <button className="border border-green-900 p-2 text-green-900 rounded hover:opacity-95">Agregar al carrito</button>
                        <button className="border p-2 bg-green-800 text-white rounded hover:opacity-95">Comprar ahora</button>
                        <hr />
                        <p className="text-sm hover:underline cursor-pointer">¿Dudas? Contacta a un vendedor</p>
                        <p className="text-sm hover:underline cursor-pointer">Venta telefónica o por whatsapp</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductDetailCard;