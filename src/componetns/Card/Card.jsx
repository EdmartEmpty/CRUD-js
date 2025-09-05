import { useContext, useState } from 'react';
import PostContext from '../../postContext/postContext';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Card() {
  const navigation = useNavigate();
  const { id } = useParams();
  const context = useContext(PostContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  
  if (!context || !context.posts || !context.editPost) {
    return <div>Контекст не загружен</div>;
  }

  const { posts, editPost } = context;
  const postId = parseInt(id);
  const post = posts.find(el => el.id === postId);

  if (!post) {
    return <div>Пост не найден</div>;
  }

  const handleEdit = () => {
    if (isEditing) {
      editPost({
        id: postId,
        content: editedContent || post.content
      });
      setIsEditing(false);
    } else {
      setEditedContent(post.content);
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContent('');
  };

  return (
    <div>
      <button onClick={() => {navigation('/')}}>назад</button>
      <p>Пишет {post.name}</p>
      
      {isEditing ? (
       
        <div>
          <textarea 
            value={editedContent} 
            onChange={(e) => setEditedContent(e.target.value)}
            rows={4}
            style={{ width: '100%' }}
          />
          <button onClick={handleEdit}>Сохранить</button>
          <button onClick={handleCancel}>Отмена</button>
        </div>
      ) : (
        <div>
          
          <p>{post.content}</p>
          <button onClick={handleEdit}>Редактировать</button>
        </div>
      )}
    </div>
  );
}