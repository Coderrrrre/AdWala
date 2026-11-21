import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from "@nestjs/common";
import { StorageService, SubmissionType } from "./storage.service";

@Controller("api")
export class LeadsController {
  constructor(private readonly storage: StorageService) {}

  @Get("health")
  health() {
    return {
      status: "ok",
      agency: "AD Wala",
      backend: "NestJS",
      timestamp: new Date().toISOString(),
    };
  }

  @Get("dashboard/stats")
  dashboardStats() {
    return {
      agency: "AD Wala",
      ...this.storage.stats(),
    };
  }

  @Get("leads")
  listLeads(@Query("type") type?: SubmissionType) {
    return {
      items: this.storage.list(type),
    };
  }

  @Post("leads/contact")
  submitContact(@Body() body: Record<string, unknown>) {
    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || (!phone && !email)) {
      throw new BadRequestException(
        "Name and either phone or email are required."
      );
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

  @Post("leads/quote")
  submitQuote(@Body() body: Record<string, unknown>) {
    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    if (!name || !phone) {
      throw new BadRequestException("Name and phone number are required.");
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

  @Post("leads/partner")
  submitPartner(@Body() body: Record<string, unknown>) {
    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    if (!name || !phone) {
      throw new BadRequestException("Name and phone number are required.");
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

  @Post("leads/career")
  submitCareer(@Body() body: Record<string, unknown>) {
    const name = String(body?.name ?? "").trim();
    const position = String(body?.position ?? "").trim();
    if (!name || !position) {
      throw new BadRequestException("Name and position are required.");
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

  @Post("payments/initiate")
  initiatePayment(@Body() body: Record<string, unknown>) {
    const invoiceNo = String(body?.invoiceNo ?? "").trim();
    const amount = Number(body?.amount ?? 0);
    const payerName = String(body?.payerName ?? "").trim();

    if (!invoiceNo || !payerName || !Number.isFinite(amount) || amount <= 0) {
      throw new BadRequestException(
        "Valid invoice number, payer name, and positive amount are required."
      );
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
}
