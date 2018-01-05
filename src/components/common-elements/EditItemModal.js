import React, { Component } from 'react';

class EditItemModel extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeChecked: this.props.item.skippable
    }
  }

  componentWillReceiveProps = (props) => {
    if(this.props.item.skippable === props.item.skippable) return
    console.log(props);
    this.setState({activeChecked: props.item.skippable})
  }

  componentDidMount = () => {
    const {item} = this.props
    window.$(`#edit-item-modal-${item.id}`).modal({
        backdrop: 'static',
        keyboard: false
    })
  }

  componentDidUpdate = () => {
    const {item} = this.props
    window.$(`#edit-item-modal-${item.id}`).modal({
        backdrop: 'static',
        keyboard: false
    })
  }

  //deletes targeted item from schedule
  deleteModal = (e) => {
    const {item, updateItem} = this.props
    window.$(`#edit-item-modal-${item.id}`).modal('toggle')
    updateItem(item, 'delete')
    this.props.closeModal()
  }

  //cancels edit function and returns to schedule screen
  cancelModal = (e) => {
    const {item} = this.props
    window.$(`#edit-item-modal-${item.id}`).modal('toggle')
    this.props.closeModal()
  }

  //updates an individual item with users inputs
  updateModal = (e) => {
    const {item, updateItem} = this.props
    const itemPrep = {
      id: item.id,
      name: document.getElementById('task-name').value,
      skippable: document.getElementById('active').checked,
      duration: parseInt(document.getElementById('task-duration').value),
      order: item.order,
    }
    window.$(`#edit-item-modal-${item.id}`).modal('toggle')
    updateItem(itemPrep, 'edit')
    this.props.closeModal()
  }


  render(){
    const {item} = this.props
    return(
      <div className="modal fade" id={`edit-item-modal-${item.id}`} tabIndex="-1" role="dialog" aria-labelledby="user-modal" aria-hidden="true">
          <div className="modal-dialog cascading-modal" role="document">
              <div className="modal-content">

                  <div className="modal-header bg-blue white-text">
                    <h4 className="title"><i className="fa fa-pencil"></i> Edit Item</h4>
                    <button type="button" className="close waves-effect waves-light"  aria-label="Close" onClick={e => this.cancelModal(e)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div id="user-modal-body" className="modal-body mb-0">
                    <div>
                      <input className="form-control mb-0" defaultValue={item.name} type="text" id="task-name" />
                      <small className="mt-0">task name</small>
                    </div>

                    <div className="form-group d-flex justify-content-start mt-5">
                      <input type="checkbox" id="active" checked={this.state.activeChecked} onChange={e => this.setState({activeChecked: !this.state.activeChecked})}/>
                      <label htmlFor="active">required task <small>(i.e. could you skip it?)</small></label>
                    </div>

                    <div className="mb-3">
                      <input className="form-control mb-0" defaultValue={item.duration} id="task-duration" type="number" />
                      <small className="mt-0">duration <small>(in minutes)</small></small>
                    </div>

                    <div className="d-flex justify-content-around">
                       <button id="delete-task-btn" className="btn btn-danger mb-4" onClick={e => this.deleteModal(e)}>delete</button>
                       <button id="update-task-btn" className="btn btn-info bg-blue mb-4" onClick={e => this.updateModal(e)}>update</button>
                     </div>

                  </div>
              </div>
          </div>
      </div>
    )
  }

}

export default EditItemModel
