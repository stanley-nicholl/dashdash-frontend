import React from 'react'

const CreateItemModel = ({addItem}) => {
  const cancelModal = (e) => {
    document.getElementById('new-name').value = ''
    document.getElementById('new-duration').value = ''
    document.getElementById('active').checked = false
    window.$('#create-item-modal').modal('toggle')
  }

  const createModal = (e) => {
    const newItem = {
      name: document.getElementById('new-name').value,
      duration: document.getElementById('new-duration').value,
      skippable: document.getElementById('active').checked
    }
    document.getElementById('new-name').value = ''
    document.getElementById('new-duration').value = ''
    document.getElementById('active').checked = false
    window.$('#create-item-modal').modal('toggle')
    addItem(newItem)
  }

  return(
    <div className="modal fade" id="create-item-modal" tabIndex="-1" role="dialog" aria-labelledby="create-item-modal" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">

                <div className="modal-header bg-blue white-text">
                  <h4 className="title"><i className="fa fa-pencil"></i> Create Item</h4>
                  <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="user-modal-body" className="modal-body mb-0">
                  <div>
                    <input className="mb-0" type="text" id="new-name" className="form-control"/>
                    <small className="mt-0">task name</small>
                  </div>

                  <div className="form-group d-flex justify-content-start mt-5">
                    <input type="checkbox" id="active" />
                    <label htmlFor="active">required task <small>(i.e. could you skip it?)</small></label>
                  </div>

                  <div className="mb-3">
                    <input className="mb-0" type="number" className="form-control" id="new-duration"/>
                    <small className="mt-0">duration <small>(in minutes)</small></small>
                  </div>



                  <div className="d-flex justify-content-around">
                     <button id="cancel-task-btn" className="btn btn-danger mb-4" onClick={e => cancelModal(e)}>cancel</button>
                     <button id="create-task-btn" className="btn btn-info bg-blue mb-4" onClick={e => createModal(e)}>create</button>
                   </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateItemModel
