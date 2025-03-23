import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function setEditing() {
    setIsEditing((editing) => !editing);
//     Because if isEditing is true, that means that we just click the button to stop editing
//      and, therefore, we wanna trigger this function onchangeName. So it doesn't re-render for nothing.
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={setEditing}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
