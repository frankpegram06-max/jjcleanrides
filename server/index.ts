import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  message: string;
  date: string;
}

const reviews: Review[] = [
  { id: "1", name: "Ned Robertson", location: "Southampton", rating: 5, message: "Absolutely spotless — couldn't believe the difference. Jack is thorough, professional and takes real pride in his work.", date: "2026-02-10" },
  { id: "2", name: "Theo Down", location: "Totton", rating: 5, message: "Great local service, turned up on time and did an amazing job. Car looked showroom fresh. Will be booking again for sure.", date: "2026-02-18" },
  { id: "3", name: "George SB", location: "New Forest", rating: 5, message: "Used Jack for the deep detail and it was worth every penny. Car looks brand new inside and out.", date: "2026-02-25" },
  { id: "4", name: "Josh Elsea", location: "Lyndhurst", rating: 5, message: "Really impressed with the quality. Booked the Quick Detail and it was great value — done quickly and to a high standard.", date: "2026-03-04" },
  { id: "5", name: "Matty Taylor", location: "Fareham", rating: 5, message: "Booked the outside only package and my car hasn't looked this clean since I bought it. Plates blurred in photos too which I appreciated!", date: "2026-03-08" },
  { id: "6", name: "Riley Maynard", location: "Hythe", rating: 5, message: "Super convenient — comes straight to your door and the results speak for themselves. Highly recommend to anyone in the area.", date: "2026-03-12" },
  { id: "7", name: "Ava Pegram", location: "Southampton", rating: 5, message: "Fantastic service, very professional. The interior clean was incredible — looks and smells brand new.", date: "2026-03-15" },
  { id: "8", name: "Frank Pegram", location: "Totton", rating: 5, message: "Best valet I've had. Jack is reliable, detailed and genuinely cares about the finish. Would not go anywhere else.", date: "2026-03-19" },
];

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
      // Email to Jack
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

      // Confirmation email to customer
      await resend.emails.send({
        from: "JJCleanRides <onboarding@resend.dev>",
        to: email,
        subject: `Booking Received — JJCleanRides`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0d1b35; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">
                JJ<span style="color: #38bdf8;">Clean</span>Rides
              </h1>
              <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">Booking Confirmation</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
              <h2 style="color: #0d1b35; margin: 0 0 8px;">Hi ${name},</h2>
              <p style="color: #475569; line-height: 1.6;">Thanks for your enquiry! Jack has received your booking request and will be in touch within 24 hours to confirm your appointment and send your payment link.</p>
              <div style="background: #f1f5f9; border-radius: 6px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 12px; font-weight: 600; color: #0d1b35;">Your booking summary:</p>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 6px 0; color: #64748b; font-size: 13px; width: 140px;">Package</td><td style="padding: 6px 0; font-weight: 600; color: #0ea5e9;">${pkg}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b; font-size: 13px;">Vehicle</td><td style="padding: 6px 0;">${vehicle}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b; font-size: 13px;">Preferred Date</td><td style="padding: 6px 0;">${date}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b; font-size: 13px;">Location</td><td style="padding: 6px 0;">${location}</td></tr>
                </table>
              </div>
              <p style="color: #475569; font-size: 14px; line-height: 1.6;">Any questions? Reply to this email or call Jack on <strong>07762 847782</strong>.</p>
              <p style="color: #475569; font-size: 14px;">— Jack, JJCleanRides</p>
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

  // ── Reviews endpoints ───────────────────────────────────────────
  app.get("/api/reviews", (_req, res) => {
    res.json(reviews);
  });

  app.post("/api/reviews", async (req, res) => {
    const { name, location, rating, message } = req.body;

    if (!name || !rating || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const review: Review = {
      id: Date.now().toString(),
      name,
      location: location || "",
      rating: Math.min(5, Math.max(1, Number(rating))),
      message,
      date: new Date().toISOString().split("T")[0],
    };

    reviews.push(review);

    // Notify Jack of new review
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "JJCleanRides <onboarding@resend.dev>",
        to: "jj1103200825@gmail.com",
        subject: `New ${rating}★ Review from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #0d1b35;">New review on JJCleanRides</h2>
            <p><strong>${name}</strong>${location ? ` — ${location}` : ""} left a <strong>${rating}/5 star</strong> review:</p>
            <blockquote style="border-left: 3px solid #38bdf8; padding-left: 16px; color: #475569; font-style: italic;">"${message}"</blockquote>
          </div>
        `,
      });
    } catch (err) {
      console.error("Review notification error:", err);
    }

    return res.status(201).json(review);
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
