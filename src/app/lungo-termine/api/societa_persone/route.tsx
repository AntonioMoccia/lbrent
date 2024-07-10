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
  const tesserino_codice_fiscale = await toBuffer(
    formData.get("tesserino_codice_fiscale") as File
  );
  const visura_camerale = await toBuffer(
    formData.get("visura_camerale") as File
  );
  const ultimo_modello_unico_societa = await toBuffer(
    formData.get("ultimo_modello_unico_societa") as File
  );
  const quadro_iq = await toBuffer(formData.get("quadro_iq") as File);
  const ultimo_modello_unico_socio_accomodatario = await toBuffer(
    formData.get("ultimo_modello_unico_socio_accomodatario") as File
  );
  
  /**
  * documento_identita_firmatario
tesserino_codice_fiscale
visura_camerale
ultimo_modello_unico_societa
quadro_iq
ultimo_modello_unico_socio_accomodatario
  */

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
      from: "Societa persone <onboarding@resend.dev>",
      to: ["info@autonoleggiolbrent.it"],
      subject: "Richiesta lungo termine - Societa persone",
      react: (
        <EmailTemplate
          email={email as string}
          phonenumber={phonenumber as string}
          tipologia={"Societa persone"}
          nome={nome as string}
          cognome={cognome as string}
          iban={iban as string}
          cliente={cliente as string}
          marca_modello_auto={marca_modello_auto as string}
          optional={optional as string}
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
          filename: tesserino_codice_fiscale.fileName,
          content: tesserino_codice_fiscale.bufferFile,
        },
        {
          filename: visura_camerale.fileName,
          content: visura_camerale.bufferFile,
        },
        {
          filename: ultimo_modello_unico_societa.fileName,
          content: ultimo_modello_unico_societa.bufferFile,
        },
        {
          filename: quadro_iq.fileName,
          content: quadro_iq.bufferFile,
        },
        {
          filename: ultimo_modello_unico_socio_accomodatario.fileName,
          content: ultimo_modello_unico_socio_accomodatario.bufferFile,
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
