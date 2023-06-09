const projects = (() => {
  const currentProject = '';
  const projectsList = [
    {
      name: 'Homework',
      tasks: [
        {
          projectIndex: '0',
          name: 'Deliver tea to Mrs Daniels',
          date: '06-21-2023'
        }
      ]
    },
    {
      name: 'Chores',
      tasks: [
        {
          projectIndex: '1',
          name: 'Clean up the washroom',
          date: '02-15-2023'
        },
        {
          projectIndex: '1',
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

  function checkIfProjectExists (name) {
    for (let i = 0; i < projectsList.length; i++) {
      if (projectsList[i].name === name) {
        return true;
      }
    }
    
    return false;
  }

  return {projectsList, currentProject, addProject, checkIfProjectExists};

})();

export default projects;