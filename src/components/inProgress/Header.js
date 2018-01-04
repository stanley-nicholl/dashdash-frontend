import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="d-flex title align-items-center justify-content-center">
        <h6 className="py-2 title font-weight-bold">in progress: &nbsp;</h6>
        <h3 className="py-2 title font-weight-bold">Kev's Schedule!</h3>
        <img className="edit-img pl-1 mb-2" src="./img/branding/running-man-orange.svg" />
      </div>
    </header>
  )
}

export default Header
