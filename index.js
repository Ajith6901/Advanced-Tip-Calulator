
// variable in global scope

let total_per_person = (document.getElementById("totalPerPerson").value);
let person_count=Number(document.getElementById("people_count").innerText);
let bill_total =Number(document.getElementById("bill_total").value);
let tip =Number (document.getElementById("tip").value);

let calculateBill=()=>{
    
    
     
    let temp = bill_total+(bill_total*(tip/100));
    
    total_per_person =temp/person_count;
    // console.log("temp ",temp);
    // console.log("people_count as per document",document.getElementById("people_count").value);
    // console.log("person_count",person_count);
    // console.log( "total_per_person" ,total_per_person );
    // console.log(total_per_person);
    document.getElementById("totalPerPerson").innerHTML=total_per_person.toFixed(2);

    

}   
let increase=()=>{
    person_count = Number( document.getElementById("people_count").innerText);
    person_count += 1;

    
    
    document.getElementById("people_count").innerHTML=person_count;

    calculateBill();
}

let decrease=()=>{
    
    person_count = Number( document.getElementById("people_count").innerText);
    person_count -= 1;
    if(person_count<=0)person_count=1;
    
    document.getElementById("people_count").innerHTML=person_count;
    calculateBill();
}

    