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
    console.log(this.state);
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
    const template = await this.getTemplateData()
    const templateItems = await this.getTemplateItems()
    console.log(templateItems);
    this.setState({templateName: template.Template.name, templateId: template.Template.id, templateItems: templateItems.TemplateItems})
  }

  //get template data
  getTemplateData =  async () => {
    const templateData = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/templates/2`)
    const template = await templateData.json()
    return template
  }

  //get template items DATA
  getTemplateItems = async () => {
    const templateDataItems = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/templates/2/items`)
    const templateItems = await templateDataItems.json()
    return templateItems
  }


  render(){
    const array = [
      {id:1, name: 'shower', duration: 10, skippable: false},
      {id:2, name: 'get dressed', duration: 10, skippable: false},
      {id:3, name: 'drink coffee', duration: 4, skippable: true},
      {id:4, name: 'make breakfast', duration: 15, skippable: false},
      {id:5, name: 'read the paper', duration: 15, skippable: true},
      {id:6, name: 'watch news', duration: 4, skippable: true},
      {id:7, name: 'commute', duration: 10, skippable: false}
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
          <img className="edit-img pl-1 mb-2" src="./img/branding/edit-white.svg" />
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

        {itemData.map(item => {
          return <CreatePlanItem item={item} key={item.id} />
        })}
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
