import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

import { toBuffer } from "@/lib/toBuffer";
const resend = new Resend(process.env.RESEND_API_KEY);
//documento_identita
export async function POST(request: Request) {
  const formData = await request.formData();
  const documento_identita_firmatario = await toBuffer(
    formData.get("documento_identita_firmatario") as File
  );
  const tesserino_codice_fiscale_firmatario = await toBuffer(
    formData.get("tesserino_codice_fiscale_firmatario") as File
  );
  const visura_camerale = await toBuffer(
    formData.get("visura_camerale") as File
  );
  const configurazione = await toBuffer(
    formData.get("configurazione") as File
  );
  const patente = await toBuffer(
    formData.get("patente") as File
  );
  const ultimo_bilancio = await toBuffer(
    formData.get("ultimo_bilancio") as File
  );
  const nota_integrativa = await toBuffer(
    formData.get("nota_integrativa") as File
  );
  const ricevuta_di_presentazione = await toBuffer(
    formData.get("ricevuta_di_presentazione") as File
  );
  const nome = formData.get("nome");
  const cognome = formData.get("cognome");
  const iban = formData.get("iban");
  const phonenumber = formData.get("phonenumber");
  const email = formData.get("email");
  const marca_modello_auto = formData.get("marca_modello_auto");
  const note = formData.get("note");
  const carburante = formData.get("carburante");
  const cambio = formData.get("cambio");
  const durata = formData.get("durata");
  const chilometri_annui = formData.get("chilometri_annui");

  try {
    const data = await resend.emails.send({
      from: "Societa cooperativa <onboarding@resend.dev>",
      to: ["info@autonoleggiolbrent.it"],
      subject: "Richiesta lungo termine - Societa cooperativa",
      react: (
        <EmailTemplate
          email={email as string}
          phonenumber={phonenumber as string}
          tipologia={"societa cooperativa"}
          nome={nome as string}
          cognome={cognome as string}
          iban={iban as string}
          marca_modello_auto={marca_modello_auto as string}
          note={note as string}
          carburante={carburante as string}
          cambio={cambio as string}
          durata={durata as string}
          chilometri_annui={chilometri_annui as string}
        />
      ),
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
          filename: configurazione.fileName,
          content: configurazione.bufferFile,
        },
        {
          filename: patente.fileName,
          content: patente.bufferFile,
        },
        {
          filename: ultimo_bilancio.fileName,
          content: ultimo_bilancio.bufferFile,
        },
        {
          filename: nota_integrativa.fileName,
          content: nota_integrativa.bufferFile,
        },
        {
          filename: ricevuta_di_presentazione.fileName,
          content: ricevuta_di_presentazione.bufferFile,
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
