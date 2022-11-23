import { data } from "../data"

export const useGetUserByEmail = (user) => {
    if (!user)
        return null;
    for (let u of data) {
        if (u.email === user.email)
            return user.userId
    }
}