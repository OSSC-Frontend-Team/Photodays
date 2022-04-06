const processFile = (currentFile: File): Promise<string | ArrayBuffer | null>  => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(currentFile);
        reader.onload = () => {
            const result = reader.result;
            resolve(result);
        }
    })
}

export const parseFile = async (currentFile: File) => {
    const parsedFile: string | ArrayBuffer | null = await processFile(currentFile);

    return parsedFile;
}