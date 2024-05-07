import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { toBuffer } from "@/lib/toBuffer";

const resend = new Resend("re_M7y7FAJX_PwAdwnATbJLKhHNFUJUN4S7M");

//documento_identita
export async function POST(request: Request) {
  const formData = await request.formData();
  const documento_identita = await toBuffer(
    formData.get("documento_identita") as File
  );
  const tesserino_codice_fiscale = await toBuffer(
    formData.get("tesserino_codice_fiscale") as File
  );
  const visura_camerale = await toBuffer(
    formData.get("visura_camerale") as File
  );
  const ultimo_modello_unico = await toBuffer(
    formData.get("ultimo_modello_unico") as File
  );
  const quadro_iq = await toBuffer(formData.get("quadro_iq") as File);

  const nome = formData.get("nome");
  const cognome = formData.get("cognome");
  const iban = formData.get("iban");
  const phonenumber = formData.get("phonenumber");
  const email = formData.get("email");

  try {
    const data = await resend.emails.send({
      from: "Ditta individuale <onboarding@resend.dev>",
      to: ["moccia.ant@gmail.com"],
      subject: "Richiesta lungo termine - Ditta individuale",
      react: (
        <EmailTemplate
          tipologia={"ditta individuale"}
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

    return Response.json(data);
  } catch (error) {

    return Response.json({ error });
  }
}
