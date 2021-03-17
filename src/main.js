import {layout} from "./view/layout.js";
import {waitSpinner} from "./view/layout.js";
import {removeSpinner} from "./view/layout.js";
import Data from "./data.js";
import {render} from "./render.js";
import MarkupZaRezultate from "./view/results.js";

export default () => {
    document.getElementById("app").innerHTML = layout();
    let elementRezultata = document.getElementById("results");
    document.getElementById("searchTerm").addEventListener("change", async (event)=>{
        if(event.target.value != ""){
            waitSpinner();
            Data(event.target.value).then((rezultat)=>{                      
               removeSpinner()
               render(MarkupZaRezultate(rezultat), elementRezultata);                            
         })}     
                
    });
}
