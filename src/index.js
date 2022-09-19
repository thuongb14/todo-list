import './style.css';

//global dom
const addProject = document.querySelector('.add-project-button');
const projectForm = document.querySelector("#project-form");
const cancelProjectBtn = document.querySelector('.project-cancel-btn');
const projectList = document.querySelector('.project-list');
const heading = document.querySelector('#heading')
const taskList = document.querySelector('#task-list');
const addTaskBtn = document.querySelector('.add-task-button');
const removeTaskModal = document.querySelector('.close-task');
const modal = document.querySelector('.modal');
const taskModal = document.querySelector('.add-task-modal');
const taskForm = document.querySelector('.add-task-form')
const inbox = document.querySelector('.inbox')

class UI {
    showProjectForm() {
        projectForm.classList.remove('hidden');
    };

    removeProjectForm() {
        ui.clearFormField()
        projectForm.classList.add('hidden');
    };

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
            ui.renderFolderInForm
    };

    clearFormField() {
        document.getElementById('project-name').value = '';
    };

    //delete project in ui
    deleteProject(e) {
        if(e.target.classList.contains('delete-project')) {
            if (confirm('Are you sure to remove this project?')) {
                e.target.parentElement.remove()
                heading.innerHTML = '';
                taskList.innerHTML = ''
            }
        }
    };

    //render the selected project to title
    renderChosenProject(e, selected) {
        selected = myProjects.find(item => item.id === e.target.id)
        console.log(selected)
        heading.innerText = selected.title;
        taskList.innerHTML = ''
        ui.renderTask(selected)
    };

    //render task of chosen project to task list ui
    renderTask(selected) {
            selected.title = heading.innerText
            selected.task.forEach((task) => {
                let li = document.createElement('li');
                if(task.completed == false) {
                    li.innerHTML = 
                    `<div class="task-detail">
                        <div class="task">
                            <i class="task-status fa-regular fa-circle"></i>
                            <div class="task-name">${task.todo}</div>
                        </div>
                        <div class="icon-control">
                            <i id="${task.todo}" class="fa-solid fa-caret-left"></i>
                            <i id="${task.todo}" class="remove-task fa-solid fa-xmark"></i>
                        </div>
                        </div>
            
                        <div class="description-detail hidden">
                            <div class="description">${task.description}</div>
                            <div class="date">${task.date}
                        </div>
                    </div>`    
                } else if(task.completed == true) {
                    li.innerHTML = 
                    `<div class="task-detail">
                        <div class="task">
                            <i class="task-status fa-regular fa-circle-check"></i>
                            <div class="task-name checked">${task.todo}</div>
                        </div>
                        <div class="icon-control">
                            <i id="${task.todo}" class="fa-solid fa-caret-left"></i>
                            <i id="${task.todo}" class="remove-task fa-solid fa-xmark"></i>
                        </div>
                        </div>
            
                        <div class="description-detail hidden">
                            <div class="description">${task.description}</div>
                            <div class="date">${task.date}
                        </div>
                    </div>`    
                }
                taskList.appendChild(li)    
            })
            
        };

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
    };

    //pop up and remove addtaskmodal
    showAddTaskModal(item) {
        item.classList.remove('hidden')   
        this.renderFolderInForm()
    };

    removeAddTaskModal(item) {
        item.classList.add('hidden')
    };

    addnewTask(task) {
        let li = document.createElement('li');
        li.setAttribute('class', '')
        li.innerHTML = 
        `<div class="task-detail">
            <div class="task">
                <i class="task-status fa-regular fa-circle"></i>
                <div class="task-name">${task.todo}</div>
            </div>
            <div class="icon-control">
                <i id="${task.todo}" class="fa-solid fa-caret-left"></i>
                <i id="${task.todo}" class="remove-task fa-solid fa-xmark"></i>
            </div>
            </div>

            <div id="${task.todo}" class="description-detail hidden">
                <div class="description">${task.description}</div>
                <div class="date">Due date: ${task.date}
            </div>
        </div>`    
        taskList.appendChild(li) 
    };

    clearAddForm() {
        taskForm.reset()
    };

    toggleCompleted(selected, e) {
        if (e.target.classList.contains('task-status')) {
            selected = myProjects.find(item => item.title === heading.textContent);
            let selectedTask = selected.task
            selectedTask.forEach((item) => {
                if (item.completed === true && item.todo === e.target.nextElementSibling.textContent) {
                        item.completed = false;
                        e.target.setAttribute('class', 'task-status fa-regular fa-circle');
                        e.target.nextElementSibling.setAttribute('class', '')
                    } else if (item.completed === false && item.todo === e.target.nextElementSibling.textContent) {
                        item.completed = true;
                        e.target.setAttribute('class', 'task-status fa-regular fa-circle-check')
                        e.target.nextElementSibling.setAttribute('class', 'checked')
                    }
                })
        }

    };

    showTaskDropDown(selected,e) {
        if(e.target.classList.contains('fa-caret-left')) {
            let project = myProjects.find(item => item.title === heading.textContent);
            selected = project.task;
            selected.forEach((task) => {
                if(task.todo === e.target.id) {
                    e.target.classList = 'fa-solid fa-caret-down'
                    let desDiv = e.target.parentElement.parentElement.nextElementSibling;
                    desDiv.classList.remove('hidden')
                }
            })
        } else if(e.target.classList.contains('fa-caret-down')) {
            let project = myProjects.find(item => item.title === heading.textContent);
            selected = project.task;
            selected.forEach((task) => {
                if(task.todo === e.target.id) {
                    e.target.classList = 'fa-solid fa-caret-left'
                    let desDiv = e.target.parentElement.parentElement.nextElementSibling;
                    desDiv.classList.add('hidden')
                }
            })
        }
    }

    showInboxTask() {
        heading.textContent = 'Inbox';
        taskList.innerHTML = ''
        myProjects.forEach((project)=> {
            let task = project.task;
            console.log(task)
            task.forEach((item)=>{
                if(!item.completed) {
                    let li = document.createElement('li');
                        li.setAttribute('class', '')
                        li.innerHTML = 
                        `<div class="task-detail">
                            <div class="task">
                                <i class="task-status fa-regular fa-circle"></i>
                                <div class="task-name">${item.todo}</div>
                            </div>
                            <div class="icon-control">
                                <i id="${item.todo}" class="fa-solid fa-caret-left"></i>
                                <i id="${itemtodo}" class="remove-task fa-solid fa-xmark"></i>
                            </div>
                            </div>

                            <div id="${item.todo}" class="description-detail hidden">
                                <div class="description">${item.description}</div>
                                <div class="date">Due date: ${item.date}
                            </div>
                        </div>`    
                    taskList.appendChild(li) 
                }
            })

        })
    }

}

