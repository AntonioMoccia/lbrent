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
  const configurazione = await toBuffer(
    formData.get("configurazione") as File
  );

  const patente = await toBuffer(
    formData.get("patente") as File
  );


  const nome = formData.get("nome");
  const cognome = formData.get("cognome");
  const iban = formData.get("iban");
  const phonenumber = formData.get("phonenumber");
  const email = formData.get("email");

  const cliente = formData.get("cliente");
  const marca_modello_auto = formData.get("marca_modello_auto");
  const optional = formData.get("optional");
  const note = formData.get("note");
  const carburante = formData.get("carburante");
  const cambio = formData.get("cambio");
  const durata = formData.get("durata");
  const chilometri_annui = formData.get("chilometri_annui");


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
        },
        {
          filename: configurazione.fileName,
          content: configurazione.bufferFile,
        },
        {
          filename: patente.fileName,
          content: patente.bufferFile,
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
