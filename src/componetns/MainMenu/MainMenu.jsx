import { useNavigate } from "react-router";
import { Outlet } from "react-router";

export default function MainMenu(){
const navigation = useNavigate();

  return(
    <>
    <div>
      <button onClick={() => {navigation("/posts/new")}}>Создать Карточку</button>
      <button onClick={() => {navigation("/posts")}}>Посты</button>
      </div>
      <div>
        <Outlet/>
      </div>
      
      </>
  )
}