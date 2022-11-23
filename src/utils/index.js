import { data } from "../data"

export const getUserByEmail = (user) => {
    console.log('set user ', user);
    if (!user)
        return null;
    for (let u of data) {
        if (u.email === user.email)
            return u.userId
    }
}