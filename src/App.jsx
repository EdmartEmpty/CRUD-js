import { Routes, Route } from "react-router-dom";
import PostContext from './postContext/postContext';
import MainMenu from "./componetns/MainMenu/MainMenu";
import Posts from "./componetns/Posts/Posts";
import CreateCard from "./componetns/CreateCard/CreateCard";
import { useState } from "react";
import Card from "./componetns/Card/Card";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [idNext, setId] = useState(1);

  const addPost = ({ content, name }) => {
    const newPost = {
      id: idNext,
      name,
      content
    };
    setPosts(prev => [...prev, newPost]);
    setId(prev => prev + 1);
  };

 const editPost = ({ content, id }) => {
  setPosts(prev => {
    return prev.map(el => {
      if (el.id === id) {
        return { ...el, content: content };
      }
      return el;
    });
  });
};


  const contextValue = {
    posts,
    addPost,
    editPost
  };

  return (
    <PostContext.Provider value={contextValue}>
      <Routes>
        <Route path='/' element={<MainMenu />}>
          <Route index element={<Posts />} />
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/new' element={<CreateCard />} />
        <Route path='/posts/:id' element={<Card />} />
      </Routes>
    </PostContext.Provider>
  );
}

export default App;