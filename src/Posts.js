import Post from "./Post";

const posts = [
  {
    user: "meowed",
    content: "gato-telefone",
    likedBy: "respondeai",
    likeAmount: 100000,
  },
  {
    user: "barked",
    content: "dog",
    likedBy: "adorable_animals",
    likeAmount: 100001,
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post
            user={post.user}
            content={post.content}
            likedBy={post.likedBy}
            likeAmount={post.likeAmount}
          ></Post>
        );
      })}
    </div>
  );
};

export default Posts;
