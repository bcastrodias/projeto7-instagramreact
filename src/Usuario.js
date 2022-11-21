import React, { useState } from "react";

const Usuario = () => {
  const [name, setName] = useState("Catana");
  const onPressPencil = () => {
    setName(prompt("Novo nome"));
  };

  const [pic, setPic] = useState("assets/img/catanacomics.svg");
  const onPressPic = () => {
    setPic(prompt("Manda o Link"));
  };

  return (
    <div className="usuario" data-test="user">
      <img
        onClick={onPressPic}
        data-test="profile-image"
        src={pic || "assets/img/catanacomics.svg"}
      />
      <div className="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {name || "anonimo"}
          <ion-icon
            name="pencil"
            onClick={onPressPencil}
            data-test="edit-name"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default Usuario;
