import React, { Component } from 'react';
import DayOfWeekBtn from './common-elements/DayOfWeekBtn'
import AddNewButton from './common-elements/AddNewButton'
import CreatePlanItem from './common-elements/CreatePlanItem'
// import CreatePlanModal from './common-elements/CreatePlanModal'

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
      children: this.props.test.children
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
    const templateItems = await this.getTemplateItems(target)
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


  render(){
    const array = [
      {id:1, name: '', duration: 0, skippable: false},

    ]

    //either populating above dummy data or if api call is complete, the template items
    let itemData = null;
    if(this.state.templateId){
      itemData = this.state.templateItems
    }else{
      itemData = array
    }

    return (
      <div className="body">
        <div className="d-flex title align-items-center justify-content-center">
          <h3 className="py-4 title font-weight-bold">{this.state.scheduleType}</h3>
          <img className="edit-img pl-1 mb-2 ml-3" src="./img/branding/edit-white.svg" />
        </div>
        <div className="container">
          <div className="days d-flex justify-content-around my-3">
            <DayOfWeekBtn day="Su"/>
            <DayOfWeekBtn day="M"/>
            <DayOfWeekBtn day="T"/>
            <DayOfWeekBtn day="W"/>
            <DayOfWeekBtn day="Th"/>
            <DayOfWeekBtn day="F"/>
            <DayOfWeekBtn day="S"/>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h2 onClick={ e => {'test'}}>{this.state.newArrivalTime}</h2>
          <img className="edit-img pl-1 mb-2 ml-3" src="./img/branding/edit-blue.svg" />
        </div>

        <div className="item-section">
          {itemData.map(item => {
            return <CreatePlanItem item={item} key={item.id} />
          })}
        </div>
        <div className="add-btn-contain">
          <AddNewButton />
        </div>

        <div className="footer-container py-3">
          <h4 className="font-weight-bold mt-1">SAVE ></h4>
        </div>

      </div>
    )
  }
}

export default CreateSchedule
