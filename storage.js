var inputs=document.getElementById('my-form');
inputs.addEventListener('submit', function(e){
    e.preventDefault();
    var nameInput= document.getElementById('name').value;
    var emailInput= document.getElementById('email').value;
    var userdetails={
     name: nameInput,
     email: emailInput
    }
    localStorage.setItem('userdetails', JSON.stringify(userdetails));
    showuserdetails(userdetails);
})
function showuserdetails(userdetails){
    var user=document.getElementById('listofitems');
    user.innerHTML=user.innerHTML+'<li>'+userdetails.name+' - '+userdetails.email+'</li>';
}   