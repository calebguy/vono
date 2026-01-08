import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

const llmsContent = `# Vono

> A full-stack blockchain application template: bun + foundry + hono + nextjs + ponder + drizzle

## Quick Start

\`\`\`bash
# Create a new project from this template
gh repo create my-app --template calebguy/vono
cd my-app
bun install
bun dev
\`\`\`

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Runtime | Bun | Fast JavaScript runtime and package manager |
| Frontend | Next.js 16 + React 19 | App router, server components, Tailwind CSS 4 |
| Backend API | Hono | Lightweight, type-safe HTTP framework |
| Database | PostgreSQL + Drizzle ORM | Type-safe database queries and migrations |
| Blockchain Indexing | Ponder | Index and query on-chain data via GraphQL/SQL |
| Smart Contracts | Foundry (Solidity) | Forge, Cast, Anvil for contract development |

## Project Structure

\`\`\`
vono/
├── packages/
│   ├── web/        # Next.js frontend (port 3000)
│   ├── server/     # Hono API backend (port 3001)
│   ├── db/         # Drizzle ORM + PostgreSQL schemas
│   ├── ponder/     # Blockchain indexer
│   └── chain/      # Foundry smart contracts
├── package.json    # Workspace root
└── docker-compose.yml
\`\`\`

## Package Details

### web (Frontend)
- Next.js 16 with App Router
- React 19 with TanStack Query for data fetching
- Tailwind CSS 4 for styling
- Type-safe API client via Hono RPC

### server (Backend)
- Hono framework on Bun runtime
- CORS enabled, base path \`/api\`
- Exports types for frontend type safety

### db (Database)
- Drizzle ORM with PostgreSQL
- Docker Compose for local PostgreSQL
- Migration system via Drizzle Kit
- Commands: \`bun --filter db dev\`, \`bun --filter db migrate\`

### ponder (Blockchain Indexer)
- Indexes Ethereum mainnet events
- Exposes GraphQL at \`/graphql\` and SQL at \`/sql/*\`
- Configure contracts in \`ponder.config.ts\`
- Define schemas in \`ponder.schema.ts\`

### chain (Smart Contracts)
- Foundry for Solidity development
- \`forge build\` - compile contracts
- \`forge test\` - run tests
- \`anvil\` - local Ethereum node

## Commands

\`\`\`bash
# Development (runs all packages)
bun dev

# Individual packages
bun --filter web dev      # Frontend
bun --filter server dev   # Backend API
bun --filter db dev       # Start PostgreSQL + migrate
bun --filter ponder dev   # Blockchain indexer

# Database
bun --filter db migrate        # Run migrations
bun --filter db gen-migration  # Generate migration

# Smart Contracts
cd packages/chain
forge build    # Compile
forge test     # Test
anvil          # Local node
\`\`\`

## Environment Variables

\`\`\`bash
# Database (packages/db)
DATABASE_URL=postgresql://db:db@localhost:5432/db

# Ponder (packages/ponder)
PONDER_RPC_URL_1=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
\`\`\`

## Deployment

Includes Docker and Render.yaml configuration:
- Multi-stage Dockerfile with Bun
- Render free tier deployment ready

## Adding a New Smart Contract

1. Create contract in \`packages/chain/src/\`
2. Add ABI to \`packages/ponder/abis/\`
3. Configure in \`packages/ponder/ponder.config.ts\`
4. Define indexed tables in \`packages/ponder/ponder.schema.ts\`
5. Write indexing handlers in \`packages/ponder/src/\`

## Adding a New API Endpoint

1. Edit \`packages/server/src/index.ts\`
2. Add route: \`api.get("/endpoint", (c) => c.json({ data }))\`
3. Frontend auto-inherits types via \`Api\` export

## Common Patterns

### Fetching API Data in Frontend
\`\`\`typescript
import { hc } from "hono/client";
import type { Api } from "server";

const client = hc<Api>("/api");
const res = await client.index.$get();
const data = await res.json();
\`\`\`

### Querying Database
\`\`\`typescript
import { db } from "db";
import { users } from "db/schema";

const allUsers = await db.select().from(users);
\`\`\`

## Links

- Repository: https://github.com/calebguy/vono
- Create from template: https://github.com/new?template_name=vono&template_owner=calebguy
`;

const api = app
	.basePath("/api")
	.get("/", (c) => {
		return c.json({
			message: {
				title: "CREATE",
				url: "https://github.com/new?template_name=vono&template_owner=calebguy",
			},
		});
	})
	.get("/llms.txt", (c) => {
		c.header("Content-Type", "text/markdown; charset=utf-8");
		return c.body(llmsContent);
	});

export type Api = typeof api;
export default app;
