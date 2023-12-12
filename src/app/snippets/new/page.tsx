import React from 'react'

export default function SnippetsCreatePage() {
  return (
    <form>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="font-bold p-2 w-12" htmlFor="title">
            Title
          </label>
          <input
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
