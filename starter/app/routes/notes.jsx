import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";

function NotesPage() {
  return (
    <main>
      <NewNote />
      <NoteList />
    </main>
  );
}

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
