/* ----------------------------------------------------------------------------------------
    THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadData, false);

function loadData() {
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    console.log(manufacturerStored);
    
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://raw.githubusercontent.com/cookedm87/luxurycarsJSON/master/expensiveLuxuryCars.json", true);
    
    myRequest.onload = function () {
        if(myRequest.readyState == 4 && myRequest.status == 200){
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            if(manufacturerStored === "") {
                
                function clearAll() {
                    var hideText = document.getElementsByClassName("data")
                    for(var i = 0; i <hideText.length; i++) {
                        hideText[i].innerHTML=""
                    }
                }
                clearAll();
                document.getElementById("messageAlert").innerHTML = "Please choose a car manufacturer first...";
            }else {
                document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
                document.getElementById("priceC").innerHTML = myData.data[manufacturerStored].price;
            }
        }
        
    }
    myRequest.send();
    console.log(myRequest);
    
}




















