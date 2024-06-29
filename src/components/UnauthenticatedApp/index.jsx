import React, { useContext } from 'react';
import S from './styled'
import userStoreCtx from '@/store/userStore';

const UnauthenticatedApp = () => {
    const { login } = useContext(userStoreCtx);

    return (
        <S.Wrapper>
            <h2>Log in to join an app</h2>
            <S.LoginButton onClick={login}>
                Login with Google
            </S.LoginButton>
        </S.Wrapper>
    );
}

export default UnauthenticatedApp;