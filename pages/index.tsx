import type { NextPage } from 'next'
import clientPromise from '../lib/mongodb'
import ProductCard from '../components/ProductCard'

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

type Props = {
	data: Products[]
}

const Home: NextPage<Props> = ({ data }): JSX.Element => {
	return (
		<div className="p-8 bg-gray-200">
			<h2 className="p-4 text-gray-600 text-2xl font-light">Más vendidos</h2>
			<div className="h-96 justify-items-center gap-6 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2">
				{
					data.map(d => (
						<ProductCard key={d._id} product={d} />
					))
				}
			</div>
			<h2 className="p-4 text-gray-600 text-2xl font-light">Oferta</h2>
			<div className="h-96 justify-items-center gap-6 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2">
				{
					data.map(d => (
						<ProductCard key={d._id} product={d} />
					))
				}
			</div>
			<h2 className="p-4 text-gray-600 text-2xl font-light">Destacados</h2>
			<div className="h-96 justify-items-center gap-6 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2">
				{
					data.map(d => (
						<ProductCard key={d._id} product={d} />
					))
				}
			</div>
		</div>
	)
}

export async function getStaticProps(): Promise<any> {
	const client = await clientPromise;

	const db = client.db();
	const res = await db.collection("products").find({}).limit(5).toArray();
	const data = await JSON.parse(JSON.stringify(res));

	return {
		props: { data },
		revalidate: 10
	}
}

export default Home;
