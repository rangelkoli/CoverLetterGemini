import { Delta } from "quill/core";
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import Quill from "quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Editor is an uncontrolled React component
const Editor = forwardRef(
  (
    {
      onTextChange,
      onSelectionChange,
    }: {
      onTextChange: any;
      onSelectionChange: any;
    },
    ref
  ) => {
    const containerRef = useRef(null);

    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    // useEffect(() => {
    //   ref?.current?.enable(!readOnly);
    // }, [ref, readOnly]);

    const range = new Delta().retain(1, { bold: true }).insert("Hello");
    useEffect(() => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const editor = new Quill(container, {
        theme: "snow",
      });

      // Set the initial content
      editor.setContents(range);

      // Subscribe to text-change events
      editor.on("text-change", (delta) => {
        onTextChangeRef.current(editor.getContents());
      });

      // Subscribe to selection-change events
      editor.on("selection-change", (range) => {
        onSelectionChangeRef.current(range);
      });

      // Store the editor instance

      // Cleanup
      return () => {
        editor.off("text-change");
        editor.off("selection-change");
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  }
);

Editor.displayName = "Editor";

export default Editor;
