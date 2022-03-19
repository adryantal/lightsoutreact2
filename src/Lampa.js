import React from "react";
import "./lampa.css";
//JS code-okat mindig {} közé helyezzük 

class Lampa extends React.Component {
//

kattintasKezelo = () => {
  //console.log(this.props.id);
  this.props.szulofv(this.props.id);
  
  
};

  render() {
    return (
      <div className={this.props.allapot ? "on lampa" : "off lampa" } onClick={this.kattintasKezelo}>     
       
      </div>
    );
  }
}

export default Lampa;