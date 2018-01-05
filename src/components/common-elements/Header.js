import React from 'react';


const Headertype = ({history, openNav}) => {

  return (
      <header className="d-flex dash-header align-items-center justify-content-between px-3 py-4">
        <div>
          <img src="./img/branding/hamburger-nav-darkblue.svg" alt="navigation hamburger" className="nav-hamburger" onClick={e => openNav()}/>
        </div>
        <div className="d-flex dash-header-content justify-content-center">
          <h3 className="mt-2 head-title"><em>DASH</em> dash</h3>
        </div>
        <img src="../../img/branding/running-man-darkblue.svg" alt="running man" className="logo"/>
      </header>

  );
}

export default Headertype
