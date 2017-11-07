import React from "react";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";

class CharacterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }
    this.handleCharacterSelect = this.handleCharacterSelect.bind(this);
  }

  componentDidMount() {
    const url = "http://hp-api.herokuapp.com/api/characters";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const characters = JSON.parse(request.responseText);
      this.setState({characters: characters})
    });
    request.send();
  }

  handleCharacterSelect(index) {
    console.log(index);
    console.log(this.state.characters);
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter});
  }

  render() {
    return (
      <div className = "character-container">
        <h2>Harry Potter Characters</h2>
        <CharacterList
          characters = { this.state.characters}
          onCharacterSelected = { this.handleCharacterSelect }/>
        <CharacterInfo
          character = { this.state.currentCharacter }/>
      </div>
    )
  }

}

export default CharacterContainer;
