// console.log("JS connected");

document.addEventListener("keypress",(e)=>{
     
     if(e.key==="Enter"){
        e.preventDefault();
        calculateBMI();
     }
});

document.getElementById("reset_inputs").addEventListener("click",(e)=>{e.preventDefault();resetInputs()});
document.getElementById("submit_res").addEventListener("click",(e)=>{e.preventDefault();calculateBMI()});


function resetInputs(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("res_txt").innerHTML="Please provide height and weight";
    resetAnimations();

}

function resetAnimations(){
    document.getElementById("res_txt").innerHTML="Please provide height and weight";
    document.getElementById("res_brown").classList.remove("pulse_it");
    document.getElementById("res_green").classList.remove("pulse_it");
    document.getElementById("res_yellow").classList.remove("pulse_it");
    document.getElementById("res_orange").classList.remove("pulse_it");
    document.getElementById("res_red").classList.remove("pulse_it");
}


function calculateBMI(){

    resetAnimations();

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

    if(wmeasure.trim()==="gr"){
        wvalue = grTokg(wvalue);
    }

    if(wmeasure.trim()==="lb"){
        wvalue = lbTokg(wvalue);
    }

    if(wmeasure.trim()==="oz"){
        wvalue = ozTokg(wvalue);
    }




    let BMI = (wvalue/(hvalue*hvalue)).toFixed(2);

    document.getElementById("res_txt").innerHTML=`Your BMI is: ${BMI}`;

    if(BMI<18.5){
        document.getElementById('res_brown').classList.add('pulse_it');
        return;
    }else if
    (BMI<25 && BMI>=18.5){
        document.getElementById('res_green').classList.add('pulse_it');
        return;
    }else if(BMI<30 && BMI>=25){
        document.getElementById('res_yellow').classList.add('pulse_it');
        return;
    }else if(BMI<35 && BMI>=30){
        document.getElementById('res_orange').classList.add('pulse_it');
        return;
    }else if(BMI>=35){
        document.getElementById('res_red').classList.add('pulse_it');
        return;
    }

   // alert("Your BMI is: "+BMI);

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

function grTokg(gr){
   return gr/1000;
}

function lbTokg(lb){
    return lb* 0.45359237;
}

function ozTokg(oz){
    return oz * 0.0283495231;
}



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}