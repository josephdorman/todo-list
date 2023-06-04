import projects from "./projects";

const dom = (() => {
  function toggleProjectForm (state) {
    const projectForm = document.querySelector('.project-creation');
    const newProjectForm = document.querySelector('.new-project');

    if (!state === false) {
      projectForm.classList.add('active');
      newProjectForm.classList.add('active');
    }
    else if (!state === true) {
      projectForm.classList.remove('active');
      newProjectForm.classList.remove('active');
    }
    
  }

  function showProjects() {
    const userProjects = document.querySelector('.user-project-list');
    userProjects.textContent = '';

    for (let i = 0; i < projects.projectsList.length; i++) {
      const project = document.createElement('button');
      const projectIcon = document.createElement('img');
      const projectName = document.createTextNode(projects.projectsList[i].name);

      project.classList.add('project');
      project.setAttribute('id', projects.projectsList[i].name);

      projectIcon.classList.add('icon');
      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');

      project.appendChild(projectIcon);
      project.appendChild(projectName);
      userProjects.appendChild(project);
    }

  }

  function showProjectContent(name) {
    const projectTitle = document.querySelector('.project-title');
    const projectTaskView = document.querySelector('.project-task-view');
    const projectTaskRemaining = document.querySelector('.project-tasks-remaining');

    projectTitle.textContent = name;

    // Placeholder task amount
    projectTaskRemaining.textContent = 'Tasks (2)';



  }

  return {showProjects, toggleProjectForm, showProjectContent};

})();

export default dom;