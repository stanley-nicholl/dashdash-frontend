import React, { Component } from 'react'

const timeMinutes = 10
const timeSeconds = 5
const title = 'shower'

const ActiveItemBox = () => {
  return (
    <div className="container text-white" style={{ backgroundColor: '#EAEBED' }}>
      <div className="row">
        <div className="col-7 p-0">
          <div className="p-0 m-1" style={{backgroundColor: 'rgb(80, 194, 66)', height: '50px', border: '2px solid #1C77C3' }}>
            <h6 className="m-0 p-0">current item:</h6>
            <h4 className="m-0 p-0">{ title }</h4>
          </div>
        </div>
        <div className="col-5 p-0">
          <div className="m-1" 
               style={ timeMinutes < 1 ? {backgroundColor: 'orangeRed', height: '50px', border: '2px solid #1C77C3' } : {backgroundColor: 'rgb(80, 194, 66)', height: '50px', border: '2px solid #1C77C3' } }>
            <h1 className="m-0 p-0">{ `${ timeMinutes < 10 ? '0' + timeMinutes : timeMinutes }:${ timeSeconds < 10 ? '0' + timeSeconds : timeSeconds }` }</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <button className="col btn btn-block btn-amber m-1 text-lowercase" type="button" style={{ height: '50px', border: '2px solid #1C77C3', paddingTop: '15px' }}>
          <h6>I'm done with this item - advance me!</h6>
        </button>
      </div>
    </div>
  )
}

export default ActiveItemBox