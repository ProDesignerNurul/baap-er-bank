document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previoustWithdrawTotal = getTextElementById('withdraw-total');
    const newWithdrawTotal = previoustWithdrawTotal + newWithdrawAmount;
    setTextElementById('withdraw-total', newWithdrawTotal);

    const previousBalanceAmount = getTextElementById('balance-total');
    const newBalanceAmountTotal = previousBalanceAmount - newWithdrawAmount;
    setTextElementById('balance-total', newBalanceAmountTotal);
})