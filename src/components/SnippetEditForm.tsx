"use client";

import React, { useState } from "react";
import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
    console.log(value);
  }

  // bind make a preloaded version of our server action, that's going to be called with some arguments already assigned to it
  //first arg always be null, second arg must be first arg in editSnippet func in action file(id), third is the second in action
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code); // code is piece of state
  return (
    <>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />

      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">Save</button>
      </form>
    </>
  );
}
