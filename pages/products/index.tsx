import type { NextPage } from 'next';
import clientPromise from '../../lib/mongodb';
import ProductCard from '../../components/ProductCard';

interface Products {
    nombre: string;
    descripcion: string;
    stock: number;
    precio: number;
    imagen: string;
    promo: boolean;
    categoriaId: string;
    _id: string;
}

interface Categories {
    nombre: string;
    _id: string;
}

type Props = {
    products: Products[];
    categories: Categories[];
}

const Products: NextPage<Props> = ({ products, categories }): JSX.Element => {
    return (
        <div className="p-8 bg-gray-200 sm:p-0">
            <h2 className="p-4 text-gray-600 text-2xl font-light sm:pt-7">Productos</h2>
            <div className="justify-items-center gap-6 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2 sm:gap-3">
                {
                    products.map(p => (
                        <ProductCard key={p._id} product={p} showDetails={true} />
                    ))
                }
            </div>
        </div>
    )
};

export default Products;

export async function getStaticProps(): Promise<any> {
    const client = await clientPromise;

    const db = client.db();
    const incomingProducts = await db.collection("products").find({}).limit(20).toArray();
    const products = await JSON.parse(JSON.stringify(incomingProducts));

    const incomingCategories = await db.collection("categories").find({}).limit(5).toArray();
    const categories = await JSON.parse(JSON.stringify(incomingCategories));

    return {
        props: {
            products,
            categories
        },
        revalidate: 10
        //this updates the page
    }
}