import styled from 'styled-components';
import LogoMain from '../LogoMain';

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20px 0px;
    border-top: 4px solid var(--color-primary);

    & > ${LogoMain} {
        margin-bottom: 20px;
    }
`;

export default Footer;