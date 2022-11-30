import { database } from '../models/db-connection';

export const getUser = async (username: string) => {
    try {
        const user = await database.collection('users').getFirstListItem( `username = '${username}'` );
        return user;
    } catch (error) {
        console.error(error);
    }
};
