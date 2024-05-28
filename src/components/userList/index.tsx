import React from 'react';
import { User } from '../../types/User';
import style from './style.module.scss';
import Button from '../button';

interface UserListProps {
    user: User;
    deleteUser: (id: number) => void;
    view: 'list' | 'grid';
}

const UserList: React.FC<UserListProps> = ({ user, deleteUser, view }) => {
    return (
        <div className={`${style.userItem} ${view === 'grid' ? style.gridItem : style.listItem}`}>
            <div className={style.userInfo}>
                <img src={user.photoUrl} alt={user.name} className={style.userImage} />
                <h4>{user.name} - {user.nickname}</h4>
            </div>
            <Button onClick={() => deleteUser(user.id)}>Delete</Button>
        </div>
    );
};

export default UserList;
