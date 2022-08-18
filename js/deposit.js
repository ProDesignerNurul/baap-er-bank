document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getTextElementById('deposit-total');
    
    const newDepositTotalAmount = previousDepositAmount + newDepositAmount;

    setTextElementById('deposit-total', newDepositTotalAmount);

    const previousBalanceTotal = getTextElementById('balance-total');
    const newBalanceAmount =  previousBalanceTotal + newDepositAmount;
    setTextElementById('balance-total', newBalanceAmount);
})