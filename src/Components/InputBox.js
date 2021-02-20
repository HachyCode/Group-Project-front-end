import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    color: ${props => props.colour}
`;
class InputBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
        this.hasBeenClicked = false;
        this.colour = "lightgrey";
        this.disabled = false;

        this.state = {
            text: props.default,
        };

        this.setText = this.setText.bind(this);
    }

    clearOnClick = () => {
        //don't do anything if no default is defined
        this.disabled = true;
        if (this.props) {
            if (this.props.default && this.props.default !== "") {
                if (!this.hasBeenClicked) {
                    if (this.state.text === this.props.default) {
                        this.setText("");
                        this.hasBeenClicked = true;
                        this.colour = "black";
                    }
                }
            }
        }
        this.disabled = false;
    }

    handleChange = (event) => {
        if (this.disabled) event.preventDefault();
        else this.setState({text: event.target.value });
    }

    onKeyPress = (event) => {
        if (this.disabled) event.preventDefault();
    }

    onUnfocus = () => {
        if (this.state.text === "") {
            console.log("unfocus");
            this.colour = "lightgrey";
            this.setText(this.props.default);
            this.hasBeenClicked = false;
        }
    }

    getColour = () => {
        return this.state.text === this.props.default ? "lightgrey" : "black";
    }

    setText = (text) => this.setState({text: text});

    render = () => {
        return (
            //could I use placeholder and forget this whole custom component nonsense? yes.
            //but this is more compatible with older browsers and everyone knows companies are all
            //stuck on windows XP
            <Input type="text" value={this.state.text} onClick={this.clearOnClick} onSelect={this.clearOnClick} onKeyPress={this.onKeyPress} onChange={this.handleChange} onBlur={this.onUnfocus} colour={this.colour}/>
        );
    }
};

export default InputBox;