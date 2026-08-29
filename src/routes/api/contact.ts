
import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const {
            name,
            email,
            phone,
            location,
            category,
            subcategory,
            message,
          } = body;

          // Validate required fields
          if (
            !name ||
            !email ||
            !phone ||
            !location ||
            !category ||
            !subcategory ||
            !message
          ) {
            return Response.json(
              {
                success: false,
                message: "Please fill all required fields.",
              },
              { status: 400 },
            );
          }

          // Create transporter
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          // ==========================================
          // 1. EMAIL TO COMPANY / ADMIN
          // ==========================================

await transporter.sendMail({
  from: `"BuildHive Solutions" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `New Project Request — ${category}`,

  html: `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#0b0b0b;
      font-family:Arial, Helvetica, sans-serif;
      color:#f4f0e8;
    ">

      <div style="
        max-width:700px;
        margin:0 auto;
        border:1px solid #292929;
        background:#111111;
      ">

        <!-- HEADER -->
        <div style="
          padding:35px 40px;
          border-bottom:1px solid #292929;
        ">

          <div style="
            font-size:12px;
            letter-spacing:4px;
            color:#ff5a1f;
            margin-bottom:15px;
          ">
            DESIGN · BUILD · GROW
          </div>

          <h1 style="
            margin:0;
            font-size:32px;
            font-weight:700;
            letter-spacing:-1px;
            color:#f4f0e8;
          ">
            New Project Request
          </h1>

          <p style="
            margin:12px 0 0;
            color:#8f8f8f;
            font-size:14px;
          ">
            A new enquiry has been submitted through the BuildHive website.
          </p>

        </div>


        <!-- CLIENT -->
        <div style="padding:35px 40px;">

          <div style="
            font-size:11px;
            letter-spacing:3px;
            text-transform:uppercase;
            color:#ff5a1f;
            margin-bottom:18px;
          ">
            01 / Client
          </div>

          <div style="
            border-top:1px solid #292929;
          ">

            <div style="
              padding:18px 0;
              border-bottom:1px solid #292929;
            ">
              <span style="color:#777;font-size:12px;">
                FULL NAME
              </span>

              <div style="
                margin-top:6px;
                color:#f4f0e8;
                font-size:16px;
              ">
                ${name}
              </div>
            </div>


            <div style="
              padding:18px 0;
              border-bottom:1px solid #292929;
            ">
              <span style="color:#777;font-size:12px;">
                EMAIL
              </span>

              <div style="
                margin-top:6px;
                color:#f4f0e8;
                font-size:16px;
              ">
                ${email}
              </div>
            </div>


            <div style="
              padding:18px 0;
              border-bottom:1px solid #292929;
            ">
              <span style="color:#777;font-size:12px;">
                PHONE
              </span>

              <div style="
                margin-top:6px;
                color:#f4f0e8;
                font-size:16px;
              ">
                ${phone}
              </div>
            </div>


            <div style="
              padding:18px 0;
              border-bottom:1px solid #292929;
            ">
              <span style="color:#777;font-size:12px;">
                PROJECT LOCATION
              </span>

              <div style="
                margin-top:6px;
                color:#f4f0e8;
                font-size:16px;
              ">
                ${location}
              </div>
            </div>

          </div>


          <!-- PROJECT -->
          <div style="
            margin-top:40px;
          ">

            <div style="
              font-size:11px;
              letter-spacing:3px;
              text-transform:uppercase;
              color:#ff5a1f;
              margin-bottom:18px;
            ">
              02 / Project
            </div>

            <div style="
              border:1px solid #292929;
              background:#0d0d0d;
              padding:25px;
            ">

              <div style="
                display:block;
                margin-bottom:20px;
              ">
                <span style="
                  color:#777;
                  font-size:11px;
                  letter-spacing:1px;
                ">
                  CATEGORY
                </span>

                <div style="
                  margin-top:6px;
                  color:#f4f0e8;
                  font-size:17px;
                  font-weight:bold;
                ">
                  ${category}
                </div>
              </div>


              <div style="
                margin-bottom:20px;
              ">
                <span style="
                  color:#777;
                  font-size:11px;
                  letter-spacing:1px;
                ">
                  SUBCATEGORY
                </span>

                <div style="
                  margin-top:6px;
                  color:#f4f0e8;
                  font-size:17px;
                ">
                  ${subcategory}
                </div>
              </div>


              <div>
                <span style="
                  color:#777;
                  font-size:11px;
                  letter-spacing:1px;
                ">
                  PROJECT DETAILS
                </span>

                <div style="
                  margin-top:10px;
                  color:#d5d0c7;
                  font-size:15px;
                  line-height:1.8;
                  white-space:pre-line;
                ">
                  ${message}
                </div>
              </div>

            </div>

          </div>


          <!-- ACTION -->
          <div style="
            margin-top:35px;
            padding:20px;
            border-left:3px solid #ff5a1f;
            background:#161616;
          ">

            <div style="
              color:#ff5a1f;
              font-size:11px;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              Action Required
            </div>

            <p style="
              margin:8px 0 0;
              color:#aaa;
              font-size:14px;
              line-height:1.6;
            ">
              Reply to this email to respond directly to the client.
            </p>

          </div>

        </div>


        <!-- FOOTER -->
        <div style="
          padding:25px 40px;
          border-top:1px solid #292929;
          background:#0d0d0d;
        ">

          <div style="
            font-size:12px;
            letter-spacing:3px;
            color:#f4f0e8;
          ">
            BUILDHIVE
          </div>

          <div style="
            margin-top:8px;
            font-size:10px;
            letter-spacing:2px;
            color:#666;
          ">
            DESIGN · BUILD · GROW
          </div>

        </div>

      </div>

    </div>
  `,
});

          // ==========================================
          // 2. CONFIRMATION EMAIL TO CLIENT
          // ==========================================

       await transporter.sendMail({
  from: `"BuildHive Solutions" <${process.env.EMAIL_USER}>`,
  to: email,
  replyTo: process.env.EMAIL_USER,
  subject: "Project Request Received — BuildHive Solutions",

  html: `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#0b0b0b;
      font-family:Arial, Helvetica, sans-serif;
      color:#f4f0e8;
    ">

      <div style="
        max-width:700px;
        margin:0 auto;
        border:1px solid #292929;
        background:#111111;
      ">

        <!-- HEADER -->
        <div style="
          padding:40px;
          border-bottom:1px solid #292929;
        ">

          <div style="
            font-size:12px;
            letter-spacing:4px;
            color:#ff5a1f;
            margin-bottom:20px;
          ">
            DESIGN · BUILD · GROW
          </div>

          <h1 style="
            margin:0;
            font-size:34px;
            line-height:1.2;
            letter-spacing:-1px;
            color:#f4f0e8;
          ">
            We received your request.
          </h1>

          <p style="
            margin:18px 0 0;
            color:#8f8f8f;
            font-size:15px;
            line-height:1.7;
          ">
            Thank you for reaching out to BuildHive Solutions.
            Your project enquiry is now with our team.
          </p>

        </div>


        <!-- CONTENT -->
        <div style="
          padding:40px;
        ">

          <p style="
            margin:0 0 25px;
            font-size:17px;
            color:#f4f0e8;
          ">
            Hi ${name},
          </p>

          <p style="
            margin:0 0 25px;
            color:#aaa;
            font-size:15px;
            line-height:1.8;
          ">
            We've successfully received your project request.
            Our team will review the details and get back to you
            within <strong style="color:#f4f0e8;">48 hours</strong>.
          </p>


          <!-- PROJECT CARD -->
          <div style="
            border:1px solid #292929;
            background:#0d0d0d;
            padding:28px;
            margin:30px 0;
          ">

            <div style="
              font-size:11px;
              letter-spacing:3px;
              color:#ff5a1f;
              margin-bottom:22px;
            ">
              YOUR PROJECT
            </div>


            <div style="
              padding-bottom:18px;
              margin-bottom:18px;
              border-bottom:1px solid #292929;
            ">

              <div style="
                font-size:10px;
                letter-spacing:1.5px;
                color:#666;
              ">
                CATEGORY
              </div>

              <div style="
                margin-top:7px;
                font-size:17px;
                color:#f4f0e8;
                font-weight:bold;
              ">
                ${category}
              </div>

            </div>


            <div style="
              padding-bottom:18px;
              margin-bottom:18px;
              border-bottom:1px solid #292929;
            ">

              <div style="
                font-size:10px;
                letter-spacing:1.5px;
                color:#666;
              ">
                SUBCATEGORY
              </div>

              <div style="
                margin-top:7px;
                font-size:17px;
                color:#f4f0e8;
              ">
                ${subcategory}
              </div>

            </div>


            <div>

              <div style="
                font-size:10px;
                letter-spacing:1.5px;
                color:#666;
              ">
                PROJECT LOCATION
              </div>

              <div style="
                margin-top:7px;
                font-size:17px;
                color:#f4f0e8;
              ">
                ${location}
              </div>

            </div>

          </div>


          <!-- NEXT STEP -->
          <div style="
            border-left:3px solid #ff5a1f;
            background:#161616;
            padding:22px;
            margin-top:30px;
          ">

            <div style="
              color:#ff5a1f;
              font-size:11px;
              letter-spacing:2px;
              text-transform:uppercase;
            ">
              What's next?
            </div>

            <p style="
              margin:10px 0 0;
              color:#aaa;
              font-size:14px;
              line-height:1.7;
            ">
              Our team will review your requirements and contact you
              with the next steps. If you need to add anything to your
              enquiry, simply reply to this email.
            </p>

          </div>


          <p style="
            margin:35px 0 0;
            color:#aaa;
            font-size:14px;
            line-height:1.7;
          ">
            We look forward to hearing more about your project.
          </p>


          <p style="
            margin:25px 0 0;
            color:#f4f0e8;
            font-size:15px;
            line-height:1.7;
          ">
            Best regards,<br />
            <strong>BuildHive Solutions</strong>
          </p>

        </div>


        <!-- FOOTER -->
        <div style="
          padding:30px 40px;
          border-top:1px solid #292929;
          background:#0d0d0d;
        ">

          <div style="
            font-size:13px;
            letter-spacing:4px;
            color:#f4f0e8;
          ">
            BUILDHIVE
          </div>

          <div style="
            margin-top:10px;
            font-size:10px;
            letter-spacing:2px;
            color:#666;
          ">
            DESIGN · BUILD · GROW
          </div>

          <div style="
            margin-top:18px;
            font-size:11px;
            color:#555;
          ">
            © ${new Date().getFullYear()} BuildHive Solutions.
            All rights reserved.
          </div>

        </div>

      </div>

    </div>
  `,
});

          // ==========================================
          // SUCCESS
          // ==========================================

          return Response.json({
            success: true,
            message:
              "Project request sent successfully. A confirmation email has been sent to the client.",
          });
        } catch (error) {
          console.error("Contact API Error:", error);

          return Response.json(
            {
              success: false,
              message:
                "Failed to send project request. Please try again later.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});