import { ObjectId } from 'bson';
import ProductDetailCard from '../../components/ProductDetailCard';
import clientPromise from '../../lib/mongodb.js'

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
}

const ProductDetail: React.FC<Props> = ({ product }): JSX.Element => {
    return (
        <div className="p-4 bg-gray-200">
            <ProductDetailCard product={product} />
        </div>
    )
};

export default ProductDetail;

export async function getStaticPaths() {
    const client = await clientPromise;
    const db = client.db();
    const res = await db.collection("products").find({}).toArray();
    const data = await JSON.parse(JSON.stringify(res));


    const params = data.map(d => ({
        params: {
            id: d._id
        }
    }))

    return {
        paths: params,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const client = await clientPromise;
    const db = client.db();

    const id = params.id;
    const Object_Id = new ObjectId(id);

    const res = await db.collection("products").findOne({
        _id: Object_Id
    });

    const product = await JSON.parse(JSON.stringify(res));

    return {
        props: { product },
        revalidate: 10
    }
}
