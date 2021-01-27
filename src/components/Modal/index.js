import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import styled from 'styled-components';

import { closeModal } from '../../store/modal/actions.js';
import { selectModalContent } from '../../store/modal/selectors.js';


export const Modal = () => {
  useLockBodyScroll();
  const dispatch = useDispatch();
  const content = useSelector(selectModalContent);

  const closeModalHandler = () => {
    dispatch(closeModal())
  };

  return ReactDOM.createPortal(
    <ModalOwerlay onClick={(e) => e.currentTarget === e.target ? closeModalHandler() : null}>
      <ModalWindow>
        <CloseBtn onClick={() => closeModalHandler()}>
          <svg height='100%' viewBox='0 0 311 311.07733' width='100%' xmlns='http://www.w3.org/2000/svg'>
            <path d='m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0' /><path d='m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0' />
          </svg>
        </CloseBtn>
        {content}
      </ModalWindow>
    </ModalOwerlay>,
    document.getElementById('modal-root')
  )
};

const ModalOwerlay = styled.div`
  position: fixed;
  background-color: #312e2e83;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const ModalWindow = styled.div`
position: relative; 
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: space-between;  
max-height: 100vh;
overflow: auto;
min-width:100%;
min-height:100%;
@media (min-width: 481px){
  min-width:30%;
  min-height:30%;  
  max-height:80%;  
  max-width:70%;
  overflow: none;
  }
`
const CloseBtn = styled.div`
position: absolute;
top: 15px;
right: 15px;
width: 1.5rem;
height: 1.5rem;
fill: #A0A9AF;
  &:hover{
    fill: #c91212;
    cursor: pointer;
  }
`;