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
                document.getElementById("descriptionC").innerHTML = myData.data[manufacturerStored].description;
                
                document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="'+myData.data[manufacturerStored].video + '" frameborder="0" allowfullscreen></iframe>';
                
                /*document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="'+myData.data[manufacturerStored].video+'" frameborder="0" allowfullscreen></iframe>'; MANUELS CODE*/
                
                document.getElementById("imgC").innerHTML = '<img src="'+myData.data[manufacturerStored].img+'" width="auto" height="auto" alt="Car Image">';
                
               /* document.getElementById("imgC").innerHTML = '<img src="'+myData.data[manufacturerStored].img+'" width="auto" height="auto" alt="Car Image">'; MANUELS CODE*/
                
                
                document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
                document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
                document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
                document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
                document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
                document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
              
            }
        }
        
    }
    myRequest.send();
    console.log(myRequest);
    
}

/*
var f1 = ["Lewis", "Kim", "Alonso"];

f1.forEach(function(item, index){
    console.log(item);
    console.log(index);
    
});
*/
















