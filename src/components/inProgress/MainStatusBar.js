import React from 'react'

function format24TimeTo12(timeString) {
  if (!timeString) return '--'
  const split = timeString.split(':').map(el => Number(el))
  return `${split[0] > 12 ? split[0] - 12 : split[0]}:${split[1] < 10 ? '0' + split[1] : split[1]} ${split[0] < 12 ? 'am' : 'pm'}`
}

const MainStatusBar = ({ running, duration, timeLeft, deadline, functions: stopTimer }) => {
  const progress = Math.ceil(timeLeft / duration)
  return (
    <div className="flex-container text-white" style={{ height: '60px', position: 'fixed', bottom: '0' ,  backgroundColor: '#EAEBED', width: '100vw' }}>
      <div className="row m-0">
        <div className="col-4 p-0 m-1">
          <div className="progress p-0 rounded-0" style={{ height: '50px', backgroundColor: 'darkgrey', position: 'relative', border: '2px solid #1C77C3' }} >
            <div className="container" style={{ position: 'absolute', padding: '2px 0' }}>
              <h6 className="m-0 p-0">remaining:</h6>
              <h5 className="m-0 p-0" >
                { running ? timeLeft : duration } min
              </h5>
            </div>
            <div className={ !running || progress > 10 ? "progress-bar bg-success h-100" : "progress-bar bg-danger h-100" }
                 role="progressbar" 
                 style={ running ? { width: `${progress}%` } : { width: '100%' } } 
                 aria-valuenow={ progress } aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col p-0 my-1">
          <div style={{ height: '50px', backgroundColor: '#1C77C3', border: '2px solid #1C77C3', padding: '2px 0' }}>
            <h6 className="m-0 p-0">arrive by:</h6>
            <h5 className="m-0 p-0">
              { format24TimeTo12(deadline) }
            </h5>
          </div>
        </div>
        <button type="button"
                onClick={ stopTimer }
                className={ running ? "col-4 btn btn-danger btn-block text-lowercase m-1" : "col-4 btn btn-danger btn-block text-lowercase m-1 disabled" } 
                style={{ height: '50px', border: '2px solid #1C77C3', padding: '15px 0' }} >
          <h6 className="p-0">I Made It!</h6>
        </button>
      </div>
    </div>
  )
}

export default MainStatusBar