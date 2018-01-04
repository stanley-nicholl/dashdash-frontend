import React from 'react'

const Badge = (badge) => {
  return(
    <div className="col-6">
      <img className="badge-img" src={badge.image} />
      <p className="badge-name">{badge.name}</p>
    </div>
  )
}

export default Badge
