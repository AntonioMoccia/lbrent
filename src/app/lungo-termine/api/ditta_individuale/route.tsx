import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend("re_M7y7FAJX_PwAdwnATbJLKhHNFUJUN4S7M");

const toBuffer = async (
  file: File
): Promise<{ bufferFile: Buffer; fileName: string }> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return {
    bufferFile: buffer,
    fileName: file.name,
  };
};
//documento_identita
export async function POST(request: Request) {
  const formData = await request.formData();
  const documento_identita = await toBuffer(formData.get("documento_identita") as File);
  const tesserino_codice_fiscale = await toBuffer(formData.get("tesserino_codice_fiscale") as File);
  const visura_camerale = await toBuffer(formData.get("visura_camerale") as File);
  const ultimo_modello_unico = await toBuffer(formData.get("ultimo_modello_unico") as File);
  const quadro_iq = await toBuffer(formData.get("quadro_iq") as File);

  const nome = formData.get("nome");
  const cognome = formData.get("cognome");
  const iban = formData.get("iban");


  try {
  /*   const data = await resend.emails.send({
      from: "Ditta individuale <onboarding@resend.dev>",
      to: ["moccia.ant@gmail.com"],
      subject: "Hello world",
      text: "Prova",
      attachments: [
        {
          filename: documento_identita.fileName,
          content: documento_identita.bufferFile,
        },
        {
          filename: tesserino_codice_fiscale.fileName,
          content: tesserino_codice_fiscale.bufferFile,
        },
        {
          filename: visura_camerale.fileName,
          content: visura_camerale.bufferFile,
        },
        {
          filename: ultimo_modello_unico.fileName,
          content: ultimo_modello_unico.bufferFile,
        },
        {
          filename: quadro_iq.fileName,
          content: quadro_iq.bufferFile,
        },
      ],
    });

    return Response.json(data); */
    return new Response('',{status:200})
  } catch (error) {
    return Response.json({ error });
  }
}
