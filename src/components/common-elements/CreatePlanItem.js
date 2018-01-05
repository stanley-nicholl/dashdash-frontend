import React, { Component } from 'react';
import EditItemModal from './EditItemModal'


class CreatePlanItem extends Component {
  constructor(props){
    super(props)
    this.state={
      modalOpen: false
    }
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }

  skippable = (skippable) => {
    if(skippable) return <img className="skippable-img pl-2 pr-2 col-2" src="./img/branding/skip-white.svg" alt="skip icon" />
    return <img className="col-2" alt="blank" />
  }

  render(){
    const {item, updateItem} = this.props
    return(
      <div className="plan-items d-flex flex-column align-items-center template-item" draggable="true" onClick={ e => this.setState({modalOpen: true})}>
        <div className="plan-item row d-flex flex-nowrap align-items-center mt-2">
          <img className="order-img pl-2 pr-2 col-2" src="./img/branding/hamburger-nav-white.svg" alt="hamburger" />
          <p className="col-6 my-0 pl-0 text-left item-name">{item.name}</p>
          {this.skippable(item.skippable)}
          <div className="col-2 my-0 pb-2 px-2 text-center">
            <p className="mb-0 pt-2">{item.duration}</p>
            <small className="mt-0">min</small>
          </div>
        </div>
        {this.state.modalOpen ? <EditItemModal updateItem={updateItem} item={item} closeModal={this.closeModal}/> : null }
      </div>
    )
  }

}

export default CreatePlanItem
