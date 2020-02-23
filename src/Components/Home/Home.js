import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import {getEmployeesData, addEmployee, UpdateEmployeeDetails, DeleteEmployeeDetails} from '../../Api/api'
let editEmployeeDetails = {}
const Home =() => {
    const [ employees, updateEmployees ] = useState({});
    const [ showForm, updateShowForm ] = useState( '' );
    const rowHeadings = [ 'NAME', 'AGE', 'EMAIL', 'ADDRESS', 'EDIT ACTION', 'DELETE ACTION' ];
    
    useEffect(() => {
        updateEmployees(getEmployeesData())
    }, [])

    const addEmployeesData = async ( employee ) => {
       let added =  await  addEmployee( { ...employee, id: parseInt( Math.random() * 1000 ) } )
        updateEmployees(getEmployeesData())
    }
   
    const editEmployeeData = async ( employee ) =>
    { 
        console.log( 'here' );
        let edited = await UpdateEmployeeDetails( employee )
        updateEmployees(getEmployeesData())
        //let filtereddata = employees.filter( empl => empl.id !== employee.id );
        //updateEmployees( [ ...filtereddata, {...employee}])

    }
    const editEmployee =  (employee) =>
    { 
        editEmployeeDetails = employee;
        updateShowForm( 'EDIT' );
    }

    const deleteEmployee = async (id) =>
    { 
        let deleteEmp = await DeleteEmployeeDetails( id );
        updateEmployees(getEmployeesData())
    }

    
    console.log( 'Object.values', Object.values( employees ) );
        return (
            <div className="container">
                { showForm === "" && <>
                    <button onClick={ () => updateShowForm('ADD')}> Add Employee </button>
                </> }
                
                { showForm === "ADD" && <Form addNewEmployee ={ addEmployeesData } updateShowForm={ updateShowForm} /> }
                
                { showForm === "" && Object.values(employees).length > 0 && <table>
                    <tr>{ rowHeadings.map( head => <th>{ head }</th> ) }</tr>
                    { Object.values(employees).map( employee => <tr>
                        <td>{ employee.name }</td>
                        <td>{ employee.age }</td>
                        <td>{ employee.email }</td>
                        <td>{ employee.address }</td>
                        <td><button onClick={() => editEmployee(employee) }>Edit Information</button></td>
                        <td><button onClick={() => deleteEmployee(employee.id)}>Delete Information</button></td>
                    </tr> ) }
                    </table>
                }
                { showForm === 'EDIT' && <Form edit={ editEmployeeDetails } editEmployeeData={editEmployeeData} updateShowForm={ updateShowForm}/>}
            </div>
        );
    }

export default Home;