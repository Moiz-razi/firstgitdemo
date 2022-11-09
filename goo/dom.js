// console.dir(document);
// //it shows all different kind of properties , methods attached to Document
// //Examine the Document Object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //selecting methods in DOM // dont use it not recommended
// //document.all[10].textContent='Hello';

// // to get all forms
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// getting elements by ID
// console.log(document.getElementById('header-title'));
// {/* <h1 id="header-title">Item Lister <span style="display:none">123</span></h1> */}
//or you do also like this
// var headerTitle = document.getElementById('header-title');

// console.log(headerTitle);
//we can do certain things by using HeaderTitle 
// headerTitle.textContent='Hello';
// headerTitle.innerText="howray";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// How you can change inner HTML
// headerTitle.innerHTML ='<h3>Hello</h3>';
// putting border on bottom of header
// headerTitle.style.borderBottom='solid 3px #000';
// header.style.borderBottom='solid 3px #000';

//putting border on actual header
// var header = document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';
// {/* <h2 class="title">Add Items</h2> */}
// let items=document.getElementsByClassName('list-group-item');

// console.log(items);

// items[1].textContent='Hello 2';

// items[1].style.fontWeight="bold";

// items[1].style.backgroundColor='green';


