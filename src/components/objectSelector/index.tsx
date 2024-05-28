import React, { useState } from 'react';
import Viewer from '../viewer';
import style from './style.module.scss';
import Selector from '../selector';

const ObjectSelector: React.FC = () => {
    const [selectedObject, setSelectedObject] = useState<string>('Rectangle');

    const handleSelectionChange = (selectedObject: string) => {
        setSelectedObject(selectedObject);
    };

    const objectOptions = [
        { value: 'Rectangle', label: 'Rectangle' },
        { value: 'Triangle', label: 'Triangle' },
        { value: 'Circle', label: 'Circle' }
    ];

    return (
        <div className={style.objectSelector}>
            <Selector options={objectOptions} defaultValue="Rectangle" onChange={handleSelectionChange} />

            <div className={style.viewer}>
                <Viewer selectedObject={selectedObject} />
            </div>
        </div>
    );
};

export default ObjectSelector;
