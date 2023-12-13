import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <h1>Home</h1>
      <div className="flex justify-between items-center mb-2">
        <h2>Snippets</h2>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {snippets.map((snippet) => (
          <Link
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            {snippet.title}
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
