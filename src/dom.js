import projects from "./projects";

const dom = (() => {
  function showProjects() {
    const userProjects = document.querySelector('.user-project-list');

    for (let i = 0; i < projects.projectsList.length; i++) {
      const project = document.createElement('button');
      const projectIcon = document.createElement('img');
      const projectName = document.createTextNode(projects.projectsList[i].name);

      project.classList.add('project');

      projectIcon.classList.add('icon');
      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');

      project.appendChild(projectIcon);
      project.appendChild(projectName);
      userProjects.appendChild(project);
    }

  }

  return {showProjects};

})();

export default dom;