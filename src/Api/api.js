let EmployeeData = [{id:2,name:"surabhi",age:"30",email:"batrasurabhi16@gmail.com",address:"Mumbai"}]
let EmployeeList = {}
export const getEmployeesData = () =>
{
    EmployeeList = {}
    EmployeeData.map( item =>
    {
        EmployeeList[item.id] = item
    })
    return EmployeeList
}

export const addEmployee = (employee) =>
{
    EmployeeData.push(employee)
}
export const UpdateEmployeeDetails = (emp) =>
{
    
    EmployeeList[ emp.id ] = emp
    EmployeeData = Object.values(EmployeeList)
}

export const DeleteEmployeeDetails = (id) =>
{
    
    EmployeeList[ id ] = false
    EmployeeData = Object.values(EmployeeList).filter(Boolean)
}


