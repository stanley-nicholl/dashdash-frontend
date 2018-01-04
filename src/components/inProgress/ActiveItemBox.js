import React, { Component } from 'react'

const ActiveItemBox = () => {
  return (
    <div className="container">
      <div className="row text-white">
        <div className="col-7 p-0">
          <div className="p-0 m-1" style={{backgroundColor: 'darkGrey', height: '50px', border: '2px solid #1C77C3' }}>
            <h6 className="m-0 p-0">current item:</h6>
            <h4 className="m-0 p-0">shower</h4>
          </div>
        </div>
        <div className="col-5 p-0">
          <div className="m-1" style={{backgroundColor: 'darkGrey', height: '50px', border: '2px solid #1C77C3' }}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7 p-0">
          <div className="m-1" style={{backgroundColor: 'darkGrey', height: '50px', border: '2px solid #1C77C3' }}>
          </div>
        </div>
        <div className="col-5 p-0">
          <div className="m-1" style={{backgroundColor: 'darkGrey', height: '50px', border: '2px solid #1C77C3' }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItemBox