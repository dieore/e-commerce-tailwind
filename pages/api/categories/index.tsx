import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb.js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const client = await clientPromise;
				const db = client.db();
				
				const data = await db.collection("products").find({}).limit(8).toArray();

				res.status(200).json(data);
			} catch (err) {
				res.status(404).send(err);
			}
	}
};
