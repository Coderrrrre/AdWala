export interface ApiSubmissionResponse {
  ok: boolean;
  referenceId: string;
  message: string;
}

async function postJson<T>(url: string, body: Record<string, unknown>): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const errMsg =
      typeof data?.message === "string"
        ? data.message
        : Array.isArray(data?.message)
        ? data.message.join(", ")
        : `Request failed (${res.status})`;
    throw new Error(errMsg);
  }
  return data as T;
}

export const api = {
  submitContact: (payload: Record<string, unknown>) =>
    postJson<ApiSubmissionResponse>("/api/leads/contact", payload),
  submitQuote: (payload: Record<string, unknown>) =>
    postJson<ApiSubmissionResponse>("/api/leads/quote", payload),
  submitPartner: (payload: Record<string, unknown>) =>
    postJson<ApiSubmissionResponse>("/api/leads/partner", payload),
  submitCareer: (payload: Record<string, unknown>) =>
    postJson<ApiSubmissionResponse>("/api/leads/career", payload),
  initiatePayment: (payload: Record<string, unknown>) =>
    postJson<ApiSubmissionResponse>("/api/payments/initiate", payload),
  getHealth: async () => {
    const res = await fetch("/api/health");
    return res.json();
  },
  getStats: async () => {
    const res = await fetch("/api/dashboard/stats");
    return res.json();
  },
};
