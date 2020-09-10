function show(data) {
    console.log(data);
}
function errorGen() {
    setTimeout(() => {
        throw Error('this is very harmful error');
    }, 2000);
}


try {
    show('Try block 1');
    errorGen();
    show('Try block 2');
} catch (error) {
    show('Catch block');
} finally {
    show('Finally block');
}