// Write your solution in this file!
const employee = {
                     name: "Faith Nyolei" ,
                     streetAdress: "605 Nyeri"
                     } ;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value };

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee[key]= value;
      return employee;

}
function deleteFromEmployeeByKey(employee, key)
{
     const { [key]: omitted, ...newEmployee} = employee;
     return newEmployee;
  
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly delete the property from the original object
    return employee; // Return the mutated object
}
