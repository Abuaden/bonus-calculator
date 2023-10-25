const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

function calculateIndividualEmployeeBonus(employee) {  
  let bonusPercentage = 0;

  if (employee.reviewRating === 3) {
    bonusPercentage = 4;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 6;
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 10;
  }

  // IF employeeNumber.length is 4 digits: add 5 percent to bonus
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
  }

  // IF annualSalary > $65,000: subtract 1 percent from bonus
  if (Number(employee.annualSalary) > 65000) {
    bonusPercentage -= 1;
  }

  // Bonus must be >= 0% AND <= 13%  Bonus must be >=  and <13 percent
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  } else if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }

  return bonusPercentage;
}


     // Robert and Mayella no bonus 
 // Atticus rating is 3 so equals (((4 percent bonus
// Jem rating is 4 (( 6 percent bonus
// Scout rating is 5  10 Percent bonus
// Scout and Atticus 5 percent extra bonus
// Robert and Scout subtract 1 percent cuz of income > 65,000
// Robert bonus= 0



function processEmployee(employee) {
  let annualSalaryAsNumber = Number(employee.annualSalary);
  let bonusPercentage = calculateIndividualEmployeeBonus(employee);

  let totalBonus = annualSalaryAsNumber * (bonusPercentage / 100)
  let totalCompensation = totalBonus + annualSalaryAsNumber
  
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
}

for (let oneEmployee of employees) {
  console.log(processEmployee(oneEmployee));
}







// let bonusPercentage = 0;

// function calculateIndividualEmployeeBonus( employee ) {

//   let results = {
//     name: employee.name,
//     bonusPercentage: 0,
//     totalCompensation: 0,
//     totalBonus: 0
//   };

//   if (employee.reviewRating < 3 ) {
//     results.bonusPercentage += 0.04;}
//       else if( employee.reviewRating === 3){
//       results.bonusPercentage += 0.04;}
//         else if (employee.reviewRating === 4){
//         results.bonusPercentage += 0.06;
//       }else if (employee.reviewRating === 5){
//         results.bonusPercentage += 0.10;
//         } else if (employee.employeeNumber.length === 4){
//           results.bonusPercentage += 0.05;
//         } else if (employee.annualSalary > 65000){
//           results.bonusPercentage -= 0.01;
//         }
//         let name = employee.name

//       console.log(results.bonusPercentage);
//       }


//       if(results.bonusPercentage > 0.13){
//         results.bonusPercentage = 0.13
//       } else if (results.bonusPercentage < 0){
//         results.bonusPercentage = 0
//       }

// console.log(calculateIndividualEmployeeBonus(employees[0]));