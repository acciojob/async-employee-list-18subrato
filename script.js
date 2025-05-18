// Asynchronously fetch and process employee data
fetch('employees.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(employees => {
    // Sort employees by age in ascending order
    employees.sort((a, b) => a.age - b.age);
    
    // Log sorted employee list
    console.log("Sorted Employees by Age:");
    console.log(employees);
  })
  .catch(error => {
    console.error('There was a problem fetching the employee data:', error);
  });
