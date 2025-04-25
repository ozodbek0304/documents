type Arg = {
    data: Blob |  string;
    name?: string;
    extension?: string;
};

export function downloadFile({ data, name = "fayl", extension = ".pdf" }: Arg) {
    const blob = new Blob([data]);
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}_${new Date().toISOString()}${extension}`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
}
