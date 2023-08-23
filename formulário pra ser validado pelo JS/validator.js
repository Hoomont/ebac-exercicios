const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const a = parseInt(form.querySelector('input[name="a"]').value);
  const b = parseInt(form.querySelector('input[name="b"]').value);

  if (b > a) {
    alert('Formulário válido!');
  } else {
    alert('Formulário inválido!');
  }
});