import React from 'react'

const EditPlanNameModal = ({updateTime}) => {

  const updateModal = (e) => {
    updateTime(document.getElementById('time').value)
    window.$('#time-modal').modal('toggle')
  }

  return(
    <div className="modal fade" id="time-modal" tabIndex="-1" role="dialog" aria-labelledby="time-modal" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">

                <div className="modal-header bg-blue white-text">
                  <h4 className="title"><i className="fa fa-pencil"></i> Edit Arrival Time</h4>
                  <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="user-modal-body" className="modal-body mb-0">
                  <div>
                    <input className="mb-0" id="time" type="time" className="form-control"/>
                    <small className="mt-0">arrival time</small>
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
