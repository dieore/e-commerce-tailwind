import clientPromise from '../../lib/mongodb.js'

export default async (req, res) => {
	const { method } = req;
	const client = await clientPromise;

	switch(method) {
		case "GET": 

		try {
			const db = client.db();
			const data = await db.collection("products").find({}).limit(8).toArray();
		
			res.status(200).json(data);
		} catch (err) {
			res.status(404).send(err);
		}
	}
};
