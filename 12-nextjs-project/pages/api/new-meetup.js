const { MongoClient } = require('mongodb')

const handler = async (req, res) => {
  if (req.method === 'POST') {

    try {
      const data = req.body

      const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PS}@cluster0.9hvl57g.mongodb.net/meetups?retryWrites=true&w=majority`);
      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data)

      client.close();

    } catch (error) {
      res.status(400).json({
        message: `ERROR: ${error.message}`
      })
    }


    res.status(201).json({
      message: 'Data inserted'
    })
  }
}

export default handler
