# AI Mystery Room

An AI-powered fictional detective investigation game. See [spec.md](./spec.md) for the full product requirements.

## Run locally

1. Install Node.js 20+ and MongoDB.
2. Copy `.env.example` to `.env` in the repository root and configure MongoDB, JWT, and Gemini credentials.
3. Copy `.env.example` to `frontend/.env` (or use the defaults).
4. Run `npm install`, then `npm run dev` from the repository root.
5. Open http://localhost:5173.

The client includes a guest mode. AI case generation requires `GEMINI_API_KEY`; registered case history requires MongoDB and a configured `JWT_SECRET`.

## Deploy to Render

1. Push this repository to GitHub and create a new Blueprint on Render from the repository. Render will use `render.yaml` to build and start the app.
2. In the Render service settings, set `MONGODB_URI` to your MongoDB Atlas connection string and `GEMINI_API_KEY` to your Gemini API key. `JWT_SECRET` is generated automatically.
3. Wait for the service to become live. The app and API will be available at the service URL; `/health` is the health-check endpoint.

Keep API keys and database credentials in Render's environment settings, not in Git.
