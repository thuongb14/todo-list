import './style.css';

//global dom
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

    //add project to ui
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

    //delete project in ui
    deleteProject(e) {
        if(e.target.classList.contains('delete-project')) {
            if (confirm('Are you sure to remove this project?')) {
                e.target.parentElement.remove()
                heading.innerHTML = '';
                taskList.innerHTML = ''
            }
        }
    }

    //render the selected project to title
    renderChosenProject(e, selected) {
        if(buttonProject) {
            selected = myProjects.find(item => item.id === e.target.id)
            heading.innerText = selected.title;
            taskList.innerHTML = ''
            ui.renderTask(selected)
        }
    }

    //render task of chosen project to task list ui
    renderTask(selected) {
            selected.title = heading.innerText
            selected.task.forEach((task) => {
                let li = document.createElement('li');
                let des = document.createElement('div')
                des.textContent = task.description;
                li.innerHTML = `<i class="fa-regular fa-circle"></i>${task.todo}`;
                li.appendChild(des)
                taskList.appendChild(li)    
                des.classList.add('hidden')
            })
        }

    //render the project list in form again if project is deleted
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

    //pop up and remove addtaskmodal
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
        li.innerHTML = `<i class="fa-regular fa-circle"></i>${task.todo}`;
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
        this.title = title,
        this.task = [
            // {
            //     todo: 'Hello',
            //     description: 'bla bla',
            //     completed: false
            // }
        ],
        this.id = id
    }
  
    deleteProjectList(e) {
    const selected = e.target.parentElement.id;
    myProjects = myProjects.filter(item => item.id !== selected)
    ui.deleteProject(e)
  }
}

class Tasks {
    constructor (todo, description, completed) {
        this.todo = todo,
        this.description = description,
        this.completed = completed
    }

    addTask(project, task) {
        const taskName = document.querySelector('#task-name').value;
        const taskDes = document.querySelector('#task-description').value;
        const folder = document.querySelector('#task-folder').value;
        task.todo = taskName;
        task.description = taskDes;
        task.completed = true;
        project = myProjects.find(item => item.title === folder) //return the name of project
        project.task.push(task)
        if(heading.textContent === folder) {
            ui.addnewTask(task)
        }
    } 

    //last check work
    toggleCompleted(selected, e) {
        selected = myProjects.find(item => item.title === heading.textContent);
        let selectedTask = selected.task
        selectedTask.forEach((item) => {
            if(e.target.classList.contains('fa-circle') && item.todo === e.target.parentElement.textContent) {
                if(item.completed === true) {
                    item.completed = false;
                } else if(item.completed === false) {
                    item.completed = true;
                }
                console.log(myProjects)
            }
        })
    }
}


let myProjects = []

const ui = new UI();

//in DOM.js
const DOM = (() => {

    //control click of delete project
    document.addEventListener('click', function(e) {
        const project = new Projects()
        const task = new Tasks()
        project.deleteProjectList(e)
        task.toggleCompleted(task, e)
    })

    //control add task button
    addTaskBtn.addEventListener('click', () => {
        ui.clearAddForm()
        ui.showAddTaskModal(modal)
        ui.showAddTaskModal(taskModal)
    })

    removeTaskModal.addEventListener('click', () => {
        ui.removeAddTaskModal(modal)
    })

    //control click of project and render it
    projectList.addEventListener('click', function(e) {
        const project = new Projects()
        ui.renderChosenProject(e, project)
    })

    //control task form
    taskForm.addEventListener('submit', function(e) {
        const project = new Projects();
        const task = new Tasks();
        e.preventDefault()
        task.addTask(project, task)
        ui.removeAddTaskModal(modal);
        ui.clearAddForm()
    })
    
    //control the project
    projectForm.addEventListener('submit', function(e) {
        const project = new Projects()
        e.preventDefault();
        ui.addProject(project)
    })

    addProject.addEventListener('click', ui.showProjectForm);

    cancelProjectBtn.addEventListener('click', ui.removeProjectForm)

})();







