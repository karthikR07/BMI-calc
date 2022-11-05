let getBtn = document.getElementById("buttonS");

getBtn.addEventListener("click",function(e){
    e.preventDefault();
    let mass = parseFloat(document.getElementById("weight").value).toFixed(2);
    let height = parseFloat(document.getElementById("height").value)/100;
    let finalValue = (mass/(height*height)).toFixed(2);
    let element = document.getElementById("final")
    let heading = document.createElement("h1");
    heading.innerHTML = "Result";
    var para = document.createElement("p");
    
        para.innerHTML = "BMI = "+finalValue+ " kg/m"+"2".sup();
        element.appendChild(heading);
        element.appendChild(para);
        element.style.backgroundColor= "whitesmoke";
        element.style.border = "10px solid aquamarine";
    if(finalValue === "NaN"){
        finalValue = "0";
        para.innerHTML = "BMI = "+finalValue+ " kg/m"+"2".sup();
        element.appendChild(heading);
        element.appendChild(para);
        element.style.backgroundColor= "whitesmoke";
        element.style.border = "10px solid aquamarine";
    }else{
        para.innerHTML = "BMI = "+finalValue+ "kg/m"+"2".sup();
        element.appendChild(heading);
        element.appendChild(para);
        element.style.backgroundColor= "whitesmoke";
        element.style.border = "10px solid aquamarine";
    }
},{once:true});