import NextButton from './common-elements/NextButton'
import React, { Component } from 'react';

class GettingStarted extends Component {

  componentDidUpdate(){
    console.log("stuff");
    this.props.history.push('/scheduleType')
  }

  grabData =  async () => {

    const kids = document.getElementById('kids').checked
    const pets = document.getElementById('pets').checked
    const token = localStorage.getItem('dashdashUserToken')
    console.log(kids, pets);
    await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/users/${this.props.id}`, {
      method: 'PUT',
      body: JSON.stringify({children: (kids), pets: (pets)}),
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    // post to db kids and pets values
    // update setState

    this.props.updateNewScheduleKidsPetsData(kids, pets);
    this.componentDidUpdate()
  }


  render() {
    return (
      <div className="body">
        <h2 className="py-4 mb-4 title font-weight-bold">one quick question</h2>
        <img className="selection-img mb-2" src="./img/branding/kids-orange.svg" alt="kids" />
        <h5 className="mb-4">do you have kids?</h5>
        <form>
          <div className="switch">
            <label>
              no
              <input type="checkbox" id="kids"/>
              <span className="lever"></span>
              yes
            </label>
          </div>
          <br/>
          <img className="selection-img mt-4  mb-2" src="./img/branding/pets-orange.svg" alt="pets" />
          <h5 className="mb-4">do you have pets?</h5>
          <div className="switch">
            <label>
              no
              <input type="checkbox" id="pets"/>
              <span className="lever"></span>
              yes
            </label>
          </div>
          <div className="footer-container py-3" onClick={this.grabData}>
              <NextButton  />
          </div>
        </form>
      </div>
    )
  }

}

export default GettingStarted;
