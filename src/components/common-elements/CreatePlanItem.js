import React from 'react'
import CreatePlanModal from './CreatePlanModal'


const CreatePlanItem = ({item}) => {

  const skippable = () => {
    if(item.skippable) return <img className="skippable-img pl-2 pr-2 col-2" src="./img/branding/skip-white.svg" />
    return <img className="col-2" />
  }

  const showModal = (item) => {
    window.$('#user-modal').modal('toggle')
  }

  return(
    <div className="plan-items d-flex flex-column align-items-center" draggable="true" onClick={ e => showModal(item)}>
      <div className="plan-item row d-flex flex-nowrap align-items-center mt-2">
        <img className="order-img pl-2 pr-2 col-2" src="./img/branding/hamburger-nav-white.svg" />
        <p className="col-6 my-0 pl-0 text-left item-name">{item.name}</p>
        {skippable(item.skippable)}
        <div className="md-form col-2 my-0 px-2">
          <input defaultValue={item.duration} type="text" id="form1" className="form-control"/>
          <label htmlFor="form1"></label>
        </div>
      </div>
      <CreatePlanModal item={item}/>
    </div>
  )
}

export default CreatePlanItem
