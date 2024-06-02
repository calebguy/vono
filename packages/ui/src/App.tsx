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
		<div>
			<div className="bg-[#0b0b0b] text-[#999999] rounded-lg px-3 py-1">
				{data}
			</div>
		</div>
	);
}

export default App;
