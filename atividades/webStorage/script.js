function saveDataLocal(e) {
    e.preventDefault();

    localStorage.setItem('name', document.getElementsByName("name")[0].value);
    localStorage.setItem('years', document.getElementsByName("years")[0].value);
}

function getDataLocal() {
    document.getElementById("dataLocal").innerHTML =
    `Informações salvas com o LocalStorage: 
    ${localStorage.getItem('name')}, ${localStorage.getItem('years')}`
}

function removeDataLocal() {
    localStorage.removeItem('name', document.getElementsByName("name")[0].value);
    localStorage.removeItem('years', document.getElementsByName("years")[0].value);
}

function saveDataSession(e) {
    e.preventDefault();
    
    localStorage.setItem('state', document.getElementsByName("state")[0].value);
    localStorage.setItem('city', document.getElementsByName("city")[0].value);
}

function getDataSession() {
    document.getElementById("dataSession").innerHTML =
    `Informações salvas com o SessionStorage: 
    ${localStorage.getItem('state')}, ${localStorage.getItem('city')}`
}

function removeDataSession() {
    localStorage.removeItem('state', document.getElementsByName("state")[0].value);
    localStorage.removeItem('city', document.getElementsByName("city")[0].value);
}