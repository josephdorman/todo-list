import projects from "./projects";
import tasks from "./tasks";

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
      project.setAttribute('id', `projectIndex${i}`);

      projectIcon.classList.add('icon');
      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');

      project.appendChild(projectIcon);
      project.appendChild(projectName);
      userProjects.appendChild(project);
    }

  }

  function showTask (projectID) {
    const projectTaskView = document.querySelector('.project-task-view');
    projectTaskView.textContent = '';

    console.table(projects.projectsList[projectID].tasks);

    for (let i = 0; i < projects.projectsList[projectID].tasks.length; i++) {
      projectTaskView.textContent += projects.projectsList[projectID].tasks[i].name;
    }

  }

  function showProjectContent(name) {
    const projectTitle = document.querySelector('.project-title');
    const projectTaskRemaining = document.querySelector('.project-tasks-remaining');

    // Remaining task amount
    projectTitle.textContent = projects.projectsList[projects.selectProject(name)].name;
    projectTaskRemaining.textContent = `Tasks (${projects.projectsList[projects.selectProject(name)].tasks.length})`;

    showTask(projects.selectProject(name));

  }

  return {showProjects, toggleProjectForm, showProjectContent};

})();

export default dom;