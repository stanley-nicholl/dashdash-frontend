import React from 'react'

function formatTime(timeSeconds) {
  if (!timeSeconds) return '--'
  const minutes = Math.floor(timeSeconds / 60)
  const seconds = timeSeconds % 60
  return `${ minutes < 10 ? '0' + minutes : '' + minutes }:${ seconds < 10 ? '0' + seconds : '' + seconds }`
}

const ActiveItemBox = ({ currentItem, running, functions: { startTimer, advanceItem } }) => {
  let name, shortName, itemSecondsLeft
  if (currentItem) {
    name = currentItem.name
    shortName = name.length > 13 ? name.slice(0, 13) + '...' : name
    itemSecondsLeft = currentItem.itemSecondsLeft
  }
  return (
    <div className="container text-white" style={{ backgroundColor: '#EAEBED' }}>
      <div className="row">
        <div className="col-7 p-0">
          <div className="p-0 m-1" style={{backgroundColor: 'rgb(80, 194, 66)', height: '50px', border: '2px solid #1C77C3' }}>
            <h6 className="m-0 p-0">current item:</h6>
            <h4 className="m-0 p-0">{ shortName ? shortName : '--' }</h4>
          </div>
        </div>
        <div className="col-5 p-0">
          <div className="m-1" 
               style={ itemSecondsLeft < 11 ? { backgroundColor: 'orangeRed', height: '50px', border: '2px solid #1C77C3' } : 
                                  { backgroundColor: 'rgb(80, 194, 66)', height: '50px', border: '2px solid #1C77C3' } }>
            <h1 className="m-0 p-0">{ formatTime(itemSecondsLeft) }</h1>
          </div>
        </div>
      </div>
      <div className="row">
        { running ?
          <button className="col btn btn-block btn-amber m-1 text-lowercase" type="button" onClick={ advanceItem } style={{ height: '50px', border: '2px solid #1C77C3', paddingTop: '15px' }}>
            <h6>I'm done with this item - advance me!</h6>
          </button>
          :
          <button className="col btn btn-danger btn-block m-1 text-lowercase" type="button" onClick={ startTimer } style={{ height: '50px', border: '2px solid #1C77C3', paddingTop: '15px' }}>
            <h6>start timer!</h6>
          </button>
        }
      </div>
    </div>
  )
}

export default ActiveItemBox