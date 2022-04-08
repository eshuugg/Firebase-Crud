import React, { useEffect, useState } from "react";
import ContactFrom from "./ContactForm";
import { get, getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import database from "../firebase";
import { GrEdit } from 'react-icons/gr';

const AddAndViewContacts = () => {

    var [contactObject, setContactObject] = useState({});
    var [currentId,setCurrentId] = useState('')

    useEffect(() => {
        onValue(ref(database, 'contacts'),(snapshot) => {
            const data = snapshot.val();
            if(snapshot.val()!=null)
            setContactObject({
                ...snapshot.val()
            })
            else
            setContactObject({})
               
            console.log(data)
        })
    }, []);

   


    const addOrEdit = obj => {
        console.log("-g-=gg-=-=gg- ", obj);
        if(currentId == '')
        push(ref(database, 'contacts'), {
            ...obj
        }).then((res) => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        else
        set(ref(database, `contacts/${currentId}`), {
            ...obj
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
            // remove()
    }

    const onDelete = key =>{
        if(window.confirm('Are you sure you want to delete the record')){
            remove(ref(database, `contacts/${key}`), {
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }


    return (
        <>
            <div className="jumbotron jumbotron-fluid" >
                <div className="container">
                    <h1 className="display-5 text-center">Contact info</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5" style={{ marginTop: '65px' }}>
                    <ContactFrom {...({addOrEdit,currentId,contactObject})} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObject).map(id =>{
                                    return<tr key={id}>
                                        <td>{contactObject[id].fullname}</td>
                                        <td>{contactObject[id].mobile}</td>
                                        <td>{contactObject[id].email}</td>
                                        <td>
                                            <a className="btn btn-primary" onClick={()=>{setCurrentId(id)}}>Edit</a>
                                            <a className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=> onDelete(id)}>Delete</a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody> 
                    </table>
                </div>
            </div>
        </>

    );
}

export default AddAndViewContacts;