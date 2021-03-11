import React, { Component } from "react";

class CaesarCipher extends Component {
  state = {
    text: "",
  };

  inputText = React.createRef();

  handelSubmit = (e) => {
    e.preventDefault();
    const userInput = this.inputText.current.value;
    const results = this.ceaserCipher(userInput, 3);
    this.setState({ text: results });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handelSubmit}>
          <label htmlfor="inputText" class="visually-hidden">
            Please Enter the text you want to encrypt
          </label>
          <input
            type="text"
            id="inputText"
            class="form-control"
            placeholder="Text"
            ref={this.inputText}
            autoFocus
            required
            autofocus
          ></input>
          <hr />
          <h5>{this.formatResult()}</h5>
          <hr />
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Encrypt
          </button>
        </form>
      </React.Fragment>
    );
  }

  //decipher the string
  ceaserCipher(text, key) {
    let decipher = "";

    //decipher each letter
    for (let i = 0; i < text.length; i++) {
      //if letter is uppercase then add uppercase letters
      if (this.isUpperCase(text[i])) {
        decipher += String.fromCharCode(
          ((text.charCodeAt(i) - key - 39) % 26) + 65
        );
      } else {
        //else add lowercase letters
        decipher += String.fromCharCode(
          ((text.charCodeAt(i) - key - 71) % 26) + 97
        );
      }
    }
    return decipher;
  }

  //check if letter is uppercase
  isUpperCase(text) {
    return text === text.toUpperCase();
  }

  formatResult() {
    const { text } = this.state;
    return text.length === 0 ? <span>-</span> : text;
  }
}

export default CaesarCipher;
