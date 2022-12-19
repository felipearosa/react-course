import { MongoClient } from 'mongodb'

import { useEffect, useState } from 'react'
import MeetupList from './../components/meetups/MeetupList'


const HomePage = props => {
  return <MeetupList meetups={props.meetUps} />
}

export async function getStaticProps() {

  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PS}@cluster0.9hvl57g.mongodb.net/meetups?retryWrites=true&w=majority`);

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetUps = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetUps: meetUps.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}

export default HomePage
