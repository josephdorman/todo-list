const projects = (() => {
  const projectsList = [];

  // implete default projects or local storage stuff here

  class Project {
    constructor(name) {
      this.name = name;
    }
  }

  function addProject (name) {
    const project = new Project(name);
    projectsList.push(project);
  }

  const testProject = 'Test Project';
  addProject(testProject);

  function checkIfProjectExists (name) {
    for (let i = 0; i < projectsList.length; i++) {
      if (projectsList[i].name === name) {
        return true;
      }
    }
    
    return false;
  }

  return {projectsList, addProject, checkIfProjectExists};

})();

export default projects;