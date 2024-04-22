import React, { Component } from "react";

//! HER KARTA ÖZEL OLAN KISIM

// Pokemon resimlerinin alınacağı API URL'si 
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class Pokecard extends Component {
    // render yöntemi, bileşenin görüntülenmesi için JSX döndürür. Bu, bileşenin arayüzünü oluşturur.
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">Pokemon</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type : {this.props.type}</div>
        <div className="Pokecard-data">Exp : {this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
