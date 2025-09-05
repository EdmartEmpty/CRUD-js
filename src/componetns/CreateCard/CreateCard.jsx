import { useContext } from 'react';
import PostContext from '../../postContext/postContext';
import { useNavigate } from "react-router";

export default function CreateCard() {
const navigation = useNavigate();
  const context = useContext(PostContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("text") || "";
    const name = formData.get("name") || "";
    

    if (content.trim() && context && context.addPost) {
      context.addPost({content,name});
      event.target.reset();
    }
    navigation('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Ваше Имя</p>
      <input name="name" type="text" placeholder="Имя" />
      <p>Пост</p>
      <input name="text" type="text" placeholder="Текст" required />
      <button type="submit">Создать</button>
    </form>
  );
}