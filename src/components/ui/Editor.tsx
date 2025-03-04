"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from "ckeditor5";
// import { FormatPainter } from "ckeditor5-premium-features";

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
