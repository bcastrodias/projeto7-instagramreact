import Story from "./Story";

const users = [
  "9gag",
  "meowed",
  "barked",
  "nathanwpylestrangeplanet",
  "wawawicomics",
  "respondeai",
  "filomoderna",
  "memeriagourmet",
];

const Stories = () => {
  return (
    <div className="stories">
      {users.map((user) => {
        return <Story user={user}></Story>;
      })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
};

export default Stories;
