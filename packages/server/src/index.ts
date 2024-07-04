import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", serveStatic({ root: "../ui/dist" }));
app.use("*", serveStatic({ path: "../ui/dist/index.html" }));

const api = app.basePath("/api").get("/", (c) => {
	return c.json({
		message: [
			{
				key: "standard",
				title: "VONO",
				url: "https://github.com/new?template_name=vono&template_owner=calebguy",
			},
			{
				key: "with-chain",
				title: "⛓️",
				url: "https://github.com/new?template_name=vono-with-chain&template_owner=calebguy",
			},
		],
	});
});

export type Api = typeof api;
export default app;
