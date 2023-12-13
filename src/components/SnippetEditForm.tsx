'use client';

import React from 'react'
import { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';

interface SnippetEditFormProps{
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={snippet.code}
      options={{minimap: {enabled: false}}}
    />
  );
}
