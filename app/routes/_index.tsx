import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDB } from "~/lib/db.server";
import { songs } from "~/lib/schema..server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "KPop Remix" },
    { name: "description", content: "A Remix template project." },
  ];
};

export const loader = async () => {
  const db = await getDB();
  return await db.select().from(songs);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="bg-zinc-900 text-pink-300 text-2xl min-h-screen p-2">
      <h1>Songs in the database: {JSON.stringify(data)}</h1>
    </div>
  );
}
