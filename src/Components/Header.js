import React from 'react'

const Header = () => {
  return (
    <>
    <style type='text/css'> 
    {
        `
        #back{
            background-color: #042743;
            color:white
        }
        `
    }
    </style>
    <div id='back' >
     <h2>Make Your Notes Omnipresent</h2>
    <p className='mb-0'><em>Keep your notes handy everywhere with iNotebook</em></p>
    </div>
    </>
  )
}

export default Header