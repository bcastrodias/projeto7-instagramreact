import { useState } from "react";

const Post = ({ user, content, likedBy, likeAmount }) => {
  const [isLiked, setIsLiked] = useState(false);
  const onPressHeart = () => {
    setIsLiked(!isLiked);
  };
  const onPressImage = () => {
    setIsLiked(true);
  };
  const [isBookMarked, setIsBookMarked] = useState(false);
  const onPressBook = () => {
    setIsBookMarked(!isBookMarked);
  };
  const currentLikeAmount = isLiked ? likeAmount + 1 : likeAmount;
  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={`assets/img/${user}.svg`} />
          {user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          onClick={onPressImage}
          data-test="post-image"
          src={`assets/img/${content}.svg`}
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {isLiked ? (
              <div className="vermelho">
                <ion-icon
                  class="vermelho"
                  name="heart"
                  data-test="like-post"
                  onClick={onPressHeart}
                />
              </div>
            ) : (
              <ion-icon
                name="heart-outline"
                data-test="like-post"
                onClick={onPressHeart}
              />
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {isBookMarked ? (
              <ion-icon
                name="bookmark"
                data-test="save-post"
                onClick={onPressBook}
              />
            ) : (
              <ion-icon
                name="bookmark-outline"
                data-test="save-post"
                onClick={onPressBook}
              />
            )}
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/img/${likedBy}.svg`} />
          <div className="texto" data-test="likes-number">
            Curtido por <strong>{likedBy}</strong> e{" "}
            <strong> outras {currentLikeAmount} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
