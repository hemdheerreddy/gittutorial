var inputs=document.getElementById('my-form');
inputs.addEventListener('submit', function(e){
    e.preventDefault();
    var nameInput= document.getElementById('name').value;
    var emailInput= document.getElementById('email').value;
    var userdetails={
     name: nameInput,
     email: emailInput
    }
    var userid=emailInput
    localStorage.setItem(userid, JSON.stringify(userdetails));
    showuserdetails(userdetails);
})
function showuserdetails(userdetails){
    var parent=document.getElementById('listofitems');
    var child=document.createElement('li');
    child.textContent=userdetails.name+' - '+userdetails.email;
    //delete button
    const deletebtn=document.createElement('input');
    deletebtn.type="button";
    deletebtn.value='Delete';
    deletebtn.onclick = () => {
        localStorage.removeItem(userdetails.email);
        parent.removeChild(child);
    }
    //edit button
    const editbtn=document.createElement('input');
    editbtn.type="button";
    editbtn.value='Edit';
    editbtn.onclick = () => {
        var nameInput= document.getElementById('name');
        var emailInput= document.getElementById('email');
        nameInput.value=userdetails.name;
        emailInput.value=userdetails.email;
        localStorage.removeItem(userdetails.email);
        parent.removeChild(child);
    }
    child.appendChild(deletebtn);
    child.appendChild(editbtn);
    parent.appendChild(child);
}  

