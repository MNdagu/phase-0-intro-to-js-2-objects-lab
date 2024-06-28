const employee = {
    name :'Mark',
    streetAddress : 'Nairobi',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    return newEmployee
}
const employee2 = updateEmployeeWithKeyAndValue(
    employee,
    'name',
    'John'
);

console.log(employee2);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    'streetAddress', 
    'Nakuru'
);
console.log(employee3);

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key]
    return newObj
}
const employee4 = deleteFromEmployeeByKey(
    employee, 
    'streetAddress'
);
console.log(employee4);

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
const employee5 = destructivelyDeleteFromEmployeeByKey(
    employee, 
    'name'
);
console.log(employee5);
