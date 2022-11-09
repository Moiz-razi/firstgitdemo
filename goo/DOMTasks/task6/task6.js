
// //QUery selector//
// //it works preety much just like J-query, the only big diffrence is you only use for 1 item and if u want to use more than one item than You can use query-selector All.its only grab first one, if we try to grab Class title, if there is more than 1 class, it will grab 1st one//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// //lets grab input

// var input =document.querySelector('input');
// input.value = 'Hello World';
// // in html there are 2 inputs but it will grab 1st one only bydefault//
// //by query selector we can use any CSS selector

// var submit= document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// // How to get last item
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color= 'blue';
// // how to get 2nd item
// var secondItem = document.querySelector('.list-group-item:nth-child(2)'););
// secondItem.style.color= 'coral';

// //QUERYSELECTORALL//
// //QUERYSELECTOR works like get query selector by class name,by tag name its gonna grab more than 1 thing//
// //now lets grab both titles
// var titles = document.querySelectorAll('title');
// console.log(titles);

// //so that gives us Node list similar to collection but we can run array function at Node list
// titles[0].textContent ="Hello";

// //
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
//  for (var i=0; i< odd.length; i++){
// odd[i].style.backgroundColor= '#f4f4f4';
// even[i].style.backgroundColor = '#ccc';
// }

// //1)Make the 2nd item have green background color
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor= 'green';

// // 2)Make the 3rd item invisible
// var ThirdItem = document.querySelector('.list-group-item:nth-child(3)');
// ThirdItem.style.color= 'coral';

// // 1) Using QuerySelectorALL change the font color to green for 2nd item in the item list
// var items = document.querySelectorAll('itemlist')
// secondItem.style.backgroundColor= 'green';
// // 2)Choose all the odd elements and make their background green using QuerySelectorALL﻿
// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i=0; i< odd.length; i++){
//      odd[i].style.backgroundColor= 'green';
//      }


// //3)What is the difference between queryselector and queryselectorall?
// querySelector() and querySelectorAll() are two jQuery functions which helps the HTML elements to be passed as a parameter by using CSS selectors (‘id’, ‘class’) can be selected.
// querySelector() Method: The querySelector() method returns the first element within the document which matches a specified CSS selector(s). If multiple elements occurs, then it returns the result for only the first matching element.

