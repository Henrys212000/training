import React from "react";

function Goll (props) {
    return(
        <div className="card">
          <div className="top">   
            <h3 className="name">{props.ne}</h3>         
            <img className = "circle-img" id = "imge" src = {props.ph} alt = "golf_img" />             
           </div>                     
          <div className="bottom">
            <p className="info">{props.br}</p>
            <p className="info">{props.mn}</p>
          </div>
        </div>
    );
}
export default Goll;