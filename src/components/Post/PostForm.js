import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addComment } from '../../store/post/operation';

export const PostForm = ({ image_id }) => {
    const [nameValue, setNameValue] = useState('');
    const [commentsValue, setCommentsValue] = useState('');

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addComment(
            {
                name: nameValue,
                description: commentsValue,
                image_id: image_id
            }
        ));
        setNameValue('');
        setCommentsValue('');
    }


    return (
        <StyledForm onSubmit={(event) => handleSubmit(event)}>
            <label>
                <StyledInput
                    type="text"
                    value={nameValue}
                    onChange={(event) => setNameValue(event.target.value)}
                    placeholder='Ваше имя'
                    required={true}
                />
            </label>
            <label>
                <StyledInput
                    type="text"
                    value={commentsValue}
                    onChange={(event) => setCommentsValue(event.target.value)}
                    placeholder='Ваш комментарий'
                    required={true}
                />
            </label>
            <StyledButton type="submit" value="Оставить комментарий" />
        </StyledForm>
    )
}

const StyledForm = styled.form`
  padding: 20px;
  grid-area: form;
  display: flex;
  flex-direction: column;
  @media (min-width: 481px){  
    padding: 0;
  }  
`
const StyledInput = styled.input`
   width:100%;
   border: 1px solid #cccccc; 
   border-radius: 3px;
   outline: none; 
   height: 30px;    
   font-size: 13px;
   box-sizing: border-box;
   padding: 0 10px;
   margin-top: 20px;
`
const StyledButton = styled.input`
   background-color: #4997D0;
   color: #ffffff;
   width:100%;
   border: 1px solid #cccccc; 
   border-radius: 3px; 
   outline: none; 
   height: 30px;   
   font-size: 13px; 
   box-sizing: border-box;
   margin-top: 20px;
   &:hover{
    background-color: #237bba;
    cursor: pointer;
  }
`