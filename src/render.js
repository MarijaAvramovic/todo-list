import { taskListCont } from './dom.js'


export const render = function (element) {
    clearContent(element);
}


function clearContent(element) {
     while (element.firstChild) 
     {
         
    element.removeChild(element.firstChild);

     }
}

