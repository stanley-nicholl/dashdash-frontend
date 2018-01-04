import React from 'react';

const started = false
const planName = 'The Plan!'

const Header = () => {
  return (
    <header>
      <div className="d-flex title align-items-center justify-content-center">
        <h6 className="py-2 mb-0 title font-weight-bold">{ started ? 'in progress:' : 'waiting to start:' }&nbsp;</h6>
        <h3 className="py-2 mb-0 title font-weight-bold">{ planName }</h3>
        <img className="edit-img pl-1" src="./img/branding/running-man-orange.svg" />
      </div>
    </header>
  )
}

export default Header
