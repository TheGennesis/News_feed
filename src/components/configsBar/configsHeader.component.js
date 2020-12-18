//react import
import React from 'react';

//boostrap components
import Button from 'react-bootstrap/Button';

//custom components
import CountryFlag from './countryFlag.component';

const ConfigsHeader = ({ country, state, setState }) => {

    return (
        <div className="text-center">
            <h3>Actual Country selected: <strong><CountryFlag countryCode={country}/></strong></h3>
            <Button className="config-btn mb-3 mt-1" onClick={setState}>{state ? 'Change country' : 'Hide selection'}</Button>
        </div>
    );
};

export default ConfigsHeader;