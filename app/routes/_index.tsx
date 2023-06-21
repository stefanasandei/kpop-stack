import type { V2_MetaFunction } from "@remix-run/node";
import { env } from "~/env";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix: {JSON.stringify(env)}</h1>
    </div>
  );
}
