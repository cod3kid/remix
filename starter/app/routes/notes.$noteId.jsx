import { json } from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
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

  const selectedNote = notes.find((note) => note.id === noteId);

  if (!selectedNote) {
    throw json(
      { message: "Note not found!" },
      { status: 404, statusText: "Not Found" }
    );
  }

  return selectedNote;
};

export const CatchBoundary = () => {
  const caughtResponse = useCatch();

  return (
    <main>
      <p className="error">{caughtResponse.data.message}</p>
    </main>
  );
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = ({ data }) => {
  return {
    title: data.title,
    description: "Get all the notes",
  };
};
