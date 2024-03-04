import {atom} from 'recoil';

// declare custom type 
type AuthModalState = {
    isOpen: boolean;
    type: 'login' | 'signup' | 'resetPassword'; 
}

const intialAUthModalState: AuthModalState = {
    isOpen: false,
    type: 'login'
}

export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: intialAUthModalState
});
