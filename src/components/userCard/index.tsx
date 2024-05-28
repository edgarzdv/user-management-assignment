import React from 'react';
import { User } from '../../types/User';

import style from './style.module.scss'
import Button from '../button';

interface UserCardProps {
    user: User;
    deleteUser: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, deleteUser }) => {
    return (
        <div className={style.userCard}>
            <div className={style.userInfo}>
                <img src={user.photoUrl} alt={user.name} style={{ width: '100px', height: '100px' }} />
                <h3>{user.name}</h3>
                <p>{user.nickname}</p>
            </div>
            <div>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
            </div>
        </div>
    );
};

export default UserCard;
