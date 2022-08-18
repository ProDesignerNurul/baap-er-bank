function getInputFieldValueById(inputId){
    const textInputField = document.getElementById(inputId);
    const textInputValueString = textInputField.value;
    const textInputFieldValue = parseFloat(textInputValueString);

    textInputField.value = '';
    return textInputFieldValue;
}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}