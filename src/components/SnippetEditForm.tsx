"use client";

import React, { useState } from "react";
import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
    console.log(value);
  }
  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={snippet.code}
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
    />
  );
}
