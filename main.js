var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));
    //create delete & edit button element
    deleteBtn=document.createElement('button');
    editBtn=document.createElement('button');
    //add classes to delete & edit button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-dark btn-sm float-right edit';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    //append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //get lis
    var items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
    Array.from(items).forEach(function(item2){
        var itemName=item2.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item2.style.display='block';
        }else{
            item2.style.display='none';
        }
    });
}

//Edit button
// Get all <li> elements
var listItems = document.querySelectorAll('#items li');
// Iterate through each <li> element and add an edit button
listItems.forEach(function(item) {
// Create a new button element
var editButton = document.createElement('button');
// Add the edit button class to the new button element
editButton.className = 'btn btn-dark btn-sm float-right edit';
// Set the button text (you can change this as needed)
editButton.textContent = 'Edit';
// Append the edit button to the list item
item.appendChild(editButton);
});

//Addinput box 
var text2=document.createElement('input');
text2.setAttribute('type','text');
text2.className='form-control mr-2';
text2.id='item2';
var itemlists=document.querySelector('#addForm');
itemlists.insertBefore(text2,itemlists.children[1]);


