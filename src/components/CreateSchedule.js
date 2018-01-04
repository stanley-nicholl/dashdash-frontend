import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import DayOfWeekBtn from './common-elements/DayOfWeekBtn'
import AddNewButton from './common-elements/AddNewButton'
import CreatePlanItem from './common-elements/CreatePlanItem'
import CreateItemModal from './common-elements/CreateItemModal'
import EditItemModal from './common-elements/EditItemModal'
import EditArrivalTimeModal from './common-elements/EditArrivalTimeModal'
import EditPlanNameModal from './common-elements/EditPlanNameModal'


class CreateSchedule extends Component{
  constructor(props){
    super(props)
    // const {children, pets, newScheduleType, newDaysOfTheWeek} = this.props

    this.state ={
      templateName: null,
      templateId: null,
      templateItems: [],
      scheduleType: this.props.test.newScheduleType,
      newArrivalTime: this.props.test.newArrivalTime,
      pets: this.props.test.pets,
      children: this.props.test.children,
      planName: null
    }
  }

  //draggable interaction for reordering the items
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }

  //set state after async API call
  async componentDidMount() {
    //figure which template to load
    let target = this.findTemplate()
    const template = await this.getTemplateData(target)
    let templateItems = await this.getTemplateItems(target)
    this.setState({templateName: template.Template.name, templateId: template.Template.id, templateItems: templateItems.TemplateItems})
  }

  findTemplate = () => {
    let target = null
    if(this.state.children){
      if(this.state.pets){
        if(this.state.scheduleType === 'weekday'){
          target = 1
        }else{
          target = 5
        }
      }else{
        if(this.state.scheduleType === 'weekday'){
          target = 2
        }else{
          target = 6
        }
      }
    }else{
      if(this.state.pets){
        if(this.state.scheduleType === 'weekday'){
          target = 3
        }else{
          target = 7
        }
      }else{
        if(this.state.scheduleType === 'weekday'){
          target = 4
        }else{
          target = 8
        }
      }
    }
    return target
  }

  updateName = (name) => {
    this.setState({scheduleType: name, planName: name})
  }

  updateTime = (time) => {
    const temp = time.split(':')
    let newTime = null
    if(temp[0] > 12){
      newTime = `${temp[0]-12}:${temp[1]} PM`
    }else{
      newTime = `${temp[0]}:${temp[1]} AM`
    }
    this.setState({newArrivalTime: newTime})
  }

  addItem = async (item) => {
    // const sequence = []
    // this.state.templateItems.forEach( item => {
    //   sequence.push(parseInt(item.order))
    // })
    // let max = sequence.reduce( (a,b) => {
    //   return Math.max(a,b)
    // })
    // max++
    // const { name, skippable, duration} = item
    // this.setState({})
    await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/templates/${target}/items`)
    const templateItems = await templateDataItems.json()
    return templateItems
  }

  //get template data
  getTemplateData =  async (target) => {
    const templateData = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/templates/${target}`)
    const template = await templateData.json()
    return template
  }

  //get template items DATA
  getTemplateItems = async (target) => {
    const templateDataItems = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/templates/${target}/items`)
    const templateItems = await templateDataItems.json()
    return templateItems
  }


  //setting up styling for the days of the week on the create schedule screen (autopopulating )
  formatDayOfWeek(day){
    const weekdays = ['M', 'T', 'W', 'Th', 'F']
    const weekends = ['Su', 'S']
     if(this.state.scheduleType === 'weekday' && weekdays.includes(day)){
       return 'active-day'
     }else if(this.state.scheduleType === 'weekend' && weekends.includes(day)){
       return 'active-day'
     }else{
       return 'day'
     }
  }

  showModal = (type) => {
    window.$(`#${type}-modal`).modal({
        backdrop: 'static',
        keyboard: false
    })
  }

  render(){
    const array = [{id:1, name: '', duration: 0, skippable: false}]

    //either populating above dummy data or if api call is complete, the template items
    let itemData = null;
    if(this.state.templateId){
      itemData = this.state.templateItems
    }else{
      itemData = array
    }

    const daysOfWeek = ['Su','M', 'T', 'W', 'Th', 'F', 'S']

    return (
      <div className="body">
        <div className="d-flex title align-items-center justify-content-center">
          <h3 className="py-4 title font-weight-bold">{this.state.scheduleType}</h3>
          <img className="edit-img pl-1 mb-2 ml-3" src="./img/branding/edit-white.svg"  onClick={e => this.showModal('name')}/>
        </div>
        <div className="container">
          <div className="days d-flex justify-content-around my-3">
            {daysOfWeek.map(day => {
              return <DayOfWeekBtn day={day} color={this.formatDayOfWeek(day)} />
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h2>{this.state.newArrivalTime}</h2>
          <img className="edit-img pl-1 mb-2 ml-3" src="./img/branding/edit-blue.svg" onClick={e => this.showModal('time')} />
        </div>

        <div className="item-section">

          {itemData.sort((a,b) => {
            return a.order-b.order
          }).map((item,i) => {
            return <CreatePlanItem item={item} key={i} id={item.id} modal={this.showModal} />
          })}
        </div>
        <div className="add-btn-contain" onClick={e => this.showModal('create-item')}>
          <AddNewButton />
        </div>

        <div className="footer-container py-3">
          <Link to="/ScheduleDashboard">
            <h4 className="font-weight-bold mt-1">SAVE ></h4>
          </Link>
        </div>
        {/* <EditItemModal /> */}
        <CreateItemModal addItem={this.addItem} />
        <EditPlanNameModal updateName={this.updateName} />
        <EditArrivalTimeModal updateTime={this.updateTime}  s/>
      </div>
    )
  }
}

export default CreateSchedule
