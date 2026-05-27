import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

import type { LeadFormValues } from "./lead-schema";

type GlobalWithDb = typeof globalThis & {
  __doctorCarsDb?: Database.Database;
};

export type StoredLeadInput = LeadFormValues & {
  createdAt: string;
  ip: string;
  userAgent?: string;
};

function createDatabase() {
  const dataDir = path.join(process.cwd(), "data");
  fs.mkdirSync(dataDir, { recursive: true });

  const db = new Database(path.join(dataDir, "leads.sqlite"));
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      name TEXT,
      phone TEXT NOT NULL,
      car TEXT,
      service_type TEXT NOT NULL,
      preferred_time TEXT,
      message TEXT,
      source TEXT,
      ip TEXT,
      user_agent TEXT,
      status TEXT NOT NULL DEFAULT 'created',
      telegram_error TEXT
    );

    CREATE TABLE IF NOT EXISTS lead_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT NOT NULL,
      created_at_ms INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
    CREATE INDEX IF NOT EXISTS idx_attempts_ip_time ON lead_attempts(ip, created_at_ms);
  `);

  return db;
}

export function getDb() {
  const globalForDb = globalThis as GlobalWithDb;

  if (!globalForDb.__doctorCarsDb) {
    globalForDb.__doctorCarsDb = createDatabase();
  }

  return globalForDb.__doctorCarsDb;
}

export function saveLead(lead: StoredLeadInput) {
  const db = getDb();
  const result = db
    .prepare(
      `INSERT INTO leads (
        created_at,
        name,
        phone,
        car,
        service_type,
        preferred_time,
        message,
        source,
        ip,
        user_agent,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      lead.createdAt,
      lead.name || null,
      lead.phone,
      lead.car || null,
      lead.serviceType,
      lead.preferredTime || null,
      lead.message || null,
      lead.source || "сайт",
      lead.ip,
      lead.userAgent || null,
      "created"
    );

  return Number(result.lastInsertRowid);
}

export function updateLeadStatus(
  id: number,
  status: "telegram_sent" | "telegram_failed",
  error?: string
) {
  const db = getDb();
  db.prepare("UPDATE leads SET status = ?, telegram_error = ? WHERE id = ?").run(
    status,
    error || null,
    id
  );
}
