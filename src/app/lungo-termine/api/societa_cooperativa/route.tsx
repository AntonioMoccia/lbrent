import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

import { toBuffer } from "@/lib/toBuffer";
const resend = new Resend("re_M7y7FAJX_PwAdwnATbJLKhHNFUJUN4S7M");
//documento_identita
export async function POST(request: Request) {
  const formData = await request.formData();
  const documento_identita_firmatario = await toBuffer(formData.get("documento_identita_firmatario") as File);
  const tesserino_codice_fiscale_firmatario = await toBuffer(formData.get("tesserino_codice_fiscale_firmatario") as File);
  const visura_camerale = await toBuffer(formData.get("visura_camerale") as File);
  const ultimo_modello_unico = await toBuffer(formData.get("ultimo_modello_unico") as File);
 

  const nome = formData.get("nome");
  const cognome = formData.get("cognome");
  const iban = formData.get("iban");


  try {
    const data = await resend.emails.send({
      from: "Societa cooperativa <onboarding@resend.dev>",
      to: ["moccia.ant@gmail.com"],
      subject: "Richiesta lungo termine - Societa cooperativa",
      react: <EmailTemplate tipologia={'societa cooperativa'} nome={nome as string} cognome={cognome as string} iban={iban as string} />,
      attachments: [
        {
          filename: documento_identita_firmatario.fileName,
          content: documento_identita_firmatario.bufferFile,
        },
        {
          filename: tesserino_codice_fiscale_firmatario.fileName,
          content: tesserino_codice_fiscale_firmatario.bufferFile,
        },
        {
          filename: visura_camerale.fileName,
          content: visura_camerale.bufferFile,
        },
        {
          filename: ultimo_modello_unico.fileName,
          content: ultimo_modello_unico.bufferFile,
        }
      ],
    });
    
    return Response.json(data);
    
  } catch (error) {
    
    return Response.json({ error });
  }
}
