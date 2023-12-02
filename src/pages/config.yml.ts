import type { APIRoute } from 'astro'
import { readFile } from 'node:fs/promises'

export const GET: APIRoute = async () => {
  const yml = await readFile('public/admin/config.yml')
  return new Response(yml)
}
