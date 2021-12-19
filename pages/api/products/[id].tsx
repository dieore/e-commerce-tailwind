import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb.js'
import { ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, query } = req;
	const client = await clientPromise;

	switch (method) {
		case "GET":
			try {
				const db = client.db();
				const _id = new ObjectId(String(query.id));

				const data = await db.collection("products").findOne({ _id })
				res.status(200).json(data);
			} catch (err) {
				res.status(404).send(err);
			}
	}
};
