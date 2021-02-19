import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    color: ${props => props.colour}
`;
class InputBox extends React.Component {//= (props) => {
    
    constructor(props) {
        super(props);
        this.props = props;
        //this.inputBox = React.createRef();
        this.hasBeenClicked = false;
        this.colour = "lightgrey";

        this.state = {
            text: props.default,
        };

        this.setText = this.setText.bind(this);
    }
    clearOnClick = () => {
        //don't do anything if no default is defined
        if (this.props) {
            if (this.props.default && this.props.default !== "") {
                if (!this.hasBeenClicked) {
                    if (this.state.text === this.props.default) {
                        console.log("click");
                        this.setText("");
                        this.hasBeenClicked = true;
                        this.colour = "black";
                    }
                }
            }
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value });
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
            <Input type="text" value={this.state.text} defaultValue={this.props.default} onSelect={this.clearOnClick} onChange={this.handleChange} onBlur={this.onUnfocus} colour={this.colour}/>
        );
    }
};

export default InputBox;