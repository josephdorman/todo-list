import projects from "./projects";

const tasks = (() => {
  class Task {
    constructor(projectName, name, date) {
      this.projectName = projectName;
      this.name = name;
      this.dueDate = date;
    }
  }

  function addTask (projectName, name, date) {
    const task = new Task(projectName, name, date);
    projects.projectsList[projectName].tasks.push(task);
  }

  return {addTask}

})();

export default tasks;