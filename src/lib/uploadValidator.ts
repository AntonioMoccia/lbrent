const ACCEPTED_FILE_TYPE = ["application/pdf"];
const MAX_FILE_SIZE_MB = 5; 
export const UploadValidator = (targetValue: FileList, fields: any, acceptedFile = ACCEPTED_FILE_TYPE, maxFileSize = MAX_FILE_SIZE_MB) => {
    const fileSizeInMB = targetValue[0].size / (1024 * 1024);

    if (acceptedFile.includes(targetValue[0].type)) {
      const files = Object.values(fields).filter(
        (key: any) =>
          key instanceof FileList && key[0]?.name == targetValue[0]?.name
      );
      if (files.length > 1) {
        return "Hai caricato due volte lo stesso file";
      } else {
        if (fileSizeInMB > maxFileSize) {
          return `Caricare un file max ${maxFileSize}MB`;
        } else {
          return true;
        }
      }
    } else {
      return "Caricare un file pdf";
    }
  };