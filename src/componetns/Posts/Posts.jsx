import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../../postContext/postContext';
 
export default function Posts() {
  const context = useContext(PostContext);
    

  if (!context || !context.posts) {
    return <div>Контекст не загружен</div>;
  }

  const { posts } = context;

  if (posts.length === 0) {
    return <div>Нет постов</div>;
  }

  return (
    <div>
      <h1>Посты</h1>
      {posts.map((el) => (
        <div className='post_box' key={el.id}> 
        <Link to={`/posts/${el.id}`}>Редактировать</Link>
          <p>Пишет:{el.name}</p> {el.content}
          </div>
      ))}
    </div>
  );
}