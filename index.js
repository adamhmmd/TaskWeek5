class Isian {
  constructor(name, age, income) {
      this.name = name;
      this.age = age;
      this.income = income
  }
}

const dataDefault = [
  new Isian("adam muhammad", 27, 100000)
]

let average_income = 0;
let sum_income = 0;

function find_average_income() {

  for (let i = 0; i < dataDefault.length; i++){
  
  sum_income += dataDefault[i].income
  }
  average_income = sum_income / dataDefault.length
 
}
find_average_income()

let average_age = 0;
let sum_age = 0;

function find_average_age() {

  for (let i = 0; i < dataDefault.length; i++){
  
  sum_age += dataDefault[i].age
  }
  average_age= sum_age / dataDefault.length
 
}
find_average_age()

console.log(sum_income);
console.log(dataDefault);

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  const submitButton = document.getElementById("submit-button")
  const tableData = document.getElementById("table-data")
  const resume = document.getElementById("resume")
  populateData(tableData)
  resume.innerHTML = `the average of income is ${average_income} with the average age ${average_age} years`

  const nameElement = document.getElementById("input-name")
  const ageElement = document.getElementById("input-age")
  const incomeElement = document.getElementById("input-income")
  submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const name = nameElement.value;
      const age = +(ageElement.value);
      const income = +(incomeElement.value);
      
      const {isValid, message} = inputValidation(name, age, income)

      if(isValid) {
          const newIsian = new Isian(name, age, income)
          
          dataDefault.push(newIsian)
          

           
          tableData.innerHTML = ""
          populateData(tableData)

          average_income = 0;
          sum_income = 0;
          average_age = 0;
          sum_age = 0;

          
          find_average_age()
          find_average_income()

          console.log();
          
          resume.innerHTML = `the average of income is ${average_income} with the average age ${average_age} years`
          
      } else {
          alert(message)
      }
      
  })
});






function inputValidation(name, age, income) {
  let isValid = true;
  let message = "";

  if(age < 25) {
      isValid = false;
      message = "age must be greater than 25"
  }

  if(name.length < 10) {
      isValid = false;
      message = "your name at least contain 10 character"
  }

  if (income <= 100000 || income >= 1000000) {
      isValid = false;
      message = "please input your income between 100000 and 1000000"
  }

  return {
      isValid,
      message
  }
}

function populateData(tableData) {
  for (let i = 0; i < dataDefault.length; i++) {
      let row = tableData.insertRow(i);

      row.insertCell(0).innerHTML = `${i+1}`
      row.insertCell(1).innerHTML = `${dataDefault[i].name}`
      row.insertCell(2).innerHTML = `${dataDefault[i].age}`
      row.insertCell(3).innerHTML = `${dataDefault[i].income}`
  }
}