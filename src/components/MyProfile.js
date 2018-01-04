import React from 'react'
import Badge from './common-elements/Badge'

const MyProfile = () => {

  return (
    <div className="body">
      {/* <Common-header /> */}
      <h1 className="title">DASH DASH</h1>
      <h3 className="mt-2">My Profile</h3>
      <div className="row mt-4 border border-primary border-top-0 border-right-0 border-left-0 pb-2">
        <div className="col-1"></div>
        <div className="col-5">
          <img className="profile-img mb-2" src="./img/branding/running-man-orange.svg" />
        </div>
        <div className="col-5">
          <h5 className="text-left">{this.state.firstname}<br/>{this.state.lastname}</h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="d-flex row mt-4 justify-content-around border border-primary border-top-0 border-right-0 border-left-0 pb-4 mb-4">
        <div className="col-6 border border-primary border-top-0 border-bottom-0 border-left-0">
          <h5 className="mb-4">kids</h5>
          <div className="switch">
            <label>
              no
              <input type="checkbox" checked={this.state.children ? 'checked' : ''}/>
              <span className="lever"></span>
              yes
            </label>
          </div>
        </div>
        <div className="col-6">
          <h5 className="mb-4">pets</h5>
          <div className="switch">
            <label>
              no
              <input type="checkbox" checked={this.state.pets ? 'checked' : ''}/>
              <span className="lever"></span>
              yes
            </label>
          </div>
        </div>
      </div>
      <h5 className="mb-4">Achievements</h5>
      <div className="container">
        <div className="row">
          {/* {badges.map(badge => {
            return <CreatePlanItem badge={badge} key={badge.id} />
          })} */}
        </div>
      </div>
    </div>
  )
}

export default MyProfile
