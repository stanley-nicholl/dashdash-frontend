import React from 'react'

const EditPlanNameModal = ({updateName}) => {

  const updateModal = (e) => {
    window.$('#name-modal').modal('toggle')
    updateName(document.getElementById('name').value)
  }

  return(
    <div className="modal fade" id="name-modal" tabIndex="-1" role="dialog" aria-labelledby="name-modal" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
          <div className="modal-content">

            <div className="modal-header bg-blue white-text">
              <h4 className="title"><i className="fa fa-pencil"></i> Edit Sched Name</h4>
              <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div id="user-modal-body" className="modal-body mb-0">
              <div>
                <input className="mb-0 form-control" id="name"  type="text" />
                <small className="mt-0">schedule name</small>
              </div>

              <div className="d-flex justify-content-center">
                 <button id="update-name-btn" className="btn btn-info bg-blue mb-4" onClick={e => updateModal(e)}>update</button>
               </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default EditPlanNameModal
