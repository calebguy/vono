import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

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
