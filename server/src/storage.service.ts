import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

export type SubmissionType = "contact" | "quote" | "partner" | "career" | "payment";

export interface StoredRecord {
  id: string;
  referenceId: string;
  type: SubmissionType;
  createdAt: string;
  payload: Record<string, unknown>;
}

@Injectable()
export class StorageService {
  private readonly dataDir = path.resolve(process.cwd(), "data");
  private readonly dataFile = path.join(this.dataDir, "submissions.json");

  constructor() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
    if (!fs.existsSync(this.dataFile)) {
      fs.writeFileSync(this.dataFile, JSON.stringify([], null, 2), "utf8");
    }
  }

  private readAll(): StoredRecord[] {
    try {
      const raw = fs.readFileSync(this.dataFile, "utf8");
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private writeAll(records: StoredRecord[]): void {
    fs.writeFileSync(this.dataFile, JSON.stringify(records, null, 2), "utf8");
  }

  create(type: SubmissionType, payload: Record<string, unknown>): StoredRecord {
    const records = this.readAll();
    const seq = String(records.length + 1).padStart(4, "0");
    const prefix = type.slice(0, 3).toUpperCase();
    const record: StoredRecord = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      referenceId: `ADW-${prefix}-${seq}`,
      type,
      createdAt: new Date().toISOString(),
      payload,
    };
    records.unshift(record);
    this.writeAll(records);
    return record;
  }

  list(type?: SubmissionType): StoredRecord[] {
    const records = this.readAll();
    return type ? records.filter((r) => r.type === type) : records;
  }

  stats() {
    const records = this.readAll();
    const counts: Record<SubmissionType, number> = {
      contact: 0,
      quote: 0,
      partner: 0,
      career: 0,
      payment: 0,
    };
    for (const r of records) {
      if (r.type in counts) counts[r.type] += 1;
    }
    return {
      total: records.length,
      counts,
      latestAt: records[0]?.createdAt ?? null,
    };
  }
}
