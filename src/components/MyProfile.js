import React, { Component } from 'react';
import Badge from './common-elements/Badge'
import Navigation from './common-elements/Navigation'
import Headertype from './common-elements/Header'

class MyProfile extends Component {
  constructor(props){
    super(props)

    this.state={
      badges:[],
      firstname:this.props.firstname,
      lastname:this.props.lastname,
      userId: this.props.userId,
      children:this.props.kids,
      pets:this.props.pets,
      badgesReceived:false
    }

  }

  componentDidMount = async () => {
    if (!this.props.userId) return
    const token = localStorage.getItem('dashdashUserToken')
    let badgesResponce = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/badges/user/${this.state.userId}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    })

    let allBadges = await badgesResponce.json()
    this.setState({
      badges: allBadges,
      badgesReceived:true
    })

  }

  openNav = () => {
      const test = document.getElementById("side-nav").style.width = "85vw";
      console.log(test);
  }

  closeNav = () => {
      document.getElementById("side-nav").style.width = "0";
  }

  render() {
    let data
    if(this.state.badgesReceived && this.state.badges.Badges){
      data=this.state.badges.Badges
    }
    else{
      data = []
    }

    return (
      <div className="body">
        <Navigation closeNav={this.closeNav}/>
        <Headertype openNav={this.openNav}/>
        <h3 className="mt-2">My Profile</h3>
        <div className="row mt-4 border border-primary border-top-0 border-right-0 border-left-0 pb-2">
          <div className="col-1"></div>
          <div className="col-5">
            <img className="profile-img mb-2" src="./img/branding/running-man-orange.svg" alt="running man" />
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
                <input type="checkbox" defaultChecked={this.state.children ? 'checked' : ''}/>
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
                <input type="checkbox" defaultChecked={this.state.pets ? 'checked' : ''}/>
                <span className="lever"></span>
                yes
              </label>
            </div>
          </div>
        </div>
        <h5 className="mb-4">Achievements</h5>
        <div className="container">
          <div className="row">
            { this.state.badges.length ? null : <Badge badge={{ id: 1, name: 'Newbie', description: 'Creating your first schedule', image: '../img/badges/newbie.svg' }} key="default" /> }
            {data.map((badge, index) => {
              return <Badge badge={badge} key={index} />
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default MyProfile;






// const MyProfile = ({firstname, lastname, kids, pets, badges}) => {
//
//   const temp = [{}]
//   let badgeData
//
//   if(!badges){
//     badgeData = temp
//   }else{
//     badgeData = [...badges]
//   }
//
//   console.log(badges);
//
//
// }
