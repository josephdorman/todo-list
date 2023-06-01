import dom from "./dom";
import projects from "./projects";

const handlers = (() => {
  
  function projectFormClickHandler () {
    const formBtns = document.querySelectorAll('.project-creation-btns');

    formBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'project-creation-cancel') {
          dom.toggleProjectForm(false);
        }
        else {
          const formField = document.getElementById('project-creation-field').value;
          dom.toggleProjectForm(false);
          projects.addProject(formField);
          dom.showProjects();
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