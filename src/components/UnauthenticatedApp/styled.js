import styled from 'styled-components';
import theme from '@/styled/style-constants';

const { COLORS } = theme;

const Wrapper = styled.div`
`;

const LoginButton = styled.button`
    background-color: ${COLORS.EXTRALIGHT};
    padding: 16px;
`

export default {
    LoginButton,
    Wrapper
}