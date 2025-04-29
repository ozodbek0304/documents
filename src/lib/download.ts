type Arg = {
    data: Blob | string;
    name?: string;
    extension?: string;
};

export function downloadFile({ data, name = "fayl", extension = ".pdf" }: Arg) {
    if (typeof data === "string") {
        const a = document.createElement("a");
        a.href = data;
        a.download = `${name}_${new Date().toISOString()}${extension}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    } else {
        const url = URL.createObjectURL(data);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${name}_${new Date().toISOString()}${extension}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
}
