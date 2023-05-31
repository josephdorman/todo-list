import dom from "./dom";

const listeners = (() => {
  function newProjectClickhandler () {
    const button = document.getElementById('new-project');
    
    button.addEventListener('click', () => {
      console.log('New Project was clicked');
    });
  }

  return{newProjectClickhandler};

})();

export default listeners;