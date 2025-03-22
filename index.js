const employee = {
   name: "Angelina",
   streetAddress: "061101 agakhan"
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    return {...employee,[key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  console.log(updateEmployeeWithKeyAndValue(employee, "position", "Manager")); 

  
  console.log(employee); 
  
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Manager")); 
  
  
  console.log(deleteFromEmployeeByKey(employee, "streetAddress")); 
  
  
  console.log(employee); 
  
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")); 
  
  
  console.log(employee);