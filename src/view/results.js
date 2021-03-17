export default (rez) => {
       return   `<h3>Rezultat pretraživanja: </h3>
               <ul>
                   ${rez.data.map((elem)=>{
                       return `<li> ${elem.artist.name} - <a href="${elem.link}" target="_blank">${elem.title_short}</a>
                       <br>
                       <audio controls>
                       <p>Short preview</p>
                       <source src="${elem.preview}" type="audio/mpeg">
                       Your browser does not support the audio element.
                       </audio>
                       </li>`;
                   }).join("")}            
               </ul>`
   };