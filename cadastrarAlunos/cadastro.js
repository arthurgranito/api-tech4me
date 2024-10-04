const form = document.getElementById('form');
const inputNome = document.getElementById('nome');
const inputMatricula = document.getElementById('matricula');
const inputTurma = document.getElementById('turma');

class Aluno {
    constructor(nome, turma, matricula){
        this.nome = nome;
        this.turma = turma;
        this.matricula = matricula;
    }
}

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    if(inputNome.value == '' || inputTurma.value == '' || inputMatricula.value == ''){
        alert("Preencha todos os campos!")
    } else{
        const aluno = new Aluno(inputNome.value, inputTurma.value, inputMatricula.value);
        await fetch('https://tech4me-alunos.fly.dev/alunos', {
            method: 'POST',
            body: JSON.stringify(aluno),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        form.reset();
    }
})