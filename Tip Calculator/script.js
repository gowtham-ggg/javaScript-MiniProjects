const button = document.getElementById("button");
button.addEventListener("click", ()=>{
    const billInput = parseFloat(document.getElementById("bill").value);
    const tipInput = parseFloat(document.getElementById("tip").value);
    const display = document.getElementById("display");

    function findTotalPercent(billAmount, tipAmount){
        let percentage = (tipAmount/100)* billAmount;
        let total = billAmount + percentage;
        return total;
    }
    display.innerHTML = findTotalPercent(billInput, tipInput);
})