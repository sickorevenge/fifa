document.addEventListener('DOMContentLoaded', function () {
    const authForm = document.getElementById('authForm');
    const errorMessage = document.getElementById('error-message');

    authForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const login = document.getElementById('login').value;
        const dateOfBirth = document.getElementById('date_of_birth').value;
        const gender = document.getElementById('gender').value;

         if (login && dateOfBirth && gender) {
           
                localStorage.setItem('userLogin', login);
                localStorage.setItem('userDateOfBirth', dateOfBirth);
                localStorage.setItem('userGender', gender);
                  window.location.href = 'main.html';
            } else {
                 errorMessage.style.display = 'block';
                console.error('Неверный логин или дата рождения.');
            }
    });
});