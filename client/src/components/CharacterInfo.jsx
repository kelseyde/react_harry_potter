import React from "react";

const CharacterInfo = (props) => {
  console.log(props.character);
  if(!props.character) return null;
  if(props.character) return (
    <div className = "character-info" id = {props.character.house}>
      <h5>{props.character.name}</h5>
      <img src={props.character.image}/>
      <p>House: {props.character.house}</p>
      <p>Ancestry: {props.character.ancestry}</p>
    </div>
  )

}

export default CharacterInfo;
