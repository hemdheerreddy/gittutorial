// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';
// var header2= document.getElementById('main');
// header2.style.fontWeight = 'bold';
// header2.style.color = 'green';
// var listItems = document.querySelectorAll("#items li");
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].style.fontWeight = "bold";
//     }
//     var thirdElement = document.querySelector("#items li:nth-child(3)");
//     thirdElement.style.backgroundColor = "green";

//Using Class Name
// var item=document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor='green';
// for(var i=0;i<item.length;i++){
//     item[i].style.fontWeight='bold';
// }

//Using Tag Name
// var item=document.getElementsByTagName('li');
// item[2].style.backgroundColor='green';
// for(var i=0;i<item.length;i++){
//     item[i].style.fontWeight='bold';
// }

// //Query Selector
// var seconditem=document.querySelector('#items li:nth-child(2)');
// seconditem.style.backgroundColor='green';
// var thirditem=document.querySelector('#items li:nth-child(3)');
// thirditem.style.display='none';

// //Query Selector All
// var item=document.querySelectorAll('.items:nth-child(2)');
// item.style.color='green';
// var odditem=document.querySelectorAll('.items:nth-child(odd)');
// odditem.forEach(function(item) {
//     item.style.backgroundColor = 'green';
// });

// TRAVERSING THE DOM
var itemList=document.querySelector('#items');
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='green';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='green';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='green';

// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello';

// //lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElement
//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText=document.createTextNode('HEllo word');
//add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
console.log(newDiv);

var newLi=document.createElement('li');
newLi.className='list-group-item';
newLi.appendChild(document.createTextNode('HEllo word'));
console.log(newLi);
var itemlist=document.getElementById('items');
itemlist.insertBefore(newLi,itemlist.children[0]);
