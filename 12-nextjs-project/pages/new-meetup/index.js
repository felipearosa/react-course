import NewMeetupForm from './../../components/meetups/NewMeetupForm'

const NewMeetUp = () => {
  const addMeetupHandler = meetupData => {
    console.log(meetupData)
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetUp;
