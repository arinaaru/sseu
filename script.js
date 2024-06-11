document.addEventListener('DOMContentLoaded', function() {
    const formElements = document.querySelectorAll('form');
    formElements.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Форма отправлена!');
        });
    });
});