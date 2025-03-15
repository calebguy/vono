import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", serveStatic({ root: "../ui/dist" }));
app.use("*", serveStatic({ path: "../ui/dist/index.html" }));
app.notFound((c) => c.html(Bun.file("../ui/dist/index.html").text()));

const api = app.basePath("/api").get("/", (c) => {
	return c.json({
		message: {
			title: "CREATE",
			url: "https://github.com/new?template_name=vono&template_owner=calebguy",
		},
	});
});

export type Api = typeof api;
export default app;
