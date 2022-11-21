const Story = ({ user }) => {
  return (
    <div className="story">
      <div className="imagem">
        <img src={`assets/img/${user}.svg`} />
      </div>
      <div className="usuario">{user}</div>
    </div>
  );
};

export default Story;
