//react import
import React from 'react';
import { emojify } from 'react-emojione';

const CountryFlag = ({ countryCode }) => {
    
    const emojiFlags = require('emoji-flags');
    const selectedCountry = {
        name: emojiFlags.countryCode(countryCode).name,
        emoji: emojiFlags.countryCode(countryCode).emoji
    };

    return (
        <>
            {selectedCountry.name} <span>{emojify(selectedCountry.emoji, {style: {height: '20%'}})}</span>
        </>
    );
};

export default CountryFlag;