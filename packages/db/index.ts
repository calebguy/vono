import { drizzle } from "drizzle-orm/node-postgres";

class Db {
	private pg;

	constructor(private readonly connectionUrl: string) {
		this.pg = drizzle({
			casing: "snake_case",
			connection: this.connectionUrl,
			schema: {
				//schema, relations
			},
		});
	}

	// getRecordFromTable(key: string) {
	// 	return this.pg.query.table.findMany({
	// 		where: eq(table.key, key),
	// 	});
	// }
}

export { Db };
