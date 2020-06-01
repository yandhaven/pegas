import React from 'react'
import modules from './ContabTodoAttachments.module.css'
import Moment from 'react-moment'
import 'moment-timezone';

const ContabTodoAttachments = (props) => {

    if (!props.attachmentsApart) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>

            <div className={modules.rcont}>{props.attachmentsApart.map(attach => {
                const varia = () => {
                    if (!attach.notes) {
                        return 'No comment'
                    } else {

                        return attach.notes

                    }

                }


                return (
                    <div class="jumbotron">

                        <p class="lead display-4">{varia()}</p>
                        <p><Moment local locale="en" format='MMMM Do YYYY, HH:mm:ss'>{attach.create_date}</Moment></p>
                        <hr class="my-5" />

                        <p>Attachment:</p>

                        <p class="lead">
                            <img src={require('./../../../../../../uploads/35896.png')} class="rounded mx-auto d-block" style={{ width: '20%' }} alt="..." />

                            {/* <img src={require('./../../../../../uploads/35896.png')} /> */}


                        </p>
                    </div>
                )
            })}</div>
        </div>
    )
}
export default ContabTodoAttachments;