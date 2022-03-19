import React from "react";
import "./info.css";


class Info extends React.Component {




  render() {
    return (
      <div className="Info">
      A felkapcsolt lámpák száma:  {this.props.felkapcsoltDb}
      </div>
    );
  }
}

export default Info;