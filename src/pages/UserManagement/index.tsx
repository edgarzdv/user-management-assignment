import React, { useState } from 'react';
import { addUser, deleteUser } from '../../store/userSlice';

import UserList from '../../components/userList';
import { User } from '../../types/User';

import style from './style.module.scss'
import Button from '../../components/button';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const UserManagement: React.FC = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();
    const [view, setView] = useState<'list' | 'grid'>('grid');

    const handleAddUser = () => {
        const newUser: User = {
            id: users.length + 1,
            name: 'New User',
            nickname: 'Newbie',
            photoUrl: 'https://images.unsplash.com/photo-1564564295391-7f24f26f568b'
        };
        dispatch(addUser(newUser));
    };

    const handleDeleteUser = (id: number) => {
        dispatch(deleteUser(id));
    };

    return (
        <div className={style.userManagement}>
            <div className={style.buttonCotnaier}>
                <Button onClick={() => setView('list')}>List View</Button>
                <Button onClick={() => setView('grid')}>Card View</Button>
                <Button onClick={handleAddUser}>Add User</Button>
            </div>
            {/* {view === 'card' ? ( */}
                {/* users.map(user => <UserCard key={user.id} user={user} deleteUser={handleDeleteUser} />) */}
            {/* ) : ( */}
            <div  className={view === 'grid' ? style.gridContainer : style.listContainer}>

                {users.map(user => <UserList view={view} key={user.id} user={user} deleteUser={handleDeleteUser} />)}
            </div>
            {/* )} */}
        </div>
    );
};

export default UserManagement;
