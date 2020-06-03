import React from 'react'
import modules from './ContabTodoAttachments.module.css'
import Moment from 'react-moment'
import 'moment-timezone';
// require('./../../../../../../uploads')

const ContabTodoAttachments = (props) => {

    if (!props.attachmentsApart) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className={modules.gencontent}>

            {props.attachmentsApart.map(attach => {

                const varia = () => {
                    if (!attach.notes) {
                        return 'No comment'
                    } else {

                        return attach.notes

                    }

                }

                const imgPath = () => {
                    if (!attach.attach_filename) {
                        return <div>No attachments</div>

                    } else {

                        return <img src={require(`./../../../../../../uploads/${attach.attach_filename}`)} class="rounded mx-auto d-block" style={{ width: '20%' }} alt="..." />

                    }

                }

                return (

                    <div class="jumbotron" >
                        <div className={modules.jtron}>
                            <p><Moment local locale="en" format='MMMM Do YYYY, HH:mm:ss'>{attach.create_date}</Moment></p>
                            <h3 class="">{attach.worker_name}</h3>
                            <p class="lead">{varia()}</p>
                            <hr class="my-4" />
                            <p class="lead">
                                <p>Attachments:</p>
                                {imgPath()}

                            </p>
                        </div>
                    </div>

                )
            })}





        </div>
    )
}
export default ContabTodoAttachments;