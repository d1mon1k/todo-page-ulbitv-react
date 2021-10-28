import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { PostList } from "./components/postList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
  //TODO 1:49:25
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => fetchPosts(), []);

  const fetchPosts = async () => {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false);
    }, 1000);
  };

  const createPost = (newPost) => {
    setPosts((posts) => {
      return [...posts, newPost];
    });
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(
      posts.filter((p) => {
        return p.id !== post.id;
      })
    );
  };

  return (
    <div className="App">
      <MyButton
        children={"Создать новой пост"}
        onClick={() => setModal(true)}
      />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Посты про js"}
        />
      )}
    </div>
  );
}

export default App;
