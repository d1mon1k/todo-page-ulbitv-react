import React from "react";
import { PostItem } from "./postItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PostList = ({ posts, title, remove }) => {
  const postListStyles = { textAlign: "center", margin: "25px 0 0 0" };
  return (
    <div>
      {posts.length ? (
        <h1 style={postListStyles}>{title}</h1>
      ) : (
        <h1 style={postListStyles}>Посты не были найдены !</h1>
      )}
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem
                number={index + 1}
                post={post}
                remove={remove}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
