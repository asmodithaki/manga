import { body, validationResult } from 'express-validator';
import { client } from "../../database.js";

// Rest of your code...

export default async function handler(req, res) {

    // Run validations
    await Promise.all([
        body('firstName').notEmpty().run(req),
        body('lastName').notEmpty().run(req),
        body('phone').notEmpty().run(req),
        body('email').isEmail().run(req),
        body('yourMessage').notEmpty().run(req),
    ]);

    // Check if validation result contains any error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Ensures that the client is connected
        if (!client.isConnected()) await client.connect();

        const collection = client.db("test").collection("contactUsForm");

        // insert form data into the collection
        const result = await collection.insertOne(req.body);
        res.status(200).json({ message: 'Form submitted successfully' });

        console.log(result);

        res.status(200).send({ status: 'Form submitted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
