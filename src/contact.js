import React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
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
      <TopMenu></TopMenu>
      <div id="contact" style={{ width: '100%' }} className="w3-main w3-content w3-padding">
        <div className="w3-container w3-padding-32 w3-center">
          <Avatar
            style={{ margin: "auto" }}
            sx={{ width: 280, height: 280 }}
            alt="Profile Image"
            key={contact.avatar}
            src={contact.avatar || null}
          />
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite favorite={favorite} handleClick={toggleFavorite} />
          </h1>

          {contact.twitter && (
            <p>
              <span>Twitter: </span>
              <Link
                href={`https://twitter.com/${contact.twitter}`}
              >
                {contact.twitter}
              </Link>
            </p>
          )}

          {contact.facebook && (
            <p>
              <span>Facebook: </span>
              <Link
                href={`https://www.facebook.com/${contact.facebook}`}
              >
                {contact.facebook}
              </Link>
            </p>
          )}

          {contact.github && (
            <p>
              <span>GitHub: </span>
              <Link
                href={`https://github.com/${contact.github}`}
              >
                {contact.github}
              </Link>
            </p>
          )}

          {contact.glo && (
            <p>
              <span>Glo: </span>
              <Link
                href={`https://glo.globallogic.com/users/profile/${contact.glo}`}
              >
                {contact.glo}
              </Link>
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