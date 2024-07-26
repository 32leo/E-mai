// VALIDAÇÃO DE CPF
// Adiciona escutador á página
// ------------------------------------------------------------------------------------------------------------

document.getElementById("cpfForm").addEventListener('submit', function (event) {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const msg = document.getElementById('message');
    // mostrar mensagem
    // ------------------------------------------------------------------------------------------------------------
    if (validarCPF(cpf)) {
        msg.textContent = "O CPF é valido!";
        msg.style.color = 'green';
    } else {
        msg.textContent = "O CPF e invalido!";
        msg.style.color = 'red';

    }


}


);
// função de calculo de validação do CPF
// ----------------------------------------------------------------------------------------------------------
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); //remove caracteres não numérico

    // verificar se o valor contem 11 digitos e se todos os dígitos ão iguais
    // --------------------------------------------------------------------------------------------------------
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    let soma = 0;
    let resto = 0;
    //  VALIDAÇÃO DO PRIMEIRO DIGITO VERIFICADOR 
    // ------------------------------------------------------------------------------------------------------------
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;

    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
    soma = 0

    // Validar 11 díguito do CPF 2° díguito verificado
    // ---------------------------------------------------------------------------------------------------------
    for (let i = i; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    soma = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0

    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;


}