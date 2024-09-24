import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { AttributeMap, Delta } from "quill/core";
import { useCoverLetterBodyStore } from "../stores/cover-letter-body";

const WordEditor = () => {
  const [content, setContent] = useState<Delta>(new Delta());
  const { setCoverLetterBody, coverLetterBody } = useCoverLetterBodyStore();
  useEffect(() => {
    const paragraphs = coverLetterBody.split("\n");
    const delta = new Delta();
    paragraphs.forEach((paragraph) => {
      delta.insert(paragraph);
      delta.insert("\n", { header: 1 });
    });

    setContent(delta);
  }, [coverLetterBody]);

  const editorRef = useRef<ReactQuill>(null);
  const delta = new Delta();

  useEffect(() => {
    const handleSaveButton = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        // Call your save function here
        console.log("Save function triggered");

        console.log(editorRef.current?.editor?.getContents());
        const newContent =
          editorRef.current?.editor?.getContents() || new Delta();
        setContent(newContent);
        console.log(newContent.ops.map((op) => op.insert).join(""));
        setCoverLetterBody(newContent.ops.map((op) => op.insert).join(""));
      }
    };

    document.addEventListener("keydown", handleSaveButton);

    return () => {
      document.removeEventListener("keydown", handleSaveButton);
    };
  }, []);

  return (
    <div className='h-full'>
      <h1 className='text-2xl font-semibold p-4'>Cover Letter</h1>

      <ReactQuill
        theme='snow'
        value={coverLetterBody}
        ref={editorRef}
        className='h-full'
        modules={{
          toolbar: [
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
            ["code-block"],
          ],
        }}
      />
    </div>
  );
};

export default WordEditor;
