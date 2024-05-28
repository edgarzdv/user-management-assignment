import React from 'react';

import Selector from '../../selector';

interface LanguageSelectorProps {
    onChange: (lang: string) => void;
}

const LangSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
    const themeOptions = [
        { value: 'eng', label: 'English' },
        { value: 'heb', label: 'עברית' }
    ];

    return <Selector options={themeOptions} defaultValue="eng" onChange={onChange} />
};

export default LangSelector;








