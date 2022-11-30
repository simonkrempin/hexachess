export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    username: string;
    created: Date;
    updated: Date;
    avatar: Buffer;
}