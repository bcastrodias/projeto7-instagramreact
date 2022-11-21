import Sugestao from "./Sugestao";

const sugestions = [
  {
    user: "bad.vibes.memes",
    razao: "Segue você",
  },
  {
    user: "chibirdart",
    razao: "Novo no Instagram",
  },
  {
    user: "razoesparaacreditar",
    razao: "Novo no Instagram",
  },
  {
    user: "adorable_animals",
    razao: "Segue você",
  },
];

const Sugestoes = () => {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestions.map((sugestion) => {
        return (
          <Sugestao user={sugestion.user} razao={sugestion.razao}></Sugestao>
        );
      })}
    </div>
  );
};

export default Sugestoes;
