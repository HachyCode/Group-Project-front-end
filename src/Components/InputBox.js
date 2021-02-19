import React from 'react'

const InputBox = (props) => {
    const inputBox = React.useRef(null);
    let hasBeenClicked = false;
    function clearOnClick() {
        //don't do anything if no default is defined
        if (props.default !== "") {
            if (!hasBeenClicked) {
                if (inputBox.value === props.default) {
                    inputBox.value = "";
                    hasBeenClicked = true;
                }
            }
        }
    }
    function value() {
        return inputBox.value;
    }
    return (
        <input ref={inputBox} type="text" value={props.default} onClick={clearOnClick}></input>
    );
};

export default InputBox;