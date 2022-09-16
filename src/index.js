import './style.css';

const addProject = document.querySelector('.add-project-button');
const projectForm = document.querySelector("#project-form");
const cancelProjectBtn = document.querySelector('.project-cancel-btn');
const projectList = document.querySelector('.project-list');
const heading = document.querySelector('#heading')
const buttonProject = document.querySelectorAll('.button-project')
const taskList = document.querySelector('#task-list');
const addTaskBtn = document.querySelector('.add-task-button');
const removeTaskModal = document.querySelector('.close-task');
const modal = document.querySelector('.modal');
const taskModal = document.querySelector('.add-task-modal');
const taskForm = document.querySelector('.add-task-form')

//in UI.js
class UI {
    showProjectForm() {
        projectForm.classList.remove('hidden');
    }

    removeProjectForm() {
        ui.clearFormField()
        projectForm.classList.add('hidden');
    }

    addProject(item) {
        item.title = document.getElementById('project-name').value;
            item.id = Date.now().toString()
            projectList.insertAdjacentHTML('beforeend' , 
            `<button class="button-project" id=${item.id}>
            <i class="fa-solid fa-tasks"></i>${item.title}
            <i class="fa-solid fa-xmark delete-project" style="color:red; float: right"></i></button>`)
            ui.removeProjectForm()
            myProjects.push(item)
    }

    clearFormField() {
        document.getElementById('project-name').value = '';
    }

    deleteProject(e) {
        if(e.target.classList.contains('delete-project')) {
            if (confirm('Are you sure to remove this project?')) {
                e.target.parentElement.remove()
                heading.innerHTML = '';
                taskList.innerHTML = ''
            }
        }
    }

    renderChosenProject(e, selected) {
        if(buttonProject) {
            selected = myProjects.find(item => item.id === e.target.id)
            heading.innerText = selected.title;
            taskList.innerHTML = ''
            ui.renderTask(selected)
        }
    }

    renderTask(selected) {
            selected.title = heading.innerText
            selected.task.forEach((task) => {
                let li = document.createElement('li');
                let des = document.createElement('div')
                des.textContent = task.description;
                li.textContent = task.todo;
                li.appendChild(des)
                taskList.appendChild(li)    
                des.classList.add('hidden')
            })
        }


        //render the project again if project is deleted
    renderFolderInForm() {
        const taskFolder = document.querySelector('#task-folder')
        taskFolder.innerHTML = `<option value="inbox">Inbox</option>`
        myProjects.forEach((item => {
            if(!taskFolder.innerHTML.includes(item.title)) {
                taskFolder.insertAdjacentHTML('beforeend', `
                <option value="${item.title}">${item.title}</option>
                `)
            }
        }))
    }

    showAddTaskModal(item) {
        item.classList.remove('hidden')   
        this.renderFolderInForm()
    }

    removeAddTaskModal(item) {
        item.classList.add('hidden')
    }

    addnewTask(task) {
        let li = document.createElement('li');
        let des = document.createElement('div')
        des.classList.add('description-detail')
        des.textContent = task.description;
        li.textContent = task.todo;
        li.appendChild(des)
        taskList.appendChild(li) 
    }

    clearAddForm() {
        taskForm.reset()
    }
}

//in project.js
class Projects {
    constructor(title, id) {
        this.title = title;
        this.task = [
            // {
            //     todo: 'Hello',
            //     description: 'bla bla',
            //     completed: false
            // }
        ];
        this.id = id;
    }
  
    deleteProjectList(e) {
    const selected = e.target.parentElement.id;
    myProjects = myProjects.filter(item => item.id !== selected)
    ui.deleteProject(e)
  }
}

class Tasks {
    constructor () {
        this.task = []
    }

    addTask(project, task) {
        const taskName = document.querySelector('#task-name').value;
        const taskDes = document.querySelector('#task-description').value;
        const folder = document.querySelector('#task-folder').value;
        task.todo = taskName;
        task.description = taskDes;
        task.completed = false;
        project = myProjects.find(item => item.title === folder) //return the name of project
        project.task.push(task)
        if(heading.textContent === folder) {
            ui.addnewTask(task)
        }
    } 
}


let myProjects = []

const ui = new UI();

//in DOM.js
const DOM = (() => {

    document.addEventListener('click', function(e) {
        const project = new Projects()
        project.deleteProjectList(e)
    })

    addTaskBtn.addEventListener('click', () => {
        ui.clearAddForm()
        ui.showAddTaskModal(modal)
        ui.showAddTaskModal(taskModal)
    })

    removeTaskModal.addEventListener('click', () => {
        ui.removeAddTaskModal(modal)
    })

    projectList.addEventListener('click', function(e) {
        const project = new Projects()
        ui.renderChosenProject(e, project)
    })

    taskForm.addEventListener('submit', function(e) {
        const project = new Projects();
        const task = new Tasks();
        e.preventDefault()
        task.addTask(project, task)
        ui.removeAddTaskModal(modal);
        ui.clearAddForm()
    })
    
    projectForm.addEventListener('submit', function(e) {
        const project = new Projects()
        e.preventDefault();
        ui.addProject(project)
    })

    addProject.addEventListener('click', ui.showProjectForm);

    cancelProjectBtn.addEventListener('click', ui.removeProjectForm)

})();







