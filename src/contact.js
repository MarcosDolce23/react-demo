import { useState } from 'react';
import Sidebar from "./components/sidebar";
import TopMenu from "./components/topMenu";

export default function Contact() {

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const contact = {
    first: "Marcos",
    last: "Dolce",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "@MarcosDolce",
    facebook: "marcos.dolce",
    github: "MarcosDolce23",
    glo: "marcos.dolce",
    notes: "Estoy haciendo una demo con ReactJs"
  };

  return (
    <>
      <Sidebar></Sidebar>
      <TopMenu></TopMenu>
      <div id="contact" style={{ width: '100%', marginTop: "100px" }} className="w3-main w3-content w3-padding">
        <div>
          <img
            key={contact.avatar}
            src={contact.avatar || null}
          />
        </div>

        <div>
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite favorite={favorite} handleClick={toggleFavorite}/>
          </h1>

          {contact.twitter && (
            <p>
            <span>Twitter: </span>
              <a
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
              >
                {contact.twitter}
              </a>
            </p>
          )}

          {contact.facebook && (
            <p>
            <span>Facebook: </span>
              <a
                target="_blank"
                href={`https://www.facebook.com/${contact.facebook}`}
              >
                {contact.facebook}
              </a>
            </p>
          )}

          {contact.github && (
            <p>
            <span>GitHub: </span>
              <a
                target="_blank"
                href={`https://github.com/${contact.github}`}
              >
                {contact.github}
              </a>
            </p>
          )}

          {contact.glo && (
            <p>
            <span>Glo: </span>
              <a
                target="_blank"
                href={`https://glo.globallogic.com/users/profile/${contact.glo}`}
              >
                {contact.glo}
              </a>
            </p>
          )}

          {contact.notes && <p>{contact.notes}</p>}

        </div>
      </div>
    </>
  );
}

function Favorite({ favorite, handleClick }) {
  return (
    <button
      name="favorite"
      value={favorite ? "false" : "true"}
      onClick={handleClick}
      aria-label={
        favorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
    >
      {favorite ? "★" : "☆"}
    </button>
  );
}