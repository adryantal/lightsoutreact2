import React from "react";
import Lampa from "./Lampa" ;
import Info from "./Info";
import "./jatekter.css";


class Jatekter extends React.Component {


    constructor(){
        super();
        this.meret=9; //így kívülről is használható
        let kTomb=[];
        for (let index = 0; index < this.meret; index++) {
            kTomb.push(false);          
        }
        this.state = {
        tomb: kTomb,
        felkapcsoltDb : 0
        }        
    }

   ujJatek=()=>{
    this.meret=9; //így kívülről is használható
    let segedTomb=[];
    for (let index = 0; index < this.meret; index++) {
      segedTomb.push(false);          
    }    
     this.setState({
     tomb: segedTomb,
     felkapcsoltDb: 0
    });
   }

  szamolfelkapcsoltDb = () =>{
      let db=0;
      for (let index = 0; index < this.state.tomb.length; index++) {
        if(this.state.tomb[index])
            db++;         
    }
    this.setState({      
      felkapcsoltDb : 
      db}) 
  }  
   
    //hanyadikra kattintottunk: id
    //ezen keresztül kommunikál a gyerekelemmel
  kapcsolas=(id)=>{
    console.log(id);
    //az akt. tömbelem változzon meg
  //a state-et csak közv. a konstruktorban állíthatjuk be
  const segedTomb = this.state.tomb;
  segedTomb[id]=!segedTomb[id];
  this.setState({
    tomb: segedTomb,
  });
  
this.szamolfelkapcsoltDb();
  }

  render() {
    return (
      <div className="Jatekter">
        <header className="App-header">
          <h1>LightsOut</h1>
        </header>
        <section className="Jatekter-refreshed">
        {this.state.tomb.map((elem,index )=> {
            return (
          <Lampa id={index} allapot={elem} key={index} szulofv={this.kapcsolas}/>
            );
        })} 

         
        </section>

        {/* //info: éppen hány lámpa van lekapcsolva
        //új játék
        szomszédok kapcsolgatása*/}

        <section className="Info"> <Info felkapcsoltDb={this.state.felkapcsoltDb}/> 
        </section>
        <footer></footer>
      </div>
    );
    //key: azonositas miatt kötelező; ezzel adjuk át, melyik elem változott, és ez alapján frissül az állapot
    //props-sal viszont nem érhető el
  }
}

export default Jatekter;
