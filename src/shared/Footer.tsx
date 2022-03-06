import { styled } from '@mui/material';

const Footer = () => {
    const FooterContainer = styled('div')(
        ({ theme }) =>
            `
            background-color: ${theme.palette.primary.main};
            padding: 15px 0px;
            text-align: center;
            position: absolute;
            bottom: 0;
            width: 100%;
        `
    );

    const FooterText = styled('span')(
        ({ theme }) =>
            `
            color: ${theme.palette.secondary.main};
        `
    );

    return (
        <FooterContainer>
            <FooterText>
                Made with <span style={{ color: 'red' }}>&#10084;</span> by
                &nbsp;<i>Nish!!!!</i>
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
