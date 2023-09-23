var inputs=document.getElementById('my-form');
inputs.addEventListener('submit', function(e){
    e.preventDefault();
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    localStorage.setItem('username', nameInput);
    localStorage.setItem('userEmail', emailInput);
    // form.reset();
})