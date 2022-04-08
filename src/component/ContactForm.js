import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FaUserAlt } from 'react-icons/fa';
import { BiMobile } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';



const ContactsForm = (props) => {
    const initialFieldsValue = {
        fullname: '',
        mobile: '',
        email: '',
        address: ''

    }

    const [values, setValues] = useState(initialFieldsValue)

    useEffect(() =>{
        if(props.currentId=='')
        setValues({
            ...initialFieldsValue
        })
        else
        setValues({
            ...props.contactObject[props.currentId]
        })

    },[props.currentId, props.contactObject])


    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({ ...values, [name]: value })
        console.log(name);
    }

    const handleForSubmit = (e) => {
        e.preventDefault()
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleForSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text" style={{ height: '38px' }}>
                        <FaUserAlt />
                    </div>
                </div>
                <input className="form-control"
                    placeholder="Full-Name"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text w-15" style={{ height: '38px' }}>
                        <BiMobile />
                    </div>
                </div>
                <input className="form-control"
                    placeholder="Mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text w-15" style={{ height: '38px' }}>
                        <MdEmail />
                    </div>
                </div>
                <input className="form-control"
                    placeholder="Email address"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <textarea className="form-control"
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleInputChange} />

            </div>

            <div className="form-group">
                <input type="submit" value={props.currentId==''?"Save":"Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default ContactsForm;