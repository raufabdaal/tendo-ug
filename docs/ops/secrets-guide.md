# Secrets Guide — Tendo

*Per `AGENT_BRIEF.md`: API keys, tokens, passwords NEVER appear in chat. This file tells you where they DO go.*

## The rule (zero exceptions)

> **Secrets live in `.env.local` on your machine, OR in the official UI of the service (Vercel env vars, Supabase dashboard, etc.). Nowhere else.**
>
> The agent never needs to *see* a secret to write code that *references* it.

## What counts as a secret

- API keys (Groq, Gemini, OpenAI, Anthropic, anything ending in `_API_KEY`)
- Database connection strings
- OAuth tokens
- GitHub Personal Access Tokens (PATs) — extra dangerous, can modify all your repos
- Webhook signing secrets
- Anything labelled "secret", "token", "password", or "private key"

## What to do if a secret slips into chat (the recovery playbook)

1. **STOP everything you were doing.**
2. **Revoke the secret immediately**, in this order of priority:
   - GitHub PAT → https://github.com/settings/tokens → Delete the token
   - Groq key → https://console.groq.com/keys → Delete
   - Gemini key → https://aistudio.google.com/apikey → Delete
   - Other → find the provider's "API keys" page and delete
3. **Generate a new secret.**
4. **Put the new secret in `.env.local` only.**
5. **If you pushed it to GitHub by accident**, also rotate it AND scrub git history (or rotate again and accept the leak risk; rotation is more important than scrubbing).
6. **Tell the agent: "secret rotated, here's the new env var NAME (not value)."** Agent updates code to use the new env var name if it changed.

## How to set a secret in `.env.local`

```bash
# In the project root on your machine:
cp .env.example .env.local
# Then open .env.local in your editor and fill in the values.
```

Then in code, the agent uses:
```ts
const key = process.env.GROQ_API_KEY;
```

The agent never asks "what's the key?" The agent only ever needs the *name* of the env var.

## How to set a secret in Vercel

1. Vercel dashboard → your project → Settings → Environment Variables
2. Add the variable with the same name as in `.env.example`
3. Paste the value into Vercel's UI (never into chat)
4. Select environments (Production / Preview / Development)
5. Save → redeploy

## What `.env.example` is for

`.env.example` is committed to git. It contains the NAMES of all required env vars with no values (or with obvious placeholders). A new collaborator copies it to `.env.local` and fills in real values. This way, the agent always knows what env vars exist without ever seeing their values.

## Specifically for Tendo

- **Phase 0 (now):** no secrets needed.
- **Phase 1 (Next.js shell):** no secrets needed. The app is fully static.
- **Phase 2 (AI content generation):** `GROQ_API_KEY`, `GEMINI_API_KEY` — needed for the drafting pipeline, but the pipeline runs **locally on your machine**, never in production. The generated content is checked into git as MDX files. Vercel never needs these keys.
- **Phase 4 (school pilots):** if we add Supabase for auth, then `SUPABASE_URL` (public) + `SUPABASE_ANON_KEY` (public) + `SUPABASE_SERVICE_ROLE_KEY` (SECRET — only in Vercel + .env.local).

## Sign of a healthy secrets posture

- [ ] `.env.local` exists on your machine
- [ ] `.env.local` is in `.gitignore`
- [ ] `.env.example` is committed and has placeholders
- [ ] Vercel env vars match `.env.example` names
- [ ] Zero secrets pasted in chat history
- [ ] You can name every API key you have and where you'd revoke each one
