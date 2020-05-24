import React from 'react'
import modules from './content.module.css'
import DattePicker from './date_picker'

const SideBarTopContent = () => {
    return (
        <div className={modules.sidebartopcontent}>
            <div class='shadow  bg-light rounded-lg'>
                <h5 className="bg-dark rounded-lg text-light shadow" style={{ textAlign: "center" }}>Create new work</h5>
                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Worker</span>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">Ira</option>
                            <option value="2">Olea</option>
                            <option value="3">Alla</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Type your subject" aria-label="Type your subject" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Work subject</span>
                        </div>
                    </div>

                    <label for="basic-url">Choose data when need to do...</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Choose data</span>
                        </div>
                        <DattePicker />
                    </div>

                    <label for="basic-url">Write some comment/description...</label>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Description</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <br />
                    <div className={modules.tsidebarbutton}>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Submit</button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Are you sure ?</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Do you want to check againt ?
      </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Yes! I want to add something!</button>
                                        <button type="button" class="btn btn-primary">No! Send work now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </form>

            </div>

        </div>

    )
}

export default SideBarTopContent;