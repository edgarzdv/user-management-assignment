import React, { useState } from 'react';
import style from './style.module.scss';

interface Option {
    value: string;
    label: string;
}

interface SelectorProps {
    options: Option[];
    defaultValue: string;
    onChange: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({ options, defaultValue, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <select className={style.selector} value={selectedValue} onChange={handleChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Selector;
