import React from 'react'

function setItemStyle (style) {
  switch(style) {
    case 'current' :
      return { backgroundColor:'rgb(80, 194, 66)', width:'90vw', paddingTop: '5px', paddingBottom: '5px' }
    case 'previous' :
      return { backgroundColor:'grey', width:'80vw' }
    case 'upcoming' :
      return { backgroundColor:'#F0A202', width:'80vw' }
  }
}

const Item = ({ style, title, time }) => {
  return (
    <div className="d-flex flex-column align-items-center">
        <div className="row d-flex flex-nowrap align-items-center mt-3 text-white" style={ setItemStyle(style) }>
          <div className="col-9 my-0 text-left">
            <h4 className="m-2">{ title }</h4>
          </div>
          <div className="md-form col-3 my-0">
            <h4 className="m-2">{ time }</h4>
          </div>
        </div>
      </div>
  )
}

export default Item