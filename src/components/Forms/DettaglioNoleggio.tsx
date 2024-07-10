import React from "react";
import { OptionField, SelectField, TextAreaField, TextField } from "./Fields";
import { FieldValues, UseFormReturn, useWatch } from "react-hook-form";

interface DettaglioNoleggioProps {
  form: UseFormReturn<FieldValues, any, undefined>;
}

function DettaglioNoleggio(props: DettaglioNoleggioProps) {
  const { form } = props;

  const {
    register,
    formState: { errors },
    control,
  } = form;

  const watcher = useWatch({ control });
  return (
    <>
      <h1 className="w-full px-5 font-bold mt-5">Dettaglio noleggio</h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <TextField
          type="text"
          placeholder="Cliente"
          error={errors.cliente?.message as string}
          value={watcher["cliente"]}
          inputProps={register("cliente")}
        />
        <TextField
          type="text"
          placeholder="Marca, modello, auto"
          error={errors.marca_modello_auto?.message as string}
          value={watcher["marca_modello_auto"]}
          inputProps={register("marca_modello_auto")}
        />
      </div>
      <div className=" w-full grid grid-cols-1 gap-4 mt-5">
        <OptionField
          label="Carburante"
          form={form}
          classes=" "
          name="carburante"
          defaultValue="diesel"
          options={[
            {
              label: "Diesel",
              value: "diesel",
            },
            {
              label: "Benzina",
              value: "benzina",
            },
            {
              label: "GPL",
              value: "GPL",
            },
            {
              label: "Metano",
              value: "metano",
            },
            {
              label: "Ibrido",
              value: "ibrido",
            },
          ]}
        />
        <OptionField
          label="Cambio"
          form={form}
          classes=" "
          name="cambio"
          defaultValue="automatico"
          options={[
            {
              label: "A",
              value: "automatico",
            },
            {
              label: "M",
              value: "manuale",
            },
          ]}
        />
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <SelectField
          name="durata"
          placeholder="Durata"
          form={form}
          optionValues={[
            {
              value: "12",
              label: "12",
            },
            {
              value: "24",
              label: "24",
            },
            {
              value: "36",
              label: "36",
            },
            {
              value: "48",
              label: "48",
            },
            {
              value: "60",
              label: "60",
            },
          ]}
        />
        <SelectField
          name="chilometri_annui"
          form={form}
          placeholder="KM (Annui)"
          optionValues={[
            {
              value: "5",
              label: "5 mila",
            },
            {
              value: "10",
              label: "10 mila",
            },
            {
              value: "15",
              label: "15 mila",
            },
            {
              value: "20",
              label: "20 mila",
            },
            {
              value: "25",
              label: "25 mila",
            },
            {
              value: "30",
              label: "30 mila",
            },
            {
              value: "35",
              label: "35 mila",
            },
            {
              value: "40",
              label: "40 mila",
            },
            {
              value: "45",
              label: "45 mila",
            },
            {
              value: "50",
              label: "50 mila",
            },
            {
              value: "55",
              label: "55 mila",
            },
            {
              value: "60",
              label: "60 mila",
            },
          ]}
        />
      </div>
      <div className=" w-full grid grid-cols-1 gap-4 mt-5">
        <TextAreaField
          inputProps={register("optional")}
          error={errors.optional?.message as string}
          value={watcher["optional"]}
          placeholder="Optionals"
        />
        <TextAreaField
          inputProps={register("note")}
          error={errors.note?.message as string}
          value={watcher["note"]}
          placeholder="Note"
        />
      </div>
    </>
  );
}

export default DettaglioNoleggio;
