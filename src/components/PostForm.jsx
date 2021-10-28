import React, { useState } from "react";
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      {/* Неуправляемый/Неконтролируемый компонент если он через useRef конечно  */}
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onChange={({ target }) => {
          return setPost({ ...post, body: target.value });
        }}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
