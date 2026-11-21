"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
let StorageService = class StorageService {
    dataDir = path.resolve(process.cwd(), "data");
    dataFile = path.join(this.dataDir, "submissions.json");
    constructor() {
        if (!fs.existsSync(this.dataDir)) {
            fs.mkdirSync(this.dataDir, { recursive: true });
        }
        if (!fs.existsSync(this.dataFile)) {
            fs.writeFileSync(this.dataFile, JSON.stringify([], null, 2), "utf8");
        }
    }
    readAll() {
        try {
            const raw = fs.readFileSync(this.dataFile, "utf8");
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        }
        catch {
            return [];
        }
    }
    writeAll(records) {
        fs.writeFileSync(this.dataFile, JSON.stringify(records, null, 2), "utf8");
    }
    create(type, payload) {
        const records = this.readAll();
        const seq = String(records.length + 1).padStart(4, "0");
        const prefix = type.slice(0, 3).toUpperCase();
        const record = {
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
    list(type) {
        const records = this.readAll();
        return type ? records.filter((r) => r.type === type) : records;
    }
    stats() {
        const records = this.readAll();
        const counts = {
            contact: 0,
            quote: 0,
            partner: 0,
            career: 0,
            payment: 0,
        };
        for (const r of records) {
            if (r.type in counts)
                counts[r.type] += 1;
        }
        return {
            total: records.length,
            counts,
            latestAt: records[0]?.createdAt ?? null,
        };
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StorageService);
