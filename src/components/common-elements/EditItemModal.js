import React from 'react'

const EditItemModel = ({item}) => {
  console.log(item);
  const deleteModal = (e) => {
    console.log('delete');
    window.$('#edit-item-modal').modal('toggle')
  }

  const updateModal = (e) => {
    console.log('update');
    window.$('#edit-item-modal').modal('toggle')
  }

  return(
    <div className="modal fade" id="edit-item-modal" tabIndex="-1" role="dialog" aria-labelledby="user-modal" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">

                <div className="modal-header bg-blue white-text">
                  <h4 className="title"><i className="fa fa-pencil"></i> Edit Item</h4>
                  <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="user-modal-body" className="modal-body mb-0">
                  <div>
                    <input className="mb-0" defaultValue={item.name} type="text" className="form-control"/>
                    <small className="mt-0">task name</small>
                  </div>

                  <div className="form-group d-flex justify-content-start mt-5">
                    <input type="checkbox" id="active" checked={!item.skippable ? 'checked' : null}/>
                    <label htmlFor="active">required task <small>(i.e. could you skip it?)</small></label>
                  </div>

                  <div className="mb-3">
                    <input className="mb-0" defaultValue={item.duration} type="number" className="form-control"/>
                    <small className="mt-0">duration <small>(in minutes)</small></small>
                  </div>



                  <div className="d-flex justify-content-around">
                     <button id="delete-task-btn" className="btn btn-danger mb-4" onClick={e => deleteModal(e)}>delete</button>
                     <button id="update-task-btn" className="btn btn-info bg-blue mb-4" onClick={e => updateModal(e)}>update</button>
                   </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EditItemModel
