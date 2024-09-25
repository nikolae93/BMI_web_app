// console.log("JS connected");

document.getElementById("reset_inputs").addEventListener("click",resetInputs);


function resetInputs(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
}
