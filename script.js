/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value, index)=> {return 
    if(profession == "developer") {
      return index
    }
   })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value, index)=> {
     if(value.profession == "developer") {
      console.log(index)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push( id:4, name:"susan",age:"20",profession:"intern")
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((value, index)=> {
    if(profession != admin) {
      return index
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
 let arr2 = [
  { id: 4, name: "Om", age: "28", profession: "intern" },
  { id: 5, name: "Vikram", age: "23", profession: "HR" },
  { id: 6, name: "karn", age: "39", profession: "analyst" },
 ]
 let arr3 = arr1.concat(arr2)
}
