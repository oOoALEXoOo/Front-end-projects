function selectElementById() {
    console.log(content);
    console.log(window['content-holder']);
}

function changeBackgroundColor() {
    let contentElement = document.getElementById('content');
    let color = contentElement.style.backgroundColor;

    switch (color) {
        case '':
            contentElement.style.backgroundColor = 'red';
            break;
        case 'red':
            contentElement.style.backgroundColor = 'yellow';
            break;
        case 'yellow':
            contentElement.style.backgroundColor = 'green';
            break;
        case 'green':
            contentElement.style.backgroundColor = 'blue';
            break;
        case 'blue':
            contentElement.style.backgroundColor = 'red';
            break;
    }
}

function selectByTagName() {
    let tableElement = document.getElementById('custom-table');
    let elements = tableElement.getElementsByTagName('input');

    for (let i = 0; i < elements.length; i++) {
        let currentInput = elements[i];

        console.log(currentInput.attributes.value.nodeValue + '------->'
        + currentInput.checked);
    }
}

function useQuerySelector() {
    let elements = document.querySelectorAll('ul > li:last-child');

    for (let i = 0; i < elements.length; i++) {
        let currentInput = elements[i];

        console.log(currentInput.innerHTML);
        currentInput.innerHTML = '-------------';
    }
}

function selectCustomAttributes() {
    let element = document.getElementById('divWithCustomAttributes');

    console.log(element.getAttribute('data-about'));
    console.log(element.getAttribute('data-current-student-name'));

    console.log(element.dataset.about);
    console.log(element.dataset.currentStudentName);

}