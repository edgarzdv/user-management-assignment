import React from 'react';
import style from './style.module.scss';
import ObjectSelector from '../../components/objectSelector';

const ObjectViewerPage: React.FC = () => {
    return (
        <div className={style.objectViewer}>
            <h1>3D Object Viewer</h1>
            <ObjectSelector />
        </div>
    );
};

export default ObjectViewerPage;
