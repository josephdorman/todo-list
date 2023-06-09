import dom from "./dom";
import projects from "./projects";
import tasks from "./tasks";

const handlers = (() => {

  function userProjectClickHandler () {
    const userProjectBtn = document.querySelectorAll('.user-project-list button');

    userProjectBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        projects.currentProject = btn.id.slice(btn.id.length - 1);
        dom.showProjectContent(projects.currentProject);
      });
    });

  }
  
  function formClickHandler () {
    const formBtns = document.querySelectorAll('.project-creation-btns');
    const formField = document.getElementById('project-creation-field');

    const formValidation = (btnID) => {
      if (btnID === 'project-creation-cancel') {
        dom.toggleForm(false, 'project');
        formField.value = '';
        formField.style.border = '1px solid #bdbdbd';
      }
      else if (formField.value === '') {
        formField.style.border = '1px solid red';
      }
      else if (projects.checkIfProjectExists(formField.value)) {
        formField.style.border = '1px solid red';
      }
      else {
        projects.addProject(formField.value);
        formField.value = '';
        dom.toggleForm(false, 'project');
        formField.style.border = '1px solid #bdbdbd';
      }

    }

    formBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        formValidation(btn.id);
        dom.showProjects();
        userProjectClickHandler();
      });
    });

  }

  function newProjectClickHandler () {
    const button = document.querySelector('.new-project');
    
    button.addEventListener('click', () => {
      dom.toggleForm(true, 'project');
    });
  }

  function newTaskClickHandler () {
    const button = document.querySelector('.add-task');

    button.addEventListener('click', () => {
      dom.toggleForm(true, 'task');
    });
  }

  return{newProjectClickHandler, formClickHandler, userProjectClickHandler, newTaskClickHandler};

})();

export default handlers;