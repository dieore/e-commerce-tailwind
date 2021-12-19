import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb.js'


export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, query, body } = req;
	const client = await clientPromise;
	const db = client.db();

	switch (method) {
		case "GET":
			try {
				const data = await db.collection("products").find({}).limit(8).toArray();
				res.status(200).json(data);
			} catch (err) {
				res.status(404).send(err);
			}
		case "POST":
			try {
				const data = await db.collection("products").insertOne({...body, _id: new ObjectId()});
				res.status(200).json({
					...body,
					_id: data.insertedId
				});
			} catch (err) {
				res.status(400).send(err);
			}
	}
};
