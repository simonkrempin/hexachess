import { IUser } from '../../../interfaces/user';
import { getUser } from '../../../services/user-services';

export default async function User({ params }: any) {
    const user = await getUser(params.user);

    return (
        <div>
        <h1>{user?.username ?? "unknown user"}</h1>
        <p></p>
        </div>
    );
}
