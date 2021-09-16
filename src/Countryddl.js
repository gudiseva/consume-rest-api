import React from 'react';
import Country from './Country';

class Countryddl extends React.Component {
    render() {
        return (
            <div>
                <select>
                    <option selected disabled = "true">-- Select Country --</option>
                    {
                        Country.Countrynames.map( (result) => (<option title = {"Country Id : " + result.Id}>{result.Cname}</option>) )
                        /* Country.Countrynames.map( (result) => (<option text = {result.Id}>{result.Cname}</option>) ) */
                    }
                </select>
                
            </div>
        )
    }
}

export default Countryddl;
