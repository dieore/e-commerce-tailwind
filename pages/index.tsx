import type { NextPage } from 'next';
import clientPromise from '../lib/mongodb';
import ProductCard from '../components/ProductCard';
import InfoCards from '../components/InfoCards';
import PopularCategories from '../components/PopularCategories';
import Slider from '../components/Slider'
import UserService from '../services/UserService';

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

const Home: NextPage<Props> = ({ products, categories }): JSX.Element => {
	// useEffect(() => {
	// 	(async () => {
	// 		const resp = await ProductService.findById("617b007670e4c2107d188aad");
	// 		const res = await ProductService.update("617b007670e4c2107d188aad", {nombre: "Sisisi"});
	// 		console.log(res, "aca")
	// 	})()
	// }, [])

	return (
		<>
			<Slider images={["https://http2.mlstatic.com/D_NQ_785995-MLA48811791164_012022-OO.webp",
				"https://http2.mlstatic.com/D_NQ_808146-MLA48432871146_122021-OO.webp",
				"https://http2.mlstatic.com/D_NQ_935561-MLA48831545527_012022-OO.webp",
				"https://http2.mlstatic.com/D_NQ_884579-MLA48382963371_112021-OO.webp"]} />
			<div className="p-8 bg-gray-200 sm:p-0">
				<h2 className="p-4 text-gray-600 text-2xl font-light sm:pt-7">Más vendidos</h2>
				<div className="h-96 justify-items-center gap-6 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2 sm:gap-3">
					{
						products.map(p => (
							<ProductCard showDetails={false} key={p._id} product={p} />
						))
					}
				</div>
				<h2 className="p-4 text-gray-600 text-2xl font-light">Ofertas</h2>
				<div className="h-96 justify-items-center gap-6 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2 sm:gap-3">
					{
						products.map(p => (
							<ProductCard showDetails={false} key={p._id} product={p} />
						))
					}
				</div>
				<PopularCategories categories={categories} />
			</div>
			<InfoCards />
		</>
	)
}

export async function getStaticProps(): Promise<any> {
	const u = await UserService.create({name: "Fede", email: "fede@gmail.com"});
	const client = await clientPromise;

	const db = client.db();
	const incomingProducts = await db.collection("products").find({}).limit(5).toArray();
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

export default Home;
