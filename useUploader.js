import { useState } from "react";
import axios from "axios";

export function useUploader() {
    const [progress, setProgress] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [finalFiles, setFinalFiles] = useState([]);
    const [error, setError] = useState({ error: false });
    const [uploading, setUploading] = useState(false);

    const upload = async (e) => {

        const files = e.target.files;
        const chunkSize = 5 * 1024 * 1024;
        let totalSize = Array.from(files).reduce((a, b) => a + b.size, 0);
        let totalUploaded = 0;
        const tempFiles = [];
        const limit = 524288000;

        const uploadFile = async (file) => {
            const totalChunks = Math.ceil(file.size / chunkSize);
            const uploadId = Date.now();
            const uniqueFilename = `https://vweb.com.au/react-fast-uploader/database/enc/${uploadId}.${Math.floor(Math.random() * 1e8)}.${file.name.split('.').pop()}`;

            tempFiles.push(uniqueFilename);

            for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
                const start = chunkIndex * chunkSize;
                const end = Math.min(start + chunkSize, file.size);
                const chunk = file.slice(start, end);

                const formData = new FormData();
                formData.append("chunk", chunk);
                formData.append("upload_id", uploadId);
                formData.append("chunk_index", chunkIndex);
                formData.append("total_chunks", totalChunks);
                formData.append("filename", uniqueFilename);

                await axios.post("http://vweb.com.au/react-fast-uploader/engine.php", formData, {
                    onUploadProgress: (e) => {
                        totalUploaded += e.loaded;
                        const calculatedProgress = (totalUploaded / totalSize) * 100;
                        setProgress(Math.min(calculatedProgress, 100).toFixed(2));
                    },
                });
            }
        };

        if (totalSize < limit) {
            setUploading(true);
            await Promise.all(Array.from(files).map(uploadFile));
            setProgress("100.00");
            setUploadedFiles(tempFiles);
            setFinalFiles(tempFiles);
            setUploading(false);
        } else {
            setError({ error: true, msg: "Upload failed: The maximum allowed total upload size is 500 MB." });
        }

    };

    return { info: { progress: `${progress}٪`, files: uploadedFiles, uploading, error, uploaded: !uploading }, upload };
}
