export function DownloadCV() {
  const blob = new Blob(["Hello, world!"], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cv.txt";
  a.click();
}
