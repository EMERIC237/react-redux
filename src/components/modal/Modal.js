import React, { useState, useEffect } from 'react';
import { updateForm } from '../../redux/form/formReducer';
import { useDispatch } from "react-redux";
import './Modal.css';

export default function Modal(props) {
    const dispatch = useDispatch();
    const { formId, formTitle, formBody} = props;

    const closeOnEscapeKeyDown = (e) => {
       if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, []);

    const [formValue, setFormValue] = useState({
        title: "",
        body: ""
    })

    const onChangeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormValue((currentForm) => ({
            ...currentForm,
            [name]: value
        }))
    }
    const updateHandler = (event) => {
        event.preventDefault();
        dispatch(updateForm(formId, formValue.title, formValue.body))
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4> Update Form </h4>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="formContent">
                            <div className="formItem">
                                <p> {formId} </p>
                            </div>

                            <div className="formItem">
                                <label> title </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="formItem"
                                    onChange={onChangeHandler}
                                    defaultValue={formTitle}
                                />
                            </div>

                            <div className="formItem">
                                <label> message </label>
                                <textarea
                                    name='body'
                                    onChange={onChangeHandler}
                                    defaultValue={formBody}></textarea>
                            </div>

                            <div className="formItem">
                                <button type="button" onClick={updateHandler}> Update </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className='btn-close' onClick={props.onClose}> Close </button>
                </div>
            </div>
        </div>
    )
}




