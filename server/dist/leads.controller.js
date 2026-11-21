"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsController = void 0;
const common_1 = require("@nestjs/common");
const storage_service_1 = require("./storage.service");
let LeadsController = class LeadsController {
    storage;
    constructor(storage) {
        this.storage = storage;
    }
    health() {
        return {
            status: "ok",
            agency: "AD Wala",
            backend: "NestJS",
            timestamp: new Date().toISOString(),
        };
    }
    dashboardStats() {
        return {
            agency: "AD Wala",
            ...this.storage.stats(),
        };
    }
    listLeads(type) {
        return {
            items: this.storage.list(type),
        };
    }
    submitContact(body) {
        const name = String(body?.name ?? "").trim();
        const phone = String(body?.phone ?? "").trim();
        const email = String(body?.email ?? "").trim();
        const message = String(body?.message ?? "").trim();
        if (!name || (!phone && !email)) {
            throw new common_1.BadRequestException("Name and either phone or email are required.");
        }
        const saved = this.storage.create("contact", {
            name,
            company: String(body?.company ?? "").trim(),
            email,
            phone,
            message,
        });
        return {
            ok: true,
            referenceId: saved.referenceId,
            message: "Your inquiry has been saved. Our AD Wala strategist will connect shortly.",
            record: saved,
        };
    }
    submitQuote(body) {
        const name = String(body?.name ?? "").trim();
        const phone = String(body?.phone ?? "").trim();
        if (!name || !phone) {
            throw new common_1.BadRequestException("Name and phone number are required.");
        }
        const saved = this.storage.create("quote", {
            name,
            brand: String(body?.brand ?? "").trim(),
            email: String(body?.email ?? "").trim(),
            phone,
            services: Array.isArray(body?.services) ? body.services : [],
            platforms: Array.isArray(body?.platforms) ? body.platforms : [],
            duration: String(body?.duration ?? "Monthly Retainer"),
            budget: String(body?.budget ?? ""),
            notes: String(body?.notes ?? "").trim(),
        });
        return {
            ok: true,
            referenceId: saved.referenceId,
            message: "Growth plan quote request received.",
            record: saved,
        };
    }
    submitPartner(body) {
        const name = String(body?.name ?? "").trim();
        const phone = String(body?.phone ?? "").trim();
        if (!name || !phone) {
            throw new common_1.BadRequestException("Name and phone number are required.");
        }
        const saved = this.storage.create("partner", {
            name,
            phone,
            city: String(body?.city ?? "").trim(),
            partnerType: String(body?.partnerType ?? "").trim(),
            details: String(body?.details ?? "").trim(),
        });
        return {
            ok: true,
            referenceId: saved.referenceId,
            message: "Partnership application received.",
            record: saved,
        };
    }
    submitCareer(body) {
        const name = String(body?.name ?? "").trim();
        const position = String(body?.position ?? "").trim();
        if (!name || !position) {
            throw new common_1.BadRequestException("Name and position are required.");
        }
        const saved = this.storage.create("career", {
            name,
            position,
            email: String(body?.email ?? "").trim(),
            phone: String(body?.phone ?? "").trim(),
            portfolioUrl: String(body?.portfolioUrl ?? "").trim(),
        });
        return {
            ok: true,
            referenceId: saved.referenceId,
            message: "Job application submitted successfully.",
            record: saved,
        };
    }
    initiatePayment(body) {
        const invoiceNo = String(body?.invoiceNo ?? "").trim();
        const amount = Number(body?.amount ?? 0);
        const payerName = String(body?.payerName ?? "").trim();
        if (!invoiceNo || !payerName || !Number.isFinite(amount) || amount <= 0) {
            throw new common_1.BadRequestException("Valid invoice number, payer name, and positive amount are required.");
        }
        const saved = this.storage.create("payment", {
            invoiceNo,
            amount,
            payerName,
            status: "pending_gateway",
        });
        return {
            ok: true,
            referenceId: saved.referenceId,
            message: "Payment reference generated.",
            record: saved,
        };
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, common_1.Get)("health"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "health", null);
__decorate([
    (0, common_1.Get)("dashboard/stats"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "dashboardStats", null);
__decorate([
    (0, common_1.Get)("leads"),
    __param(0, (0, common_1.Query)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "listLeads", null);
__decorate([
    (0, common_1.Post)("leads/contact"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "submitContact", null);
__decorate([
    (0, common_1.Post)("leads/quote"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "submitQuote", null);
__decorate([
    (0, common_1.Post)("leads/partner"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "submitPartner", null);
__decorate([
    (0, common_1.Post)("leads/career"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "submitCareer", null);
__decorate([
    (0, common_1.Post)("payments/initiate"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "initiatePayment", null);
exports.LeadsController = LeadsController = __decorate([
    (0, common_1.Controller)("api"),
    __metadata("design:paramtypes", [storage_service_1.StorageService])
], LeadsController);
