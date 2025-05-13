const Task = require('./models/Task');

const seedTasks = async () => {
    const count = await Task.countDocuments();
    if (count === 0) {
        const tasks = [
            { title: 'Estudar NoSQL para o trabalho', completed: true },
            { title: 'Fazer apresentação do projeto', completed: true },
            { title: 'Desenvolver API baseada em noSQL', completed : true },
            { title: 'Testar API com Postman' },
            { title: 'Mostrar banco de dados baseado em json' }
        ];
        await Task.insertMany(tasks);
        console.log(' Banco populado com tarefas mock.');
    } else {
        console.log(' Tarefas já existentes. Sem inserção.');
    }
};

module.exports = seedTasks;
