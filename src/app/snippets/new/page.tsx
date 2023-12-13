import { db } from "@/db";
import { notFound, redirect } from "next/navigation";
import React from "react";

export default function SnippetsCreatePage() {
  async function createSnippet(formDate: FormData) {
    // This needs to be a server action
    "use server";

    // Check the user's inputs and make sure they're valid
    const title = formDate.get("title") as string;
    const code = formDate.get("code") as string;

    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);

    // Redirect the user back to the root route
    redirect("/");
  }

  

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="font-bold p-2 w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            className="focus:outline-none border rounded-md p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="font-bold p-2 w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="focus:outline-none border rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="border rounded-md bg-blue-200 hover:bg-blue-300 transition p-2"
        >
          Create
        </button>
      </div>
    </form>
  );
}
