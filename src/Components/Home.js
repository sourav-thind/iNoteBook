import React from 'react'
  import Notes from './Notes'


export const Home = (props) => {
  const {showAlert} = props
  
  return (
    <>
  
    <Notes showAlert={showAlert}/>
    </>

  )
}
