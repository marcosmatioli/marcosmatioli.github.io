function redirectToSecondPage(response) {
    if (response === 'yes') {
        // Redirecionar para a segunda página
        window.location.href = 'segundaPagina.html'; // Substitua 'segundaPagina.html' pelo nome real da sua segunda página
    }
}

function changeButtonText(buttonId) {
    if (buttonId === 'no') {
        document.getElementById(buttonId + 'Btn').innerText = 'Sim';
    } else if (buttonId === 'later') {
        document.getElementById(buttonId + 'Btn').innerText = 'Sim';
    }
}

function resetButtonText(buttonId) {
    if (buttonId === 'no') {
        document.getElementById(buttonId + 'Btn').innerText = 'Não';
    } else if (buttonId === 'later') {
        document.getElementById(buttonId + 'Btn').innerText = 'Agora não é o momento';
    }
}
function revealPoetry(poetryCard) {
    // Adiciona uma classe ao poetry-card para ativar a transição de rotação
    poetryCard.classList.add('rotate-card');

    // Agora a transição ocorrerá quando a classe rotate-card for adicionada

    // Encontra o botão dentro do poetry-card e esconde-o após clicar
    const revealButton = poetryCard.querySelector('.reveal-button');
    revealButton.style.display = 'none';
}
function revealPoetry(poetryCard) {
    // Adiciona uma classe para ativar a transição de rotação
    poetryCard.classList.add('clicked');

    // Encontra o botão dentro do poetry-card e esconde-o após clicar
    const revealButton = poetryCard.querySelector('.reveal-button');
    revealButton.classList.add('clicked');
}