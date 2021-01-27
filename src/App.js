import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Footer } from "./commons/Footer";
import { Header } from "./commons/Header";
import { Modal } from './components/Modal';
import { PostsList } from './components/PostsList';
import { selectModalIsOpen } from './store/modal/selectors';
import { getPosts } from './store/postsList/operation';


function App() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectModalIsOpen)

  useEffect(() => {
    dispatch(getPosts())    
  }, [dispatch]);

  return (
    <Container>
      <Header/>
      <PostsList/>
      <Footer/>
      {isOpenModal && <Modal/>}
    </Container>
  );
}

export default App;

const Container = styled.div`
 min-height: 80vh;
 max-width:90%;
 margin: 0 auto;
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 200px;
 `