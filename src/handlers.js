import dom from "./dom";
import projects from "./projects";

const handlers = (() => {

  function userProjectClickHandler () {
    const userProjectBtn = document.querySelectorAll('.user-project-list button');

    userProjectBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.showProjectContent(btn.id);
        console.log(btn.id);
      });
    });

  }
  
  function projectFormClickHandler () {
    const formBtns = document.querySelectorAll('.project-creation-btns');
    const formField = document.getElementById('project-creation-field');

    const formValidation = (btnID) => {
      if (btnID === 'project-creation-cancel') {
        dom.toggleProjectForm(false);
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
        dom.toggleProjectForm(false);
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
      dom.toggleProjectForm(true);
    });
  }

  return{newProjectClickHandler, projectFormClickHandler, userProjectClickHandler};

})();

export default handlers;