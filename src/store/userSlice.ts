import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';
import { users as mockUsers } from '../dataMock/users';

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: mockUsers,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    },
});

export const { addUser, deleteUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
