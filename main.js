// console.log("JS connected");

document.getElementById("reset_inputs").addEventListener("click",resetInputs);
document.getElementById("submit_res").addEventListener("click",calculateBMI);


function resetInputs(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
}

function calculateBMI(){

    let hvalue = document.getElementById("height").value;
    let wvalue = document.getElementById("weight").value;

    let hmeasure = document.getElementById("height_me").value;
    let wmeasure = document.getElementById("weight_me").value;


    if(!/^\d*\.?\d*$/.test(hvalue)){
        alert("Inputs must be valid numbers");
        resetInputs();
        return
    }else{
        hvalue = Number(hvalue);
    }

    if(!/^\d*\.?\d*$/.test(wvalue)){
        alert("Inputs must be valid numbers");
        resetInputs();
        return
    }else{
        wvalue = Number(wvalue);
    }

    // alert(`Visina je: ${hvalue} ${hmeasure}, dok je tezina: ${wvalue} ${wmeasure}`);

    if(hmeasure.trim()==="cm"){
        hvalue = cmTOm(hvalue);
    }

    if(hmeasure.trim()==="ft"){
        hvalue = ftTom(hvalue);
    }

    if(hmeasure.trim()==="in"){
        hvalue = inTom(hvalue);
    }




    let BMI = wvalue/(hvalue*hvalue);

    alert("Your BMI is: "+BMI);

}


/* Converter functions */

function cmTOm(cm){
    return cm/100;
}

function mTocm(m){
    return m*100;
}

function ftTom(ft){
    return ft*0.3048;
}

function mToft(m){
    return m/0.3048;
}

function inTom(inc){
  return inc *0.0254;
}