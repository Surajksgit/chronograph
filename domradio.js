function checkSelected() {
    const radios = document.getElementsByName('gender');
    let selectedValue = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    console.log('Selected Gender: ' + selectedValue);
}