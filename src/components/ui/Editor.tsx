"use client";
import dynamic from "next/dynamic";
import { Essentials, Paragraph, Bold, Italic, ClassicEditor } from "ckeditor5";
// import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { useEffect, useRef } from "react";
// import { FormatPainter } from "ckeditor5-premium-features";
import { CKEditor } from "@ckeditor/ckeditor5-react";
function CustomEditor() {

  return (
    <div className="custom-editor w-full">
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: "GPL", // Or 'GPL'.
          plugins: [Essentials, Paragraph, Bold, Italic],
          toolbar: [
            "undo",
            "redo",
            "|",
            "bold",
            "italic",
            "|",
            "formatPainter",
          ],
          // initialData: "<p>Hello from CKEditor 5 in React!</p>",
        }}
      />
    </div>
  );
}

export default CustomEditor;
