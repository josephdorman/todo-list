import dom from "./dom";
import projects from "./projects";

const handlers = (() => {
  
  function projectFormClickHandler () {
    const formBtns = document.querySelectorAll('.project-creation-btns');
    const formField = document.getElementById('project-creation-field');

    const formValidation = () => {
      if (formField.value === '') {
        alert('Project name cant be empty');
      }
      else if (projects.checkIfProjectExists(formField.value)) {
        alert('Project name already exists');
      }
      else {
        projects.addProject(formField.value);
        formField.value = '';
        dom.toggleProjectForm(false);
      }

    }

    formBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'project-creation-cancel') {
          dom.toggleProjectForm(false);
          formField.value = '';
        }
        else {
          formValidation();
          dom.showProjects();
        }
      });
    });

  }

  function newProjectClickHandler () {
    const button = document.querySelector('.new-project');
    
    button.addEventListener('click', () => {
      dom.toggleProjectForm(true);
    });
  }

  return{newProjectClickHandler, projectFormClickHandler};

})();

export default handlers;