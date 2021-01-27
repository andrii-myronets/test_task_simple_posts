import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return(
        <StyledHeader>test app</StyledHeader>
    )
}

const StyledHeader = styled.header`
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    padding: 1rem;    
`