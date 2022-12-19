import { useEffect, useState } from 'react'
import MeetupList from './../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
   {
    id: 'm1',
    title: 'First meetup',
    image: "https://images.adsttc.com/media/images/609d/cdea/f043/cc01/64ff/8c5b/slideshow/03-arquivo-publico-do-estado-de-sao-paulo-memoria-publica-sem-informacao-de-autor-1961.jpg",
    address : 'Some address, Santos, SP',
    description: 'This is the first meeting'
   },
   {
    id: 'm2',
    title: 'Second meetup',
    image: "https://images.adsttc.com/media/images/609d/cdea/f043/cc01/64ff/8c5b/slideshow/03-arquivo-publico-do-estado-de-sao-paulo-memoria-publica-sem-informacao-de-autor-1961.jpg",
    address : 'Some other address, Santos, SP',
    description: 'This is the second meeting'
   }
]

const HomePage = props => {
  return <MeetupList meetups={props.meetUp}/>
}

export function getStaticProps () {
  return {
    props: {
      meetUp: DUMMY_MEETUPS
    }
  }
}

export default HomePage
