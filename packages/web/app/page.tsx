"use client";

import { hc } from "hono/client";
import type { Api } from "server";

const client = hc<Api>("/");
// call api routes with
// async function get() {
//   const res = await client.api.$get();
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return (await res.json()).message;
// }

const versions = {
	nextjs: "16.1.0",
	hono: "4.11.4",
	ponder: "0.16.1",
	drizzle: "0.45.1",
};

export default function Home() {
	// const { data } = useQuery({
	//   queryKey: ["get"],
	//   queryFn: get,
	// });

	return (
		<div className="flex flex-col items-center justify-center h-full grow text-white font-mono gap-8">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/new?template_name=vono&template_owner=calebguy"
				className="bg-pink-600 text-grey rounded-lg px-3 py-1.5 border border-transparent hover:border-yellow-200 hover:text-yellow-200 hover:bg-yellow-600"
			>
				CREATE
			</a>
			<div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col italic sm:not-italic sm:flex-row sm:gap-2.5 font-mono text-sm text-yellow-200 bg-yellow-600 px-1.5 py-0.5 rounded-sm">
				<span>next.js: {versions.nextjs}</span>
				<span>hono: {versions.hono}</span>
				<span>ponder: {versions.ponder}</span>
				<span>drizzle: {versions.drizzle}</span>
			</div>
		</div>
	);
}
