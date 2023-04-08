/*
1. add event listener to the phone plus button
2. get the value inside the phone number field (input field)
3. convert the number to an integer
4. calculate the new phone number 
5. set the value to the phone number field

*/

function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(naymul) {
    const phoneTotalPrice = naymul * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})


