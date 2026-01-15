let ListaDeAlunos = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Beatriz'];

for (let i=0; i<ListaDeAlunos.length; i++) {
    if (ListaDeAlunos[i] === 'Pedro'){
        ListaDeAlunos.splice(i, 1);
        console.log('Aluno Pedro removido da lista.');
        break;
    }
    
}
console.log('Lista atualizada de alunos:', ListaDeAlunos);