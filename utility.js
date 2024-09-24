// Multiple time used function
function alert1() {
    alert("Invalid Donation Amount!");
  }
function alert2() {
    alert("You do not have enough balance!");
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
    document.getElementById('donation-btn').classList.remove("bgprimary")
    document.getElementById('donation-btn').classList.add('border', 'border-solid', 'borderdark', 'modal-btn-hover');
    document.getElementById('history').removeAttribute('hidden')
    document.getElementById('history-btn').classList.remove('border', 'border-solid', 'borderdark', 'modal-btn-hover');
    document.getElementById('history-btn').classList.add('bgprimary');


})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history').setAttribute('hidden', true)
    document.getElementById('history-btn').classList.remove("bgprimary")
    document.getElementById('history-btn').classList.add('border', 'border-solid', 'borderdark', 'modal-btn-hover');
    document.getElementById('donation').removeAttribute('hidden')
    document.getElementById('donation-btn').classList.remove('border', 'border-solid', 'borderdark', 'modal-btn-hover');
    document.getElementById('donation-btn').classList.add('bgprimary');

})

// Section 1
document.getElementById('donate-btn1').addEventListener('click', function(){
    const donatedAmount = inputValueById('ip_1');
    const myBalance = innerTextValueById('balance');
    const totalDonation = innerTextValueById('total-donation1');
    if(!typeof(donatedAmount)==='number' || donatedAmount<1 || document.getElementById('ip_1').value===''){
        document.getElementById('ip_1').value='';
        return alert1();
    }
    if(donatedAmount>myBalance){
        document.getElementById('ip_1').value='';
        return alert2();
    }

        document.getElementById('ip_1').value='';
        document.getElementById('donate-btn1').addEventListener('click',my_modal_1.showModal())
        const newBalance = myBalance-donatedAmount;
        const newTotalDonation = totalDonation+donatedAmount;

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('total-donation1').innerText = newTotalDonation;

    const now = new Date();
    const formattedDate = now.toString();

    const div = document.createElement('div');
    div.classList.add('border', 'border-solid', 'borderdark', 'px-2', 'md:px-28', 'py-1', 'md:py-8', 'mb-1', 'md:mb-8', 'md:text-2xl');
    div.innerHTML = `Donated Money: ${donatedAmount}, Balance after Donation: ${newBalance}. <br> Donation Time: ${formattedDate}`
    document.getElementById('history').appendChild(div);    
})

// section 2
document.getElementById('donate-btn2').addEventListener('click', function(){
    const donatedAmount = inputValueById('ip_2');
    const myBalance = innerTextValueById('balance');
    const totalDonation = innerTextValueById('total-donation2');
    if(!typeof(donatedAmount)==='number' || donatedAmount<1 || document.getElementById('ip_2').value===''){
        document.getElementById('ip_2').value='';
        return alert1();
    }
    if(donatedAmount>myBalance){
        document.getElementById('ip_2').value='';
        return alert2();
    }

        document.getElementById('ip_2').value='';
        document.getElementById('donate-btn2').addEventListener('click',my_modal_1.showModal())
        const newBalance = myBalance-donatedAmount;
        const newTotalDonation = totalDonation+donatedAmount;

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('total-donation2').innerText = newTotalDonation;

    const now = new Date();
    const formattedDate = now.toString();

    const div = document.createElement('div');
    div.classList.add('border', 'border-solid', 'borderdark', 'px-2', 'md:px-28', 'py-1', 'md:py-8', 'mb-1', 'md:mb-8', 'md:text-2xl');
    div.innerHTML = `Donated Money: ${donatedAmount}, Balance after Donation: ${newBalance}. <br> Donation Time: ${formattedDate}`
    document.getElementById('history').appendChild(div);
})

// section 3
document.getElementById('donate-btn3').addEventListener('click', function(){
    const donatedAmount = inputValueById('ip_3');
    const myBalance = innerTextValueById('balance');
    const totalDonation = innerTextValueById('total-donation3');
    if(!typeof(donatedAmount)==='number' || donatedAmount<1 || document.getElementById('ip_3').value===''){
        document.getElementById('ip_3').value='';
        return alert1();
    }
    if(donatedAmount>myBalance){
        document.getElementById('ip_3').value='';
        return alert2();
    }

        document.getElementById('ip_3').value='';
        document.getElementById('donate-btn3').addEventListener('click',my_modal_1.showModal())
        const newBalance = myBalance-donatedAmount;
        const newTotalDonation = totalDonation+donatedAmount;

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('total-donation3').innerText = newTotalDonation;

    const now = new Date();
    const formattedDate = now.toString();

    const div = document.createElement('div');
    div.classList.add('border', 'border-solid', 'borderdark', 'px-2', 'md:px-28', 'py-1', 'md:py-8', 'mb-1', 'md:mb-8', 'md:text-2xl');
    div.innerHTML = `Donated Money: ${donatedAmount}, Balance after Donation: ${newBalance}. <br> Donation Time: ${formattedDate}`
    document.getElementById('history').appendChild(div);    
})
