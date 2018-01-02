import React from 'react'

class DayOfWeekBtn extends React.Component {
  constructor () {
    super()
    this.state = { isButtonActive: false }
    this.onClick = this.onClick.bind(this)
  }

  // FUNCTION CURRENTLY SET UP WITH CLASS TO ENABLE STATE ONCE WE CONNECT TO THE BACKEND WHEN PEOPLE HAVE ALREADY DESIGNATED THEIR DAYS OF THE WEEK THEY WOULD LIKE A SCHEDULE APPLIED TO

  onClick (e) {
    if(e.target.className === 'day') e.target.className = "active-day"
    else{
      e.target.className = "day"
    }
    // this.setState({
    //   isButtonActive: !this.state.isButtonActive
    // })

    // this.props.openPanel(this.props.buttonNumber)
  }

  test () {
    alert('hello')
  }

  render () {

    return (
      <div onClick={e => this.onClick(e)} className="day">{this.props.day}</div>
    )
  }
}

export default DayOfWeekBtn
