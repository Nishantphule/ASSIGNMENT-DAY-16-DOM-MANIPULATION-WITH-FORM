"use strict"
// creating a function for button submit 
// when u click on submit button it will collect the data
document.getElementById("submit").addEventListener("click",function nishant() {
    let fnameo = document.getElementById("first-name").value;
    let lnameo = document.getElementById("last-name").value;
    let addresso = document.getElementById("address").value;
    let pincodeo = document.getElementById("pincode").value;
    let gendero = document.getElementsByName("GENDER");
    // to get the select radio button value
    if(gendero[0].checked){
        gendero=gendero.value="MALE"
    }
    else if(gendero[1].checked){
        gendero=gendero.value="FEMALE"
    }
    else{
        gendero=gendero.value="OTHER"
    }
    let food1o = document.getElementById("food1").value;
    let food2o = document.getElementById("food2").value;
    let stateo = document.getElementById("state").value;
    let countryo = document.getElementById("country").value;
    const data = {
        fname:fnameo,
        lname:lnameo,
        address:addresso,
        pincode:pincodeo,
        gender:gendero,
        food:food1o+"<br>"+food2o,
        state:stateo,
        country:countryo
      }
          let temp = "";
            temp += "<tr>";
            temp += "<td>" + data.fname + "</td>";
            temp += "<td>" + data.lname + "</td>";
            temp += "<td>" + data.address + "</td>";
            temp += "<td>" + data.pincode + "</td>";
            temp += "<td>" + data.gender + "</td>";
            temp += "<td>" + data.food + "</td>";
            temp += "<td>"+ data.state + "</td>";
            temp += "<td>" + data.country + "</td>";
          document.getElementById('data').innerHTML += temp;
        form.reset()
      }
    )
  


  
