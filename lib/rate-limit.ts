import { getDb } from "./sqlite";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export function checkRateLimit(ip: string) {
  const db = getDb();
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  db.prepare("DELETE FROM lead_attempts WHERE created_at_ms < ?").run(windowStart);

  const row = db
    .prepare(
      "SELECT COUNT(*) as count FROM lead_attempts WHERE ip = ? AND created_at_ms >= ?"
    )
    .get(ip, windowStart) as { count: number };

  if (row.count >= MAX_ATTEMPTS) {
    return false;
  }

  db.prepare("INSERT INTO lead_attempts (ip, created_at_ms) VALUES (?, ?)").run(
    ip,
    now
  );

  return true;
}
