import * as React from "react";

interface EmailTemplateProps {
  tipologia: string;
  nome: string;
  cognome: string;
  iban: string;
  phonenumber: string;
  email: string;
  cliente: string;
  marca_modello_auto: string;
  optional: string;
  note: string;
  carburante: string;
  cambio: string;
  durata: string;
  chilometri_annui: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  tipologia,
  nome,
  cognome,
  iban,
  phonenumber,
  email,
  cliente,
  marca_modello_auto,
  optional,
  note,
  carburante,
  cambio,
  durata,
  chilometri_annui,
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
    <h1>Dettaglio Noleggio</h1>
    <ul>
      <li>Cliente: {cliente}</li>
      <li>Marca,Modello.Auto: {marca_modello_auto}</li>
      <li>Carburante {carburante}</li>
      <li>Cambio: {cambio}</li>
      <li>Durata: {durata}</li>
      <li>Chilometri annui: {chilometri_annui}</li>
      <li>
        Optional: <span>{optional}</span>
      </li>
      <li>
        Note: <span>{note}</span>
      </li>
    </ul>
    <span>Documenti richiesti in allegato!</span>
  </div>
);
