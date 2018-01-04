import React from 'react';


const Headertype = ({history}) => {

  const openNav = ()=>{
    history.push('/navigation')
  }

  return (
      <header className="d-flex dash-header align-items-center justify-content-start px-3">
        <div onClick={openNav} >
          <img src="./img/svg/hamburger-nav-white.svg" style={{height:50}}/>
        </div>
        <div className="d-flex ml-5 dash-header-content justify-content-center">
          <h1>
            <b>Dash-Dash</b>
          </h1>
          <img src="../../img/branding/running-man-white.svg" style={{height:90}}/>
        </div>
      </header>

  );
}

export default Headertype
