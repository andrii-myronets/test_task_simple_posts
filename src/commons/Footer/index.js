import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return(
        <StyledFooter>&copy; 2018-2019</StyledFooter>
    )
}

const StyledFooter = styled.footer`
    text-align: center;
    color: #CCCCCC;
    border-top: 1px solid #CCCCCC;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`