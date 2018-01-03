import React from 'react'

const CreatePlanModel = ({item}) => {

  return(
    <div className="modal fade" id="user-modal" tabindex="-1" role="dialog" aria-labelledby="user-modal" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">

                <div className="modal-header bg-blue white-text">
                  <h4 className="title"><i className="fa fa-pencil"></i> Edit Item</h4>
                  <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="user-modal-body" className="modal-body mb-0">
                  <div class="md-form form-sm">
                   <i class="fa fa-user prefix"></i>
                   <h2 class="ml-5 pt-2">{item.name}</h2>
                 </div>

                 <div class="d-flex align-items-center">
                    <i class="fa fa-font"></i>
                    <p class="ml-4 pt-2">Hello</p>
                 </div>

                 <div class="d-flex align-items-center">
                    <i class="fa fa-envelope"></i>
                    <p class="ml-4 pt-2">email: </p>
                 </div>

                 <div class="form-group">
                    <input type="checkbox" id="active" />
                    <label for="active">active</label>
                 </div>

                 <div class="form-group">
                    <input type="checkbox" id="admin"/>
                    <label for="admin">admin</label>
                 </div>

                 <div class="text-center mt-1-half">
                     <button id="update-user-btn" class="btn btn-info blue-gradient mb-4">Update<i class="fa fa-send ml-1"></i></button>
                 </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePlanModel
