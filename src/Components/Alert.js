import React from 'react'


export default function Alert(props) {
  
  return (
    <>
    {<div className='sticky-top ' style={{height:'50px', backgroundColor:"#042743", top:'56px'}}>
    {props.alert &&<div className={`alert alert-${props.alert.type}  show`} role="alert">
  {props.alert.msg}
</div>}
</div>}
    </>
  )
}