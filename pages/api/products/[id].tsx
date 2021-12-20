import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb.js';
import { ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, query, body } = req;
	const client = await clientPromise;
	const db = await client.db();
	const products = await db.collection("products");

	switch (method) {
		case "GET":
			try {
				const db = client.db();
				const _id = new ObjectId(String(query.id));

				const data = await products.findOne({ _id })
				res.status(200).json(data);
			} catch (err) {
				res.status(404).send(err);
			}
		case "DELETE":
			try {
				const _id = new ObjectId(body._id);
				const data = await products.findAnd({ _id });
				res.status(200).json(data);
			} catch (err) {
				res.status(400).json(err);
			}
		case "PATCH":
			try {
				const { nombre } = body;
				const _id = new ObjectId(body._id);
				const data = await products.updateOne(
					{ _id },
					{ $set: { nombre: nombre } },
					{ upsert: true }
				);
				res.status(200).json(data);
			} catch (err) {
				res.status(400).json(err);
			}
	}
};
