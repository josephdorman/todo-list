import dom from "./dom";

const handlers = (() => {
  function newProjectClickHandler () {
    const button = document.getElementById('new-project');
    
    button.addEventListener('click', () => {
      console.log('New Project was clicked');
    });
  }

  return{newProjectClickHandler};

})();

export default handlers;