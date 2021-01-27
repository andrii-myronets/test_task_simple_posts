import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectPost } from '../../store/post/selectors';
import { PostForm } from './PostForm';

export const Post = () => {
    const postInfo = useSelector(selectPost)
    return (
        <Container>
            <StyledImg src={postInfo.imgSrc} alt='post NOT FOUND'></StyledImg>
            <Comments>
                {postInfo.comments.length > 0 && postInfo.comments.map((item, index) =>
                    <Comment key={index}>
                        <CommentName>{item.name}:</CommentName>
                        <CommentDescription>{item.description}</CommentDescription>
                    </Comment>
                )}
            </Comments>
            <PostForm image_id={postInfo.image_id} />
        </Container>
    )
}

const Container = styled.div` 
  display: flex;  
  flex-direction: column;

  @media (min-width: 481px){  
    display:grid;      
    grid-template-areas: "img comments"  
                       "form comments";
    grid-template-columns: 60% 40%;
    grid-gap: 0 10px;                     
    padding:30px;
  } 
  `
const StyledImg = styled.img`
width:100%;
  grid-area: img;
  object-fit: cover;

`
const Comments = styled.div`
  padding: 20px;
  grid-area: comments;
  font-size:13px;
  @media (min-width: 481px){  
    padding: 0;
    overflow: auto;
    max-height: 60vh;
  }
`
const Comment = styled.div`
  margin-bottom: 20px;
`

const CommentName = styled.p`
  color: #cccccc;
  margin: 5px 0;
`
const CommentDescription = styled.p` 
  margin:0;
`