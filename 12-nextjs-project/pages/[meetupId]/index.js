import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from "../../components/meetups/MeetupDetail";

const dummyMeetupDetail = {
  id: 'm1',
  title: 'First meetup',
  image: "https://images.adsttc.com/media/images/609d/cdea/f043/cc01/64ff/8c5b/slideshow/03-arquivo-publico-do-estado-de-sao-paulo-memoria-publica-sem-informacao-de-autor-1961.jpg",
  address: 'Some address, Santos, SP',
  description: 'This is the first meeting'
}

const MeetupDetailPage = props => {
  return (
    <MeetupDetail {...props.meetupData} />
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PS}@cluster0.9hvl57g.mongodb.net/meetups?retryWrites=true&w=majority`);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const results = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: results.map(meetup => (
      {
        params: {
          meetupId: meetup._id.toString()
        }
      }
    ))
  }
}

export async function getStaticProps(context) {
  const objectMeetupid = new ObjectId(context.params.meetupId)
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PS}@cluster0.9hvl57g.mongodb.net/meetups?retryWrites=true&w=majority`);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');


  const meetup = await meetupsCollection.findOne({ _id: objectMeetupid });

  client.close();

  return {
    props: {
      meetupData: {
        ...meetup,
        _id: null
      }
    }
  }

}

export default MeetupDetailPage
