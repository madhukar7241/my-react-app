import React from "react";



class Ajax extends React.Component
{
    constructor() {
        super();
    
        function loadDoc() {
            const xhtt = new XMLHttpRequest();
            xhttp.onload = function() {
              document.getElementById("demo").innerHTML=this.responseText;
              var obj = JSON.parse(responseText);
              console.log(obj);
              
              
              
            }
            
            xhtt.open("GET", "http://dummy.restapiexample.com/api/v1/employees");
            xhtt.send();
            
          }
        }


    

  render() {

    return(
        <>
          <div id="demo">
      <h2>AJAX DATA OBJECT</h2>
      <button type="button" onclick="loadDoc()">Change Content</button>
      </div>

        </>
    );

 }

}
export default Ajax;