import dom from "./dom";
import projects from "./projects";

const handlers = (() => {
  
  function projectFormClickHandler () {
    const formBtns = document.querySelectorAll('.project-creation-btns');
    const formField = document.getElementById('project-creation-field');

    formBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'project-creation-cancel') {
          dom.toggleProjectForm(false);
          formField.value = '';
        }
        else {
          dom.toggleProjectForm(false);
          projects.addProject(formField.value);
          dom.showProjects();
          formField.value = '';
        }
      });
    });

  }

  projectFormClickHandler();

  function newProjectClickHandler () {
    const button = document.querySelector('.new-project');
    
    button.addEventListener('click', () => {
      dom.toggleProjectForm(true);
    });
  }

  return{newProjectClickHandler};

})();

export default handlers;