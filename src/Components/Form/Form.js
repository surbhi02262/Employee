import React, { useState } from 'react';

const Form = ( {
    addNewEmployee,
    updateShowForm,
    edit,
    editEmployeeData,
} ) =>
{
    const [ employee, updateEmployee ] = useState(edit ||  { name: "", age: "", email: "", address: "" } );
    const handleSubmit = () =>
    { 
        if ( employee.name.length > 0 && employee.age.length > 0 && employee.email.length > 0 && employee.address.length > 0 )
        {
            addNewEmployee( employee )
            updateShowForm("")
        }
    }
    const editSubmit = () =>
    {
        if ( employee.name.length > 0 && employee.age.length > 0 && employee.email.length > 0 && employee.address.length > 0 )
        {
            editEmployeeData(employee)
            updateShowForm("")
        }

    }
    return (
            <div className="form-container">
                <div className="input-group">
                    <label>Name: </label>
                    <input type="text" name="name" value={ employee.name }
                        placeholder="Enter name" onChange={(e) => updateEmployee({...employee, name:e.target.value})}/>
                </div>
                <div className="input-group">
                    <label> Age: </label>
                <input type="text" name="age" value={ employee.age }
                    placeholder="Enter Age" onChange={(e) => updateEmployee({...employee, age:e.target.value}) }/>
                </div>
                <div className = "input-group" >
                    <label>Email: </label>
                    <input type="text" name = "email" value= {employee.email}
                        placeholder="Enter Email" onChange={(e) => updateEmployee({...employee, email: e.target.value}) } />
                </div>
                <div className = "input-group" >
                    <label> Address: </label>
                    <input type="text" name="address" value={ employee.address }
                        placeholder="Enter Address" onChange = {(e) => updateEmployee({...employee,address: e.target.value})}/> 
                </div>
                <div className="btn-container">
                { !edit && <button onClick={ handleSubmit }>Add Employee</button> }
                { edit && <button onClick={ editSubmit }>Edit Employee</button> }

                </div>
            </div>
        );
    }

export default Form;