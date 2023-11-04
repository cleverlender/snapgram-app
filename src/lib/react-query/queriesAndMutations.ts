import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount, signInAccount, signOutAccount } from '../appwrite/api'
import { INewUser } from '@/types'


// Creates the user
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

// Signs user into the account
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user:{ 
            email: string; 
            password: string; 
        }) => signInAccount(user)
    })
}


// Signs user out
export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount
    })
}

