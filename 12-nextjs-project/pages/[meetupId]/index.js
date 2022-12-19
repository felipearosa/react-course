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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        ...dummyMeetupDetail,
        id: meetupId
      }
    }
  }

}

export default MeetupDetailPage
