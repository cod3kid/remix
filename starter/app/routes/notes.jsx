import { redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";

function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export const loader = async () => {
  const notes = await getStoredNotes();
  return notes;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const noteData = {
    id: new Date().toISOString(),
    title: formData.get("title"),
    content: formData.get("content"),
  };

  if (noteData.title.trim().length < 5) {
    return {
      message:
        "Invalid Title: Title length should be atleast 5 characters long",
    };
  }

  const existingNotes = await getStoredNotes();
  const updatedNotes = [...existingNotes, noteData];
  await storeNotes(updatedNotes);

  return redirect("/notes");
};

export const links = () => {
  return [...newNoteLinks(), ...noteListLinks()];
};

export const ErrorBoundary = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
};

export default NotesPage;
