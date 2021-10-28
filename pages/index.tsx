import type { NextPage } from 'next'
import clientPromise from '../lib/mongodb'

interface Products {
	nombre: string;
	descripcion: string;
	stock: number;
	precio: number;
	imagen: string;
	promo: boolean;
	categoriaId: string;
	id: string;
}

type Prop = {
	data: Products[]
}

const Home: NextPage<Prop> = ({ data }): JSX.Element => {
	return (
		<div className="h-72">
			{
				data.map(d => (
					<li key={d.id}>
						{d.nombre}
					</li>
				))
			}
		</div>
	)
}

export async function getStaticProps(): Promise<any> {
	const client = await clientPromise;

	try {
		const db = client.db();
		const res = await db.collection("products").find({}).limit(8).toArray();
		const data = await JSON.parse(JSON.stringify(res));
		return {
			props: { data }
		}
	} catch (err) {
		return {
			props: {}
		}
	}
}

export default Home;
