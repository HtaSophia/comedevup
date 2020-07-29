import styled from 'styled-components';
import ButtonMain from '../ButtonMain';
import LogoMain from '../LogoMain';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background: var(--color-black-dark);
    border-bottom: 4px solid var(--color-primary);

    @media(max-width: 800px) {
        justify-content: center;
        padding: 15px 15px;

        & > ${LogoMain} {
            height: 30px;
        }

        & > ${ButtonMain} {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: var(--color-primary);
            border: 0;
            border-radius: 0;
        }
    }
`;

export default Header;