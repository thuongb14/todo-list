import './style.css';

//in project.js
class Projects {
    constructor(name) {
        this.name = name;
    }
}


//in DOM.js
const addProject = document.querySelector('.add-project-button');
const projectForm = document.querySelector("#project-form");
const cancelProjectBtn = document.querySelector('.project-cancel-btn');
const projectList = document.querySelector('.project-list');

class UI {
    showProjectForm() {
        projectForm.classList.remove('hidden');
    }

    removeProjectForm() {
        document.getElementById('project-name').value = '';
        projectForm.classList.add('hidden');
    }

}

const DomEvent = (() => {
    const ui = new UI()
    addProject.addEventListener('click', ui.showProjectForm);
    addProject.addEventListener('submit', ui.getProjectInput)
    cancelProjectBtn.addEventListener('click', ui.removeProjectForm)
})()





