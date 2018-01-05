import React from 'react'

function setItemStyle (style) {
  switch(style) {
    case 'current' :
      return { backgroundColor:'rgb(80, 194, 66)', width:'90vw', paddingTop: '5px', paddingBottom: '5px', margin: '10px 0' }
    case 'previous' :
      return { backgroundColor:'darkgrey', width:'80vw', margin: '5px 0' }
    case 'upcoming' :
      return { backgroundColor:'goldenrod', width:'80vw', margin: '5px 0' }
    default :
      break
  }
}

const Item = ({ itemStatus, title, timeMinutes }) => {
  return (
    <div className="d-flex flex-column align-items-center">
        <div className="row d-flex flex-nowrap align-items-center text-white" style={ setItemStyle(itemStatus) }>
          <div className="col-9 my-0 text-left">
            <h4 className="m-2">{ title }</h4>
          </div>
          <div className="md-form col-3 my-0">
            <h4 className="m-2">{ timeMinutes }</h4>
          </div>
        </div>
      </div>
  )
}

export default Item