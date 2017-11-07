import React from "react";

const CharacterList = (props) => {

  const characterOptions = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  });

  function handleChange(event) {
    props.onCharacterSelected(event.target.value);
  }

  return (
    <select
      defaultValue ="default"
      name = "character-list"
      id="character-list"
      onChange={handleChange}>
      <option disabled value = "default">Choose a character!</option>
      { characterOptions }
    </select>
  )

}

export default CharacterList;
