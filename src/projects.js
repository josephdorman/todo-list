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

  return {addProject};

})();

export default projects;