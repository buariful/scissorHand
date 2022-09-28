import { ObjectId } from "mongodb";
import clientPromise from "../lit/mongodb";

export async function getEmployee(req, res) {
    try {
        const client = await clientPromise;
        const db = await client.db('crud').collection("employee").find({}).toArray();

        res.json(db);

    } catch (error) {
        console.log(error);
    }
}

// post employee
export async function postEmployee(req, res) {
    try {
        const employee = req.body;
        const client = await clientPromise;
        const db = await client.db('crud').collection("employee");

        const result = await db.insertOne(employee)

        res.json(result);

    } catch (error) {
        console.log(error);
    }
}

export async function putEmployee(req, res) {
    try {
        const employeeId = req.query.id;
        const data = {
            $set: req.body
        }
        const option = { upsert: true };
        const filter = { _id: ObjectId(employeeId) }
        const client = await clientPromise;
        const db = await client.db('crud').collection("employee");

        const result = await db.updateOne(filter, data, option);

        res.json(result);

    } catch (error) {
        console.log(error);
    }
}

// delete
export async function deleteEmployee(req, res) {
    try {
        const employeeId = req.query.id;
        const filter = { _id: ObjectId(employeeId) }
        const client = await clientPromise;
        const db = await client.db('crud').collection("employee");

        const result = await db.deleteOne(filter);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
        res.json(result);

    } catch (error) {
        console.log(error);
    }
}