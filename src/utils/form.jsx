
export const handleInputChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
};
export const handleInputChangeCpf = (e) => {
    const cpf = e.target.value.replace(/\D/g, '');
    if (cpf.length == 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }
    e.target.value = cpf
};
export const handleInputChangeNumber = (e) => {
    const number = e.target.value.replace(/\D/g, '');
    if (number.length == 16) {
        number = number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
    }else if(number.length == 15){
        number = number.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3')
    }
    e.target.value = number
};
export const handleInputChangeValidity = (e) => {
    const validity = e.target.value.replace(/\D/g, '');
    if (validity.length == 6) {
        validity = validity.replace(/(\d{2})(\d{4})/, '$1/$2')
    }
    e.target.value = validity
};

export const handleInputChangeCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length == 8)  {
        cep = cep.slice(0, 5) + '-' + cep.slice(5);
    }
    e.target.value = cep
}

export const handleInputChangeCell = (e) => {
    const cell = e.target.value.replace(/\D/g, '');
    if (cell.length == 11) {
        cell = cell.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
    e.target.value = cell
};

export const validarCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }
    const soma = 0;
    for (const i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    const primeiroDigito = 11 - (soma % 11);

    primeiroDigito = primeiroDigito > 9 ? 0 : primeiroDigito;

    soma = 0;
    for (const i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    const segundoDigito = 11 - (soma % 11);

    segundoDigito = segundoDigito > 9 ? 0 : segundoDigito;

    if (parseInt(cpf.charAt(9)) === primeiroDigito && parseInt(cpf.charAt(10)) === segundoDigito) {
        return true;
    } else {
        return false;
    }
}

export const validarCartao = (number) =>{
    number = number.replace(/\D/g, '');
    if(number[0] == 3 && number.length == 15){
        return true
    }else if((number[0] >3 && number[0] < 7)&& number.length ==16){
        return true
    }else{
        return false
    }
}
