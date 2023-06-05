import projects from "./projects";

const tasks = (() => {
  class Task {
    constructor(projectIndex, name, date) {
      this.projectIndex = projectIndex;
      this.name = name;
      this.date = date;
    }
  }

  function addTask (projectIndex, name, date) {
    const task = new Task(projectIndex, name, date);
    projects.projectsList[projectIndex].tasks.push(task);
  }

  addTask('0', 'Finish essay on WW2', '03-24-2023');

  return {addTask}

})();

export default tasks;