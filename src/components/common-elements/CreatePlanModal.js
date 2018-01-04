import React from 'react'

const CreatePlanModel = ({item}) => {

  return(
    <div className="modal fade" id="user-modal" tabIndex="-1" role="dialog" aria-labelledby="user-modal" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">

                <div className="modal-header bg-blue white-text">
                  <h4 className="title"><i className="fa fa-pencil"></i> Edit Item</h4>
                  <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="user-modal-body" className="modal-body mb-0">
                  <div className="md-form form-sm">
                   <i className="fa fa-user prefix"></i>
                   <h2 className="ml-5 pt-2">{item.name}</h2>
                 </div>

                 <div className="d-flex align-items-center">
                    <i className="fa fa-font"></i>
                    <p className="ml-4 pt-2">Hello</p>
                 </div>

                 <div className="d-flex align-items-center">
                    <i className="fa fa-envelope"></i>
                    <p className="ml-4 pt-2">email: </p>
                 </div>

                 <div className="form-group">
                    <input type="checkbox" id="active" />
                    <label htmlFor="active">active</label>
                 </div>

                 <div className="form-group">
                    <input type="checkbox" id="admin"/>
                    <label htmlFor="admin">admin</label>
                 </div>

                 <div className="text-center mt-1-half">
                     <button id="update-user-btn" className="btn btn-info blue-gradient mb-4">Update<i className="fa fa-send ml-1"></i></button>
                 </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePlanModel
