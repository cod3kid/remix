import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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

  const existingNotes = await getStoredNotes();
  const updatedNotes = [...existingNotes, noteData];
  await storeNotes(updatedNotes);

  return redirect("/notes");
};

export const links = () => {
  return [...newNoteLinks(), ...noteListLinks()];
};

export default NotesPage;
