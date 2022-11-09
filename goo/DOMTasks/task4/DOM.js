
// //Get Elements by ClassName
console.dir(document);
let items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor="yellow";

// Gives Error when u try to change BG of all items at one time
// items[1].style.backgroundColor="#f4f4f4";
// Below is correct way to change BG at one time using for loop
for(var i=0;i<items.length; i++){
    items[i].style.backgroundColor ='#f4f4f4';
}

// items[2].style.backgroundColor='green';

for(var i=0; i< items.length;i++){
     items[i].style.fontWeight='bold';
}

// let li=document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent='hello';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='Yellow';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }



