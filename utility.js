// Multiple time used function
function alart() {
    alert("Invalid Donation Amount!");
  }
function inputValueById(id) {
    const donatedAmount = document.getElementById(id);
    return parseFloat(donatedAmount.value);
}
function innerTextValueById(id) {
    const text = document.getElementById(id);
    return parseFloat(text.innerText);
}



// Single time used function
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation').setAttribute('hidden', true)
    document.getElementById('donation').classList.remove("bgprimary")
    document.getElementById('donation').classList.add('border', 'border-solid', 'borderdark');
    document.getElementById('history').removeAttribute('hidden')
    document.getElementById('history').classList.remove('border', 'border-solid', 'borderdark');


})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history').setAttribute('hidden', true)
    document.getElementById('donation').removeAttribute('hidden')

})

document.getElementById('donate-btn1').addEventListener('click', function(){
    const donatedAmount = inputValueById('ip_1');
    const myBalance = innerTextValueById('balance');
    const totalDonation = innerTextValueById('total-donation1');
    if(!typeof(donatedAmount)==='number' || donatedAmount<1){
        return alart();
    }
        
        document.getElementById('donate-btn1').addEventListener('click',my_modal_1.showModal())
        const newBalance = myBalance-donatedAmount;
        const newTotalDonation = totalDonation+donatedAmount;

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('total-donation1').innerText = newTotalDonation;

})
