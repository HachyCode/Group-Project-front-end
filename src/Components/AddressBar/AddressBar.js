import React from 'react';
import {Address, AddressBox, AddressDiv} from './AddressBarCSS';
import AddressStatements from './AddressStatements';

const options = [
    { value: '0', label: 'Select Supplier'},

    { value: '1', label: 'Bitmore Inc'},
    { value: '2', label: 'Cottage Toys'},
    { value: '3', label: 'BrainStorm Ltd'},
    { value: '4', label: 'Shenzhen Hosing Technology Development Co., Ltd'},
]

//function AddressBar() {
class AddressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier: "0",
            ourAddress: "0",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log("Supplier Selected!!");
        this.setState({ supplier: e.target.value });
        this.setState({ ourAddress: e.target.value });
    }

    render() {
        return (
            <div>{/*Viktorija*/}
                <AddressDiv>
    
                    <AddressBox>
                        <Address>Gadgets For You</Address>
                        <Address>Address</Address>
                        <Address>144 Number Street</Address>
                        <Address>Post Code</Address>
                    </AddressBox>
                
    
                    <AddressBox>
                        <Address>
                            <select value={this.state.supplier} onChange={this.handleChange}>
                                {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </Address>
                        <AddressStatements supplier = {this.state.supplier}/>
                    </AddressBox>
    
                </AddressDiv>
            </div>
        )
    }
}

export default AddressBar
