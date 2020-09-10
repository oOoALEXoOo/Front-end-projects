const TaskRepo = (function () {
    let task;
    
    function createRepo() {
        task = new Object('Task');
        return task;
    }

    return {
        getInstance: function () {
            if (!task) {
                task = createRepo();
            }
            return task;
        }
    }
})();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
    console.log('Same repo!');
}

const repo = (function () {
    let called = 0;
    
    function save(task) {
        called++;
        console.log(`Saving ${task}, called ${called} times`);
    }

    return {
        save: save
    }
})();

const taskHandler = (function () {
    return {
        save: function () {
            repo.save('From Task Handler');
        }
    }
})();

repo.save('From Main');
repo.save('From Main');
repo.save('From Main');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();