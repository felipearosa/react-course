const { MongoClient } = require('mongodb')

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    const client = await MongoClient.connect(`mongodb+srv://${proces.env.MONGO_USERNAME}:${proces.env.MONGO_PS}@cluster0.9hvl57g.mongodb.net/meetups?retryWrites=true&w=majority`);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data)

    client.close();

    res.status(201).json({
      message: 'Data inserted'
    })
  }
}

export default handler
