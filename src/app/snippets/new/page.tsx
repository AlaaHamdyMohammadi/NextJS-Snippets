"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function SnippetsCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
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
        {formState.message ? <div className="bg-red-200 font-bold my-2 p-2 border rounded border-red-400">{formState.message}</div> : null}
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
