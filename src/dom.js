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
    const newProjectBtn = document.querySelector('.new-project');

    for (let i = 0; i < projects.projectsList.length; i++) {
      const project = document.createElement('button');
      const projectIcon = document.createElement('img');
      const projectName = document.createTextNode(projects.projectsList[i].name);

      project.classList.add('project');

      projectIcon.classList.add('icon');
      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');

      project.appendChild(projectIcon);
      project.appendChild(projectName);
      userProjects.insertBefore(project, newProjectBtn);
    }

  }

  return {showProjects, toggleProjectForm};

})();

export default dom;