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

export default function Home() {
	// const { data } = useQuery({
	//   queryKey: ["get"],
	//   queryFn: get,
	// });

	return (
		<div className="flex flex-col items-center justify-center h-full grow text-white font-mono">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/new?template_name=vono&template_owner=calebguy"
				className="bg-pink-600 text-grey rounded-lg px-3 py-1.5 border border-transparent hover:border-yellow-200 hover:text-yellow-200 hover:bg-yellow-600"
			>
				CREATE
			</a>
		</div>
	);
}
