"use client";
import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, UploadFile } from "./Fields";
import DittaIndividualeForm from "./DittaIndividualeForm";
function Form() {

  return (
    <div>
      <DittaIndividualeForm />
    </div>
  );
}

export default Form;
