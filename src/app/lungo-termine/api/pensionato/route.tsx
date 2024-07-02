import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

import { toBuffer } from "@/lib/toBuffer";
const resend = new Resend(process.env.RESEND_API_KEY);
//documento_identita
export async function POST(request: Request) {
  const formData = await request.formData();
  const documento_identita = await toBuffer(
    formData.get("documento_identita") as File
  );
  const tesserino_codice_fiscale = await toBuffer(
    formData.get("tesserino_codice_fiscale") as File
  );
  const cedolino_pensione_730_cud = await toBuffer(
    formData.get("cedolino_pensione_730_cud") as File
  );


  const nome = formData.get("nome");
  const cognome = formData.get("cognome");
  const iban = formData.get("iban");
  const phonenumber = formData.get("phonenumber");
  const email = formData.get("email");

  try {
    const data = await resend.emails.send({
      from: "Pensionato <onboarding@resend.dev>",
      to: ["info@autonoleggiolbrent.it"],
      subject: "Richiesta lungo termine - Pensionato",
      react: (
        <EmailTemplate
          tipologia={"Pensionato"}
          nome={nome as string}
          cognome={cognome as string}
          iban={iban as string}
          phonenumber={phonenumber as string}
          email={email as string}
        />
      ),
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
          filename: cedolino_pensione_730_cud.fileName,
          content: cedolino_pensione_730_cud.bufferFile,
        }
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
