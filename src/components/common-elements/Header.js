import React from 'react';


const Headertype = ({}) => {
  return (
    <div className="container-fluid">
      <header className="d-flex dash-header align-items-center justify-content-start px-3">
        <img src="./img/svg/hamburger-nav-white.svg" alt="navigation hamburger" style={{height:50}}/>
        <div className="d-flex ml-5 dash-header-content justify-content-center">
          <h1>
            <b>Dash-Dash</b>
          </h1>
          <img src="../../img/branding/running-man-white.svg" alt="running man" style={{height:90}}/>
        </div>
      </header>
    </div>
  );
}

export default Headertype
