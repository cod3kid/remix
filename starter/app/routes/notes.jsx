import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import { getStoredNotes, storeNotes } from "~/data/notes";

function NotesPage() {
  return (
    <main>
      <NewNote />
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
  return [...newNoteLinks()];
};

export default NotesPage;
