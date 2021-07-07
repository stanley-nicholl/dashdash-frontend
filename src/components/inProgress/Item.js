import React from 'react'

function setItemStyle (style) {
  switch(style) {
    case 'current' :
      return { backgroundColor:'rgb(80, 194, 66)', width:'90%', paddingTop: '5px', paddingBottom: '5px', margin: '10px 0' }
    case 'previous' :
      return { backgroundColor:'darkgrey', width:'80%', margin: '5px 0' }
    case 'upcoming' :
      return { backgroundColor:'goldenrod', width:'80%', margin: '5px 0' }
    default :
      break
  }
}

function formatTime(timeSeconds) {
  if (typeof timeSeconds !== 'number') return '--'
  const minutes = Math.floor(timeSeconds / 60)
  const seconds = timeSeconds % 60
  return `${ '' + minutes }:${ seconds < 10 ? '0' + seconds : '' + seconds }`
}

const Item = ({ itemStatus, title, itemSecondsLeft }) => {
  return (
    <div className="d-flex flex-column align-items-center">
        <div className="row d-flex flex-nowrap align-items-center text-white" style={ setItemStyle(itemStatus) }>
          <div className="col-8 my-0 text-left">
            <h5 className="m-2">{ title }</h5>
          </div>
          <div className="md-form col-4 my-0">
            <h4 className="m-2">{ formatTime(itemSecondsLeft) }</h4>
          </div>
        </div>
      </div>
  )
}

export default Item