export const toBuffer = async (
    file: File
): Promise<{ bufferFile: Buffer; fileName: string }> => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return {
        bufferFile: buffer,
        fileName: file.name,
    };
};