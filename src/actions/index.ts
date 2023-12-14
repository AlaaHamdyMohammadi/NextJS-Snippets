"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

// formState must be first argument always
export async function createSnippet(
  formState: { message: string },
  formDate: FormData
) {
  // This needs to be a server action
  //  "use server";

  return {
    message: "Title must be longer",
  };

  // Check the user's inputs and make sure they're valid
  //   const title = formDate.get("title") as string;
  //   const code = formDate.get("code") as string;

  // Create a new record in the database
  //   const snippet = await db.snippet.create({
  //     data: {
  //       title,
  //       code,
  //     },
  //   });

  //   console.log(snippet);

  // Redirect the user back to the root route
  //redirect("/");
}

/*
Need two arguments: 
    1- id of this snippet
    2- code to be edit it
*/
export async function editSnippet(id: number, code: string) {
  // console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
