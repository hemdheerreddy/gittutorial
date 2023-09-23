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
     form.reset();
})