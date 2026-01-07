import "./style.css"
import { Taks } from './task.js'
import { render } from './render.js'
import { taskListCont } from "./dom.js";




const taks1 = new Taks("trash");
console.log(taks1.name); 
console.log(taks1.id); 


render(taskListCont);
