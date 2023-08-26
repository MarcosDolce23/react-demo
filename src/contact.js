import { Form } from "react-router-dom";
import Sidebar from "./components/sidebar";
import TopMenu from "./components/topMenu";

export default function Contact() {
  const contact = {
    first: "Marcos",
    last: "Dolce",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "@MarcosDolce",
    notes: "Estoy haciendo una demo con ReactJs",
    favorite: true,
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
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

      </div>
    </div>
    </>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}