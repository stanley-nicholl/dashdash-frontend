import React from 'react'

const EditSchedule = () => {

  return (
    <div className="body">
      <h3 className="py-4 mb-4 title font-weight-bold">weekday schedule</h3>
      <div className="plan-items d-flex flex-column align-items-center">
        <div className="plan-item row d-flex flex-nowrap align-items-center">
          <img className="order-img pl-2 pr-2 col-2" src="./img/branding/hamburger-nav-white.svg" />
          <p className="col-6 my-0 pl-0 text-white text-left">shower</p>
          <div className="d-flex flex-column align-items-start col-2">
            {/* <div className="form-group mb-0">
              <input className="my-0" type="checkbox" id="checkbox1"/>
              <label className="my-0" htmlFor="checkbox1"></label>
            </div> */}
            <img className="order-img pl-2 pr-2" src="./img/branding/skip-white.svg" />
            {/* <small className="text-white mt-0">can skip?</small> */}
          </div>
          <div className="md-form col-2 my-0 px-2">
            <input type="text" id="form1" class="form-control"/>
            <label htmlFor="form1"></label>
          </div>
        </div>
      </div>
      <div className="footer-container py-3">
        <h4 className="font-weight-bold mt-1">UPDATE ></h4>
      </div>
    </div>
  )
}

export default EditSchedule
