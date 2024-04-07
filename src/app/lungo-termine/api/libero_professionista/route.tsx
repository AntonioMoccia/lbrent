import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend("re_M7y7FAJX_PwAdwnATbJLKhHNFUJUN4S7M");
//documento_identita
export async function POST(request: Request) {
  const formData = await request.formData();
  const documento_identita = formData.get("documento_identita") as File;
  if (!documento_identita) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }

  const contentFileArrayBuffer = await documento_identita.arrayBuffer();

  try {
    const data = await resend.emails.send({
      from: "Ditta individuale <onboarding@resend.dev>",
      to: ["moccia.ant@gmail.com"],
      subject: "Hello world",
      text: "Prova",
      attachments: [
        {
          filename: 'file.name',
          content: Buffer.from(contentFileArrayBuffer),
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
