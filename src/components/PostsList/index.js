import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { openModal } from '../../store/modal/actions';

import { getPostComments, getPostImg } from '../../store/post/operation';
import { selectPostsList } from '../../store/postsList/selectors';
import { Post } from '../Post';

export const PostsList = () => {
    const list = useSelector(selectPostsList);
    const dispatch = useDispatch();
    const handler = (value) => {
        dispatch(getPostImg(value))
        .then(() => dispatch(getPostComments(value)))
        .then(() => dispatch(openModal(<Post/>)))
        
    }
    return(
        <Container>
            {list && list.map((item, index) =>
                <StyledImg key = {index} src={item.src} alt={`foto № ${item.image_id}`} onClick={() => handler(item.image_id)}/>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;   
    @media (min-width: 481px){        
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px 20px;
    }

`
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`