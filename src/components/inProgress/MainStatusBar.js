import React from 'react'

const progress = 50
const timeLeft = 17
const arriveBy = '5:05 PM'

const MainStatusBar = () => {
  return (
    <div className="flex-container text-white" style={{ height: '60px', position: 'fixed', bottom: '0' ,  backgroundColor: '#EAEBED', width: '100vw' }}>
      <div className="row m-0">
        <div className="col-4 p-0 m-1">
          <div className="progress p-0 rounded-0" style={{ height: '50px', backgroundColor: 'darkgrey', position: 'relative', border: '2px solid #1C77C3' }} >
            <h3 className="container mt-2 ml-0" style={{ position: 'absolute', textAlign: 'left' }}>{timeLeft} min</h3>
            <div className="progress-bar bg-success h-100" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={ progress } aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col p-0 my-1">
          <div style={{ height: '50px', backgroundColor: '#1C77C3', border: '2px solid #1C77C3', padding: '2px 0' }}>
            <h6 className="m-0 p-0">arrive by:</h6>
            <h5 className="m-0 p-0">{arriveBy}</h5>
          </div>
        </div>
        <button type="button" className="col-4 btn btn-block btn-amber text-lowercase m-1" style={{ height: '50px', border: '2px solid #1C77C3', padding: '15px 0' }}>
          <h6 className="p-0">I Made It!</h6>
        </button>
      </div>
    </div>
  )
}

export default MainStatusBar