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
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';
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
var item=document.getElementsByTagName('li');
item[2].style.backgroundColor='green';
for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}



