const Sugestao = ({ user, razao }) => {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={`assets/img/${user}.svg`} />
        <div className="texto">
          <div className="nome">{user}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
};

export default Sugestao;
