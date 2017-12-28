import React from 'react'

const GettingStarted = () => {

  return (
    <div className="body">
      <h2 className="py-4 mb-4 title font-weight-bold">one quick question</h2>
      <img className="selection-img mb-2" src="./img/branding/kids-orange.svg" />
      <h5 className="mb-4">do you have kids?</h5>
      <div className="switch">
        <label>
          no
          <input type="checkbox"/>
          <span className="lever"></span>
          yes
        </label>
      </div>
      <br/>
      <img className="selection-img mt-4  mb-2" src="./img/branding/pets-orange.svg" />
      <h5 className="mb-4">do you have pets?</h5>
      <div className="switch">
        <label>
          no
          <input type="checkbox"/>
          <span className="lever"></span>
          yes
        </label>
      </div>
      <div className="footer-container py-3">
        <h4 className="font-weight-bold mt-1">NEXT ></h4>
      </div>
    </div>
  )

}

export default GettingStarted
