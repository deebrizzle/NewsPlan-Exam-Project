import React from 'react';
import BasicSelect from './BasicSelect';


const options = ["Financial", "Sports", "Foreign affairs", "Motor"];

export default function SelectSection() {
    return BasicSelect(options, "Section")
};