import React from "react";
import {
  OptionField,
  SelectField,
  TextAreaField,
  TextField,
  UploadFile,
} from "./Fields";
import { FieldValues, UseFormReturn, useWatch } from "react-hook-form";

interface DettaglioNoleggioProps {
  form: UseFormReturn<FieldValues, any, undefined>;
}

function DettaglioNoleggio(props: DettaglioNoleggioProps) {
  const { form } = props;
  const ACCEPTED_FILE_TYPE = ["application/pdf"];
  const MAX_FILE_SIZE_MB = 5; // Imposta la dimensione massima del file consentita in MB

  const {
    register,
    formState: { errors },
    control,
    getValues,
    trigger,
  } = form;
  const UploadValidator = (targetValue: FileList, fields: any) => {
    const fileSizeInMB = targetValue[0].size / (1024 * 1024);

    if (ACCEPTED_FILE_TYPE.includes(targetValue[0].type)) {
      const files = Object.values(fields).filter(
        (key: any) =>
          key instanceof FileList && key[0]?.name == targetValue[0]?.name
      );
      if (files.length > 1) {
        return "Hai caricato due volte lo stesso file";
      } else {
        if (fileSizeInMB > MAX_FILE_SIZE_MB) {
          return "Caricare un file max 5MB";
        } else {
          return true;
        }
      }
    } else {
      return "Caricare un file pdf";
    }
  };
  const onChangeFileUpload = (e: any) => {
    const formValues: any = getValues();
    const targetName = e.currentTarget.name;
    const triggers = Object.keys(formValues).filter(
      (key) =>
        formValues[key] instanceof FileList &&
        key !== targetName &&
        formValues[key].length > 0
    );
    trigger([...triggers]);
  };
  const watcher = useWatch({ control });
  return (
    <>
      <h1 className="w-full px-5 font-bold mt-5">Dettaglio noleggio</h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <TextField
          type="text"
          placeholder="Marca, modello, auto"
          error={errors.marca_modello_auto?.message as string}
          value={watcher["marca_modello_auto"]}
          inputProps={register("marca_modello_auto", {
            required: "Campo obbligatorio",
          })}
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
              label: "Ibrido/ benzina",
              value: "ibrido/ benzina",
            },
            {
              label: "Ibrido/ diesel",
              value: "ibrido/ diesel",
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
          ]}
        />
      </div>
      <div className=" w-full grid grid-cols-1 gap-4 mt-5">
        <div className="p-2">
          <UploadFile
            testo="Vai sul sito del tuo marchio preferito, configura la tua auto e carica qui il file pdf della tua configurazione"
            error={errors.configurazione?.message as string}
            value={watcher["configurazione"]}
            inputProps={register("configurazione")}
            htmlFor="configurazione"
          />
        </div>
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
