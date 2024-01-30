//Change the value value="5" according to the value conditions | 1 Sangat Kurang | 2 Kurang | 3 Cukup | 4 Baik | 5 Sangat Baik

const radioElements = document.querySelectorAll('div.form-check input[type="radio"][value="5"]');
radioElements.forEach((radioElement, index) => {
    radioElement.removeAttribute('disabled');
    radioElement.checked = true;
    console.log(`Elemen radio ${index + 1}: Jawaban "Sangat Baik" dipilih.`);
});
