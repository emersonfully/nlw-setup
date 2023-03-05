const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add)
form.addEventListener('change', save)

// Adicioa os dados
function add() {
    const today = new Date().toLocaleDateString().slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia Já registrado")
        return
    }

    nlwSetup.addDay(today)
}

// Salva os dados localmente
function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

//busca informações do localStorage
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data);
nlwSetup.load()