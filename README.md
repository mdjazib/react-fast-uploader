# ⚡ React Fast Uploader

![npm version](https://img.shields.io/npm/v/react-fast-uploader.svg)
![downloads](https://img.shields.io/npm/dw/react-fast-uploader)
![license](https://img.shields.io/npm/l/react-fast-uploader?color=blue)

[![Instagram](https://img.shields.io/badge/Instagram-@itxmuhammadjazib-E4405F?style=flat&logo=instagram)](https://instagram.com/itxmuhammadjazib)
[![GitHub](https://img.shields.io/badge/GitHub-@mdjazib-181717?style=flat&logo=github)](https://github.com/mdjazib)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

> A lightning-fast file uploader for React applications. Built with ❤️ by [Muhammad Jazib](https://github.com/mdjazib) at [VWeb Australia](https://vweb.com.au)

---

## ✨ Features

- 🚀 **Lightning Fast** – Chunked uploads (5MB chunks)
- 📊 **Real-time Progress** – Track upload status instantly
- 🔄 **Multiple Files** – Upload many files at once
- ⚡ **Simple Integration** – Just one hook, that’s it!
- 🛡️ **Smart Validation** – 500MB size limit protection
- 📱 **Mobile Ready** – Works everywhere

---

## 🚀 Quick Start

```bash
npm install react-fast-uploader
```

---

## 💡 Super Simple Usage

```jsx
import { useUploader } from 'react-fast-uploader';

function App() {
  const { info, upload } = useUploader();

  return (
    <div>
      <input type="file" multiple onChange={upload} />
      {info.uploading && <p>Uploading: {info.progress}</p>}
    </div>
  );
}
```

---

## 🎯 What You Get

```jsx
const { info, upload } = useUploader();

// info = {
//   progress: "75%",         // Upload progress
//   files: [...],            // Uploaded file URLs
//   uploading: true/false,   // Upload status
//   error: {...},            // Error details if any
//   uploaded: true/false     // Upload complete?
// }
```

---

## 🌟 Real World Example

```jsx
import { useUploader } from 'react-fast-uploader';

function FileUploader() {
  const { info, upload } = useUploader();

  return (
    <div className="uploader">
      <input type="file" multiple onChange={upload} />

      {info.uploading && (
        <div className="progress">
          <p>Uploading... {info.progress}</p>
          <progress value={parseFloat(info.progress)} max="100" />
        </div>
      )}

      {info.error?.error && (
        <div className="error">
          {info.error.msg}
        </div>
      )}

      {info.uploaded && (
        <div className="success">
          <h3>✨ Upload Complete!</h3>
          <ul>
            {info.files.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

---

## 🛠️ Under the Hood

- **Chunked Uploads**: Files are split into 5MB chunks for smooth uploading
- **Progress Tracking**: Real-time progress for both single and multiple files
- **Error Handling**: Smart error detection and user-friendly messages
- **Size Validation**: Prevents uploads over 500MB total size

---

## 🤝 Support & Community

- 💬 **Questions?** [Open an issue](https://github.com/mdjazib/react-fast-uploader/issues)
- 📸 **Follow me** on [Instagram](https://instagram.com/itxmuhammadjazib)
- 🌐 **Visit** [VWeb Australia](https://vweb.com.au)

---

## 📄 License

ISC © [Muhammad Jazib](https://github.com/mdjazib)

---

**🇦🇺 Made with ❤️ in Australia**