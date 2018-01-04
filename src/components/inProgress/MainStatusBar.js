import React from 'react'

const progress = 50
const timeLeft = 17
const arriveBy = '5:05 PM'

const MainStatusBar = () => {
  return (
    <footer className="container text-white" style={{ height: '50px', position: 'fixed', bottom: '0' }}>
      <div className="row">
        <div className="col-5 progress m-0 p-0 rounded-0" style={{ height: '50px', backgroundColor: '#F0A202', position: 'relative' }} >
          <h3 className="m-2" style={{ position: 'absolute' }}>{timeLeft} min</h3>
          <div className="progress-bar bg-success h-100" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={ progress } aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="col-3 m-0 p-1" style={{ height: '50px', backgroundColor: '#1C77C3' }}>
          <h6 className="m-0 p-0">arrive by:</h6>
          <h5 className="m-0 p-0">{arriveBy}</h5>
        </div>
        <div className="col-4 m-0 p-0" style={{ height: '50px' }}>
          <button type="button" class="btn btn-block btn-amber p-0 h-100">I Made It!</button>
        </div>
      </div>
    </footer>
  )
}

export default MainStatusBar