import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DayOfWeekBtn from './common-elements/DayOfWeekBtn'
import AddNewButton from './common-elements/AddNewButton'
import CreatePlanItem from './common-elements/CreatePlanItem'
import CreateItemModal from './common-elements/CreateItemModal'
// import EditItemModal from './common-elements/EditItemModal'
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
      activeDays: [],
      tempIdCounter: 50,
      createModalOpen: false,
      userId: this.props.test.userId
    }
  }

  //set state after async API call
  async componentDidMount() {
    //figure which template to load
    let target = this.findTemplate()
    const template = await this.getTemplateData(target)
    let templateItems = await this.getTemplateItems(target)
    const activeDays = this.setDays()
    this.setState({templateName: template.Template.name.split(' ')[0], templateId: template.Template.id, templateItems: templateItems.TemplateItems, activeDays: activeDays})
  }

  //set initial active days for plan
  setDays = () => {
    const daysOfWeek = ['Su','M', 'T', 'W', 'Th', 'F', 'S']
    const weekdays = ['M', 'T', 'W', 'Th', 'F']
    const weekends = ['Su', 'S']
    let result = null
    if(this.state.scheduleType === 'weekday'){
      result = [...weekdays]
    }else{
      result = [...weekends]
    }
    return result
  }

  //update active days as the user selects and unselects days on their plan
  updateActiveDay = (day, command) => {
    let activeDays
    if(command === 'add'){
      activeDays = [...this.state.activeDays, day]
    }else{
      activeDays = this.state.activeDays.filter(item => {
        return item !== day
      })
    }
    this.setState({activeDays: activeDays})
  }

  //logic to determine which template to grab based on user inputs
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

  //save and create plan for user --> take them to their schedule dashboard

  writeToDb = async () => {
    const plan = {
      name: this.state.templateName,
      active: true,
      deadline: this.state.newArrivalTime,
      days_to_run: this.state.activeDays.join()
    }

    let planItems = this.state.templateItems.sort( (a,b) => {
      return a.order - b.order
    })

    let targetItems = planItems.map( item => {
      return {name: item.name, duration: item.duration, skippable: item.skippable}
    })

    const token = localStorage.getItem('dashdashUserToken')


    const newPlan = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/users/${this.state.userId}`, {
      method: 'POST',
      body: JSON.stringify(plan),
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    const targetPlan = await newPlan.json()


    const promises = targetItems.map( item => {
      return fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/${targetPlan.Plan.id}/items`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
    })

    Promise.all(promises)
      .then( result =>{
        console.log(result);
        this.props.history.push('/')
      })
      .catch(console.error)

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


  //update plan information section
  updateName = (name) => {
    this.setState({templateName: name})
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

  addItem = (item) => {
    const sequence = []
    this.state.templateItems.forEach( item => {
      sequence.push(parseInt(item.order, 10))
    })
    let max = sequence.reduce( (a,b) => {
      return Math.max(a,b)
    })
    max++
    const { name, skippable, duration } = item
    const newItem = {
      id: this.state.tempIdCounter,
      name: name,
      duration: duration,
      skippable: skippable,
      order: max
    }
    const newCounterNum = this.state.tempIdCounter + 1
    const updatedItems = [...this.state.templateItems, newItem]
    this.setState({ templateItems: updatedItems,  tempIdCounter: newCounterNum})
  }

  updateItem = (target, command) => {
    let updatedItems
    if(command === 'delete'){
      updatedItems = this.state.templateItems.filter(item => {
        return item.order !== target.order
      })
    }else if(command === 'edit'){
      const { id, name, skippable, duration, order } = target
      updatedItems = this.state.templateItems.map(item => {
        if(item.id === target.id){
          return target
        }else{
          return item
        }
      })
    }
    this.setState({ templateItems: updatedItems})
  }


  //setting up styling for the days of the week on the create schedule screen (autopopulating )

  formatDayOfWeek(day){
    if(this.state.activeDays){
      if(this.state.activeDays.includes(day)){
        return 'active-day'
      }else{
        return 'day'
      }
    }
     return 'day'
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
          <h3 className="py-4 title font-weight-bold">{this.state.templateName}</h3>
          <img className="edit-img pl-1 mb-2 ml-3" src="./img/branding/edit-white.svg" alt="edit" onClick={e => this.showModal('name')}/>
        </div>
        <div className="container">
          <div className="days d-flex justify-content-around my-3">
            {daysOfWeek.map((day, i) => {
              return <DayOfWeekBtn day={day} key={i} color={this.formatDayOfWeek(day)} updateActiveDay={this.updateActiveDay}/>
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h2>{this.state.newArrivalTime}</h2>
          <img className="edit-img pl-1 mb-2 ml-3" src="./img/branding/edit-blue.svg" alt="edit" onClick={e => this.showModal('time')} />
        </div>

        <div className="item-section">

          {itemData.sort((a,b) => {
            return a.order-b.order
          }).map((item,i) => {
            return <CreatePlanItem item={item} updateItem={this.updateItem} key={i} id={item.id} modalId={i} />
          })}
        </div>
        <div className="add-btn-contain" onClick={e =>{
          this.setState({createModalOpen: true})
          this.showModal('create-item')
        } }>
          <AddNewButton />
        </div>

        <div className="footer-container py-3" onClick={e => this.writeToDb()}>
          <h4 className="font-weight-bold mt-1">SAVE ></h4>
        </div>
        <CreateItemModal addItem={this.addItem} />
        {this.state.createModalOpen ? <CreateItemModal closeModal={this.closeModal}/> : null }
        <EditPlanNameModal updateName={this.updateName} />
        <EditArrivalTimeModal updateTime={this.updateTime}  s/>
      </div>
    )
  }
}

export default CreateSchedule
