import { useQuery } from "@tanstack/react-query";
import { hc } from "hono/client";
import type { Api } from "../../server/src";

const client = hc<Api>("/");

async function get() {
	const res = await client.api.$get();
	if (!res.ok) {
		throw new Error(res.statusText);
	}
	return (await res.json()).message;
}

function App() {
	const { data } = useQuery({
		queryKey: ["get"],
		queryFn: get,
	});

	return (
		<div className="flex flex-col items-center justify-center h-full grow text-white font-mono">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={data?.url}
				className="bg-background text-grey rounded-lg px-3 py-1.5 hover:text-pink-400 border border-transparent hover:border-pink-400"
			>
				{data?.title}
			</a>
		</div>
	);
}

export default App;
