import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb.js';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, body } = req;

	const client = await clientPromise;
	const db = await client.db();
	const products = await db.collection("products");

	switch (method) {
		case "GET":
			try {
				const data = await products.find({}).limit(8).toArray();
				res.status(200).json(data);
			} catch (err) {
				res.status(404).send(err);
			}
		case "POST":
			try {
				const data = await products.insertOne({ ...body, _id: new ObjectId() });
				res.status(200).json({
					...body,
					_id: data.insertedId
				});
			} catch (err) {
				res.status(400).send(err);
			}
	}
};
