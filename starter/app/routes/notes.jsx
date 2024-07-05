import NewNote, { links as newNoteLinks } from "~/components/NewNote";

function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export default NotesPage;

export const links = () => {
  return [...newNoteLinks()];
};
