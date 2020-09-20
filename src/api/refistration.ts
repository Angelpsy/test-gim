import { apolloClient } from './index';
import { gql } from 'apollo-boost';
import {Genders} from "../types/genders";

export interface SignupInput {
    name: string;
    email: string;
    password: string;
    country: string;
    gender: Genders;
}

export const fieldsNamesToSend = ['name', 'email', 'password', 'country', 'gender'];

const signupMutation = gql`
    mutation($user: SignupInput!) {
      signup(input: $user) {
        name
      }
    }
`;

const Api = {
    sendSignUp(data: SignupInput) {
        return apolloClient.mutate({
            mutation: signupMutation,
            variables: {user: data},
        })
    }
}

export default Api;