const projects = (() => {
  const projectsList = [
    {
      name: 'Homework',
      tasks: [
        {
          projectName: 'Homework',
          name: 'Deliver tea to Mrs Daniels',
          date: '06-21-2023'
        }
      ]
    },
    {
      name: 'Chores',
      tasks: [
        {
          projectName: 'Chores',
          name: 'Clean up the washroom',
          date: '02-15-2023'
        },
        {
          projectName: 'Chores',
          name: 'Take out the trash',
          date: '02-15-2023'
        }
      ]
    }
  ];

  // implete default projects or local storage stuff here

  class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }
  }

  function addProject (name) {
    const project = new Project(name);
    projectsList.push(project);
  }

  function selectProject (projectID) {
    const selectedProject = projectID.slice(projectID.length - 1);
    return selectedProject;
  }

  function checkIfProjectExists (name) {
    for (let i = 0; i < projectsList.length; i++) {
      if (projectsList[i].name === name) {
        return true;
      }
    }
    
    return false;
  }

  return {projectsList, addProject, checkIfProjectExists, selectProject};

})();

export default projects;