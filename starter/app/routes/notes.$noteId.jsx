import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "~/data/notes";

import styles from "~/styles/note-details.css";

export default function NoteDetailsPage() {
  const note = useLoaderData();
  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  );
}

export const loader = async ({ params }) => {
  const noteId = params.noteId;
  const notes = await getStoredNotes();

  return notes.find((note) => note.id === noteId);
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
