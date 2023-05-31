import dom from "./dom";

const handlers = (() => {
  function newProjectClickHandler () {
    const button = document.getElementById('new-project');
    
    button.addEventListener('click', () => {
      dom.showProjectForm();
    });
  }

  return{newProjectClickHandler};

})();

export default handlers;