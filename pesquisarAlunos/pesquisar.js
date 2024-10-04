const botaoAluno = document.getElementById('button-aluno');
const abaAluno = document.getElementById('aba-aluno');
const listaAluno = document.getElementById('lista-aluno');
const fecharAbaAluno = document.getElementById('fechar-aluno');
const inputNome = document.getElementById('inputNome');
const botaoPesquisarNome = document.getElementById('pesquisar-aluno-nome');
const botaoTurma = document.getElementById('button-turma');
const abaTurma = document.getElementById('aba-turma');
const listaTurma = document.getElementById('lista-turma');
const fecharAbaTurma = document.getElementById('fechar-turma');
const inputTurma = document.getElementById('inputTurma');
const botaoPesquisarTurma = document.getElementById('pesquisar-aluno-turma');

const alunos = [];

botaoAluno.addEventListener('click', () => {
    abaAluno.classList.remove('hidden');
    pegarAlunos();
});

fecharAbaAluno.addEventListener('click', () => {
    abaAluno.classList.add('hidden');
    listaAluno.innerHTML = '';
    inputNome.value = '';
});

botaoTurma.addEventListener('click', () => {
    abaTurma.classList.remove('hidden');
    pegarAlunos();
});

fecharAbaTurma.addEventListener('click', () => {
    abaTurma.classList.add('hidden');
    listaTurma.innerHTML = '';
    inputTurma.value = '';
});

const pegarAlunos = async () => {
    alunos.length = 0;
    const promise = await fetch('https://tech4me-alunos.fly.dev/alunos');
    const response = await promise.json();
    response.forEach(aluno => {
        alunos.push(aluno);
    });

    console.log(alunos);
}

botaoPesquisarNome.addEventListener('click', () => {
    const nomePesquisado = inputNome.value;

    const listaPesquisada = alunos.filter(aluno => aluno.nome == nomePesquisado);

    if(listaPesquisada.length == 0){
        listaAluno.innerHTML = '';
        inputNome.value = '';
        alert('Aluno não encontrado!');
    } else{
        listaAluno.innerHTML = '';
        listaPesquisada.forEach(aluno => {
            const divMaior = document.createElement('div');
            divMaior.classList.add('aluno');
            const div = document.createElement('div');
            const pNome = document.createElement('p');
            const pTurma = document.createElement('p');
            const pMatricula = document.createElement('p');
    
            pNome.innerText = `Nome: ${aluno.nome}`;
            pTurma.innerText = `Turma: ${aluno.turma}`;
            pMatricula.innerText = `Matrícula: ${aluno.matricula}`;
    
            div.appendChild(pNome);
            div.appendChild(pTurma);
            div.appendChild(pMatricula);
            divMaior.appendChild(div);
        
            listaAluno.appendChild(divMaior);
        })

        inputNome.value = '';
    }
}) 

botaoPesquisarTurma.addEventListener('click', () => {
    const turmaPesquisada = inputTurma.value;

    const listaPesquisada = alunos.filter(aluno => aluno.turma == turmaPesquisada);

    if(listaPesquisada.length == 0){
        listaTurma.innerHTML = '';
        inputTurma.value = '';
        alert('Turma não encontrada!');
    } else{
        listaTurma.innerHTML = '';
        listaPesquisada.forEach(aluno => {
            const divMaior = document.createElement('div');
            divMaior.classList.add('aluno');
            const div = document.createElement('div');
            const pNome = document.createElement('p');
            const pTurma = document.createElement('p');
            const pMatricula = document.createElement('p');
    
            pNome.innerText = `Nome: ${aluno.nome}`;
            pTurma.innerText = `Turma: ${aluno.turma}`;
            pMatricula.innerText = `Matrícula: ${aluno.matricula}`;
    
            div.appendChild(pNome);
            div.appendChild(pTurma);
            div.appendChild(pMatricula);
            divMaior.appendChild(div);
        
            listaTurma.appendChild(divMaior);
        })

        inputTurma.value = '';
    }
}) 

