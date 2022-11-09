// //Traversing the DOM //

// var itemList = document.querySelector('#items');

// console.log(itemList);



// 1.parentNode

// // console.log(itemList.parentNode);

// // itemList.parentNode.style.backgroundColor = '#f4f4f4';

// // console.log(itemList.parentNode.parentNode.parentNode);



// 2.parentElelement

// // console.log(itemList.parentElement);

// // itemList.parentElement.style.backgroundColor = '#f4f4f4';

// // console.log(itemList.parentElement.parentElement.parentElement);

// //parentElement and parentNode we get samething , we get same backgrounf, console.log, most od the time they are interchangeble



// 3.childNodes

// // console.log(itemList.childNodes);

// //it not recommended this method is pain in ass it include along with list items,text , line breaks insted of this use ChildNodes

// // console.log(itemList.childrenNodes);

// //its just list item(its just elements)

// //Now if we want to access a specific child



// 4.Children

// // console.log(itemList.children)

// // console.log(itemList.children[1]);

// //if u want to change the color etc at same single element

// // itemList.children[1].style.backgroundColor ='yellow';



// 5.FirstChild

// // console.log(itemList.firstChild);

// //firstChild gonna give us text //firstChild is useless

// //another better method than firstChild



// 6.firstElementChild

// // console.log(itemList.firstElementChild); //it gives us complete li

// // itemList.firstElementChild.textContent='Hello1';



// 7.lastChild

// // console.log(itemList.lastChild);

// //lastChild gonna give us text //lastChild is useless

// //another better method than lastChild



// 8.astElementChild

// // console.log(itemList.lastElementChild); //it gives us complete li

// // itemList.lastElementChild.textContent='Hello6'; 



// 9.nextSibling

// // console.log(itemList.nextSibling);



// 10.nextElementSibling

// // console.log(itemList.nextElementSibling);

// //just like firstchild , list child, sibling child also have same methods



// 11.PreviousSibling

// // console.log(itemList.previousSibling);



// 12.previouslementSibling

// // console.log(itemList.previousElementSibling);

// // itemList.previousElementSibling.style.color="red";



// 13.CreateElement



// //Create a div



// var newDiv = document.createElement('div');

// // console.log(newDiv); //it created a new div

// //we can add className to this div

// // newDiv.className= 'hello';

// // console.log(newDiv);

// //Add id to div

// newDiv.id='hello1';

// console.log(newDiv);



// 14.SetAttribute Add attribute like text



// newDiv.setAttribute('title','Hello Div');

// console.log(newDiv);



// 15.Create text node



// var newDivText = document.createTextNode('Hello World');



// 16.appendChild()

// //Add text to div

// newDiv.appendChild(newDivText);  //we are doing with js but we want to change in real page so we select html container and h1 and implemented on real page



// var container= document.querySelector('header .container');

// var h1 = document.querySelector('header h1');



// console.log(newDiv);

// container.insertBefore(newDiv,h1);

// //insertBefre() will have 2 parameters passing.



// //if u want to change fontsize

// 17.InsertBefore()

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,hi);

