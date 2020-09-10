function show(data) {
    console.log(data)
}

let array = [];
//1. push
array.push(1);
array.push(2);
array.push(3);

show(array);

//2. concat
let array2 = new Array(4,5,6);

let array3 = array.concat(array2);
show(array3);

//3. join
show(array3.join('-'));

//4. pop

array3.pop();
show(array3);

//5.shift

array3.shift();
show(array3);

//6. unshift
array3.unshift(100);
show(array3);

//7. sort

let array4 = [6,5,2,3,7,4,8,1];
array4.sort();
show(array4.toString());

let array5 = ['fgf', 'ae', 'urtw', 'zs', 'st'];
array5.sort();
show(array5);

//8. reverse
array4.reverse();
show(array4.toString());

//9.slice
let array6 = [1,2,3,4,5,6];
show(array6.slice(2));
show(array6);

show(array6.slice(2,4));

//10. splice
array6.splice(2,0,100,200);
show(array6.toString());

array6.splice(2,3);
show(array6);

array6.splice(2,0,"some Text");
show(array6);

array6.splice(2,1, 3);
show(array6);

//11. delete
delete array6[0];
show(array6);

// array6.unshift(1);
// show(array6);
// array6[1] = "new Text";
// show(array6);

array6 = array6.slice(2);
show(array6);














