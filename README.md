
# ⚡ react-fast-uploader

> Upload files in React **instantly** — with just one line. No backend code. No config. Just speed, progress, and unlimited file size — using your own **free PHP server**.  

![npm version](https://img.shields.io/npm/v/react-fast-uploader.svg)
![downloads](https://img.shields.io/npm/dw/react-fast-uploader)
![license](https://img.shields.io/npm/l/react-fast-uploader)

---

## 🚀 Features

- ✅ **One-line integration** with a simple React Hook
- 🔄 **Auto chunked uploading** (up to 100GB+)
- 📦 **Built-in progress tracking**
- 💡 **No external services** (works with your own PHP server)
- 🧠 **Fully customizable** backend URL and config
- 🔐 **Secure, open source, unlimited uploads**

---

## 📦 Installation

```bash
npm install react-fast-uploader
```

---

## ⚙️ Usage

```jsx
import { useFastUploader } from "react-fast-uploader";

function Upload() {
  const { handleChange, files, progress } = useFastUploader();

  return (
    <>
      <input type="file" multiple onChange={handleChange} />

      {progress.map((p, i) => (
        <div key={i}>
          {p.name} — {p.percent}%
        </div>
      ))}

      <ul>
        {files.map(file => (
          <li key={file.id}>
            ✅ {file.name} — <a href={file.url}>Download</a>
          </li>
        ))}
      </ul>
    </>
  );
}
```

## 🧪 Output Format

```js
[
  "https://server.com/uploads/73638377383.mp4",
  ...
]
```
---

## 💬 Community

👋 Built with ❤️ by [Muhammad Jazib](https://github.com/itxmuhammadjazib)  
📬 Suggestions or issues? [Open an issue](https://github.com/yourrepo/react-fast-uploader/issues)

---

## 📄 License

MIT — free to use, modify, and contribute.
