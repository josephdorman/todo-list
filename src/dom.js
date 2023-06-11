import projects from "./projects";
import tasks from "./tasks";

const dom = (() => {
  function toggleForm (state, formType) {
    const projectForm = document.querySelector('.project-creation');
    const newProjectForm = document.querySelector('.new-project');
    const taskForm = document.querySelector('.new-task-form');

    if (formType === 'project') {
      if (!state === false) {
        projectForm.classList.add('active');
        newProjectForm.classList.add('active');
      }
      else if (!state === true) {
        projectForm.classList.remove('active');
        newProjectForm.classList.remove('active');
      }
    }
    else if (formType === 'task') {
      if (!state === false) {
        taskForm.classList.add('active');
      }
      else if (!state === true) {
        taskForm.classList.remove('active');
      }
    }
    
    
  }

  function showProjects() {
    const userProjects = document.querySelector('.user-project-list');
    userProjects.textContent = '';

    for (let i = 0; i < projects.projectsList.length; i++) {
      const project = document.createElement('button');
      const projectIcon = document.createElement('img');
      const projectName = document.createElement('span');
      const projectManage = document.createElement('img');

      project.classList.add('project');
      project.setAttribute('id', `projectIndex${i}`);

      projectIcon.classList.add('icon');
      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');

      projectName.classList.add('project-name');
      projectName.textContent = projects.projectsList[i].name;

      projectManage.classList.add('icon', 'project-delete');
      projectManage.setAttribute('src', './images/icons/trash-can-outline.svg');

      project.appendChild(projectIcon);
      project.appendChild(projectName);
      project.appendChild(projectManage);
      userProjects.appendChild(project);
    }

  }

  function showTask (projectID) {
    const projectTaskView = document.querySelector('.project-task-view');
    projectTaskView.textContent = '';

    console.table(projects.projectsList[projectID].tasks);

    for (let i = 0; i < projects.projectsList[projectID].tasks.length; i++) {
      const task = document.createElement('div');
      const taskName = document.createElement('div');
      const taskDate = document.createElement('div');
      const checkbox = document.createElement('input');
      const manage = document.createElement('button');
      const manageImage = document.createElement('img');

      task.classList.add('project-task');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('project-task-checkbox');

      taskName.classList.add('project-task-name');
      taskName.textContent = projects.projectsList[projectID].tasks[i].name;

      taskDate.classList.add('project-task-duedate');
      taskDate.textContent = projects.projectsList[projectID].tasks[i].date;

      manage.classList.add('manage');

      manageImage.classList.add('icon');
      manageImage.setAttribute('src', './images/icons/dots-vertical.svg');

      manage.appendChild(manageImage);

      task.appendChild(checkbox);
      task.appendChild(taskName);
      task.appendChild(taskDate);
      task.appendChild(manage);

      projectTaskView.appendChild(task);
    }

  }

  function showProjectContent(currentProject) {
    const projectTitle = document.querySelector('.project-title');
    const projectTaskRemaining = document.querySelector('.project-tasks-remaining');

    // Remaining task amount
    projectTitle.textContent = projects.projectsList[currentProject].name;
    projectTaskRemaining.textContent = `Tasks (${projects.projectsList[currentProject].tasks.length})`;

    showTask(currentProject);

  }

  return {showProjects, toggleForm, showProjectContent, showTask};

})();

export default dom;