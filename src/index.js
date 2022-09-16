import './style.css';

const addProject = document.querySelector('.add-project-button');
const projectForm = document.querySelector("#project-form");
const cancelProjectBtn = document.querySelector('.project-cancel-btn');
const projectList = document.querySelector('.project-list');
const heading = document.querySelector('#heading')
const buttonProject = document.querySelectorAll('.button-project')
const taskList = document.querySelector('#task-list');
const addTaskBtn = document.querySelector('.add-task-button');
const removeTaskModal = document.querySelector('.close-task')
const modal = document.querySelector('.modal')
const taskModal = document.querySelector('.add-task-modal')

//in UI.js
class UI {
    showProjectForm() {
        ui.clearFormField()
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
            selected.task.forEach((task) => {
                let li = document.createElement('li');
                li.textContent = task.todo;
                taskList.appendChild(li)
            })
        }

    showAddTaskModal(item) {
        const taskFolder = document.querySelector('#task-folder')
        myProjects.forEach((item => {
            if(!taskFolder.innerHTML.includes(item.title)) {
                taskFolder.insertAdjacentHTML('beforeend', `
                <option value="${item.title}">${item.title}</option>
                `)
            }
        }))

        item.classList.remove('hidden')       
    }

    removeAddTaskModal(item) {
        item.classList.add('hidden')
    }

    // addTask() //use insert adjacent to ad
}

//in project.js
class Projects {
    constructor(title, id) {
        this.title = title;
        this.task = [
            {
                todo: 'Hello',
                completed: false
            },
            {
                todo: 'World',
                complated: true
            }
        ];
        this.id = id;
    }
  
    deleteProjectList(e) {
    const selected = e.target.parentElement.id;
    myProjects = myProjects.filter(item => item.id !== selected)
    ui.deleteProject(e)
  }
}

let myProjects = []

const ui = new UI();

//in DOM.js
const DOM = (() => {

    document.addEventListener('click', function(e) {
        const project = new Projects()
        project.deleteProjectList(e)
        ui.renderChosenProject(e, project)
    })

    addTaskBtn.addEventListener('click', () => {
        ui.showAddTaskModal(modal)
        ui.showAddTaskModal(taskModal)
    })

    removeTaskModal.addEventListener('click', () => {
        ui.removeAddTaskModal(modal)
        ui.removeAddTaskModal(taskModal)
    })

    projectForm.addEventListener('submit', function(e) {
        const project = new Projects()
        e.preventDefault();
        ui.addProject(project)
    })

    addProject.addEventListener('click', ui.showProjectForm);

    cancelProjectBtn.addEventListener('click', ui.removeProjectForm)

})();







