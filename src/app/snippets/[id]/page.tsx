import React from "react";
import * as actions from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  //   console.log(params);
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });
  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAcion = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">Show a snippet: {snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAcion}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 rounded border bg-slate-200 border-slate-200">
        <code>{snippet.code}</code>
      </pre>
    </>
  );
}
