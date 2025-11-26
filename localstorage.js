// Al inicio del script, después de definir userData
if (localStorage.getItem('finanzapp_data')) {
    userData = JSON.parse(localStorage.getItem('finanzapp_data'));
}

// Función para guardar datos
function saveData() {
    localStorage.setItem('finanzapp_data', JSON.stringify(userData));
}

// Llamar saveData() después de cada modificación
// Ejemplo en addTransaction():
userData.transactions.push(newTransaction);
saveData(); // <- Agregar esta línea