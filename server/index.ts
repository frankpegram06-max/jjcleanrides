import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ── Enquiry email endpoint ──────────────────────────────────────
  app.post("/api/enquiry", async (req, res) => {
    const { name, email, phone, location, vehicle, package: pkg, date, notes } = req.body;

    if (!name || !email || !phone || !location || !vehicle || !pkg || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "JJCleanRides <onboarding@resend.dev>",
        to: "jj1103200825@gmail.com",
        replyTo: email,
        subject: `New Enquiry — ${pkg} — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0d1b35; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">
                JJ<span style="color: #38bdf8;">Clean</span>Rides
              </h1>
              <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">New Booking Enquiry</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0ea5e9;">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Location</td><td style="padding: 8px 0;">${location}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Vehicle</td><td style="padding: 8px 0;">${vehicle}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Package</td><td style="padding: 8px 0; font-weight: 600; color: #0ea5e9;">${pkg}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Preferred Date</td><td style="padding: 8px 0;">${date}</td></tr>
                ${notes ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Notes</td><td style="padding: 8px 0;">${notes}</td></tr>` : ""}
              </table>
              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 12px; margin: 0;">Reply directly to this email to contact the customer.</p>
              </div>
            </div>
          </div>
        `,
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Email error:", err);
      return res.status(500).json({ error: "Failed to send email" });
    }
  });

  // ── Static files ────────────────────────────────────────────────
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