class Projects {
    constructor(id){
        this.task = [],
        this.id = id
    };
  
    deleteProjectList(e) {
    const selected = e.target.parentElement.id;
    myProjects = myProjects.filter(item => item.id !== selected)
    ui.deleteProject(e)
  };
}

class Tasks {
    constructor (todo, description, completed, date) {
        this.todo = todo,
        this.description = description,
        this.completed = completed
        this.date = date
    };

    //add task in logic
    addTask(project, task) {
        const taskName = document.querySelector('#task-name').value;
        const taskDes = document.querySelector('#task-description').value;
        const taskDate = document.querySelector('#task-date').value
        const folder = document.querySelector('#task-folder').value;
        task.todo = taskName;
        task.description = taskDes;
        task.completed = false;
        task.date = taskDate
        project = myProjects.find(item => item.title === folder) //return the name of project
        project.task.push(task)

        //if task.completed = false => inbox.push(task).
        //if click on inbox => heading.textContent = inbox
        //heading.textContent === inbox => li = content in inbox array
        if(heading.textContent === folder) {
            ui.addnewTask(task)
        }
    };
    
    removeTask(selected, e) {
        if (e.target.classList.contains('remove-task')) {
            let project = myProjects.find(item => item.title === heading.textContent);
            selected = project.task;
            selected.forEach((task) => {
                if(task.todo === e.target.id) {
                    e.target.parentElement.parentElement.parentElement.remove();
                    selected.splice(selected.indexOf(task))
                }
            })
        }
    };
}

let myProjects = [];

const ui = new UI();

//in DOM.js
const DOM = (() => {

    //control click of delete project
    document.addEventListener('click', function(e) {
        const project = new Projects()
        const task = new Tasks()
        project.deleteProjectList(e)
        ui.toggleCompleted(task, e)
    });

    //control add task button
    addTaskBtn.addEventListener('click', () => {
        ui.clearAddForm()
        ui.showAddTaskModal(modal)
        ui.showAddTaskModal(taskModal)
    });

    removeTaskModal.addEventListener('click', () => {
        ui.removeAddTaskModal(modal)
    });

    //control click of project and render it
    projectList.addEventListener('click', function(e) {
        const project = new Projects()
        ui.renderChosenProject(e, project)
    });

    //control task form
    taskForm.addEventListener('submit', function(e) {
        const project = new Projects();
        const task = new Tasks();
        e.preventDefault()
        task.addTask(project, task)
        ui.removeAddTaskModal(modal);
        ui.clearAddForm()
    });


    //control the task list icon
    taskList.addEventListener('click', function(e) {
        const task = new Tasks();
        task.removeTask(task, e)
        ui.showTaskDropDown(task, e)
    });

    //control the project
    projectForm.addEventListener('submit', function(e) {
        const project = new Projects()
        e.preventDefault();
        ui.addProject(project)
    });

    addProject.addEventListener('click', ui.showProjectForm);

    cancelProjectBtn.addEventListener('click', ui.removeProjectForm);
})();







