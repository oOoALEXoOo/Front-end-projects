let buttonDefineExtLnk = document.querySelector('input[type = "button"]');

buttonDefineExtLnk.onclick = function () {
    let listAnchors = document.querySelectorAll('ul > li > a');
    for (let anchor of listAnchors) {
        if ((anchor.getAttribute('href').startsWith(`http://`) ||
            anchor.getAttribute('href').startsWith(`ftp://`))  &&
            !anchor.getAttribute('href').startsWith(`http://internal.com`)) {
            anchor.className = 'external-red';
        }
    }
}