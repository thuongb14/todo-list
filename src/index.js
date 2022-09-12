import './style.css';


//in DOM.js
const addProject = document.querySelector('.add-project-button');
const projectForm = document.querySelector("#project-form");
const cancelProjectBtn = document.querySelector('.project-cancel-btn');
const projectList = document.querySelector('.project-list');

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
        if(item.title === '') {
            alert('Please fill in project name')
        } else {
            projectList.insertAdjacentHTML('beforeend' , `<button class="button-project"><i class="material-icons">task</i>${item.title}<i class="material-icons" style="margin-left: auto">cancel</i></button>
            `)
            ui.removeProjectForm()
        }
    }

    clearFormField() {
        document.getElementById('project-name').value = '';
    }

    deleteProject() {
        
    }
}

//in project.js
class Projects {
    constructor(title) {
        this.title = title;
    }

    deleteProjectList() {
        ui.deleteProject()
    }
}

let myProjects = []


const ui = new UI();

//in DOM.js
const DOM = (() => {

    projectForm.addEventListener('submit', function(e) {
        const project = new Projects(title)
        e.preventDefault();
        ui.addProject(project)
        myProjects.push(project)
        console.log(myProjects)
    })

    addProject.addEventListener('click', ui.showProjectForm);

    cancelProjectBtn.addEventListener('click', ui.removeProjectForm)
})();
    



 





