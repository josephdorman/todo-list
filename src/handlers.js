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
    // Future note for optimization, can declare buttons outside of this scope since they only need to be
    // Query selected once instead of every time this function is called
    const projectFormBtns = document.querySelectorAll('.project-creation-btns');
    const projectFormField = document.getElementById('project-creation-field');
    const taskFormBtns = document.querySelectorAll('.task-form-btns');
    const taskFormField = document.getElementById('task-name');
    const taskFormDate = document.getElementById('task-date');

    const formValidation = (btnID) => {
      if (btnID === 'project-creation-cancel' || btnID === 'project-creation-add') {
        if (btnID === 'project-creation-cancel') {
          dom.toggleForm(false, 'project');
          projectFormField.value = '';
          projectFormField.style.border = '1px solid #bdbdbd';
        }
        else if (projectFormField.value === '' || projectFormField.value === projects.checkIfProjectExists(projectFormField.value)) {
          projectFormField.style.border = '1px solid red';
        }
        else {
          projects.addProject(projectFormField.value);
          projectFormField.value = '';
          dom.toggleForm(false, 'project');
          projectFormField.style.border = '1px solid #bdbdbd';
        }
      }
      else if (btnID === 'add-task' || btnID === 'cancel-task') {
        if (btnID === 'cancel-task') {
          dom.toggleForm(false, 'task');
          taskFormField.value = '';
          taskFormDate.value = '';
        }
        else if (btnID === 'add-task') {
          tasks.addTask(projects.currentProject, taskFormField.value, taskFormDate.value);
          taskFormField.value = '';
          taskFormDate.value = '';
          dom.toggleForm(false, 'task');
        }
      }


    }

    projectFormBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        formValidation(btn.id);
        dom.showProjects();
        userProjectClickHandler();
      });
    });

    taskFormBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        formValidation(btn.id);
        dom.showProjectContent(projects.currentProject);
      })
    })

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
      if (projects.currentProject === '') {
        console.log('Please select a project');
      }
      else {
        dom.toggleForm(true, 'task');
      }
    });
  }

  return{newProjectClickHandler, formClickHandler, userProjectClickHandler, newTaskClickHandler};

})();

export default handlers;