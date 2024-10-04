const botaoGet = document.getElementById('get');
const aba = document.getElementById('aba');
const botaoFecharAba = document.getElementById('fechar');
const listaAlunos = document.getElementById('lista');

botaoGet.addEventListener('click', () => {
    aba.classList.remove('hidden');
    atualizarLista();
});

botaoFecharAba.addEventListener('click', () => {
    aba.classList.add('hidden');
});

const atualizarLista = async () => {
    const promise = await fetch('https://tech4me-alunos.fly.dev/alunos');
    const response = await promise.json();
    listaAlunos.innerHTML = '';
    response.forEach(aluno => {
        const divMaior = document.createElement('div');
        divMaior.classList.add('aluno');
        const div = document.createElement('div');
        const pNome = document.createElement('p');
        const pTurma = document.createElement('p');
        const pMatricula = document.createElement('p');
        const button = document.createElement('button');
        button.id = aluno.id;
        button.classList.add('deletar');

        button.addEventListener('click', () => {
            deletar(button.id);
        });

        button.innerText = 'Deletar';
        pNome.innerText = `Nome: ${aluno.nome}`;
        pTurma.innerText = `Turma: ${aluno.turma}`;
        pMatricula.innerText = `Matrícula: ${aluno.matricula}`;

        div.appendChild(pNome);
        div.appendChild(pTurma);
        div.appendChild(pMatricula);
        divMaior.appendChild(div);
        divMaior.appendChild(button);

        listaAlunos.appendChild(divMaior);
    });
}

const deletar = async (id) => {
    await fetch(`https://tech4me-alunos.fly.dev/alunos/${id}`, {
        method: 'DELETE'
    });
    atualizarLista();
}

