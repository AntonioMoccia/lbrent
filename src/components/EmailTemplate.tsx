import * as React from "react";

interface EmailTemplateProps {
  tipologia: string;
  nome: string;
  cognome: string;
  iban: string;
  phonenumber:string
  email:string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  tipologia,
  nome,
  cognome,
  iban,
  phonenumber,
  email
}) => (
  <div>
    <h1>Richiesta lungo termine, da {tipologia}!</h1>
    <ul>
      <li>Nome: {nome}</li>
      <li>Cognome: {cognome}</li>
      <li>iban: {iban}</li>
      <li>numero di telefono: {phonenumber}</li>
      <li>email: {email}</li>
    </ul>
    <span>Documenti richiesti in allegato!</span>
  </div>
);
