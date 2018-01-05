import React from 'react';

const Header = ({ name, running }) => {
  let shortName
  shortName = name ? (name.length > 20 ? name.slice(0, 20) + '...' : name) : ''
  return (
    <header>
      <div className="d-flex title align-items-center justify-content-center">
        {/* <h6 className="py-2 mb-0 title font-weight-bold">{ running ? 'running:' : 'awaiting:' }&nbsp;</h6> */}
        <h3 className="py-2 mb-0 title font-weight-bold">{ shortName }</h3>
        <img className="edit-img pl-1" src="../img/branding/running-man-orange.svg" alt="running man" />
      </div>
    </header>
  )
}

export default Header
