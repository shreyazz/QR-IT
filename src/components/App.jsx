import React, { useEffect, useState } from "react";
import "../index.css";
import {
  FaLink,
  FaEnvelope,
  FaComment,
  FaTwitter,
  FaLinkedin,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import QRCode from "qrcode";
import * as htmlToImage from "html-to-image";

const App = () => {
  const [text, setText] = useState("QR Code is OP");
  const [mode, setMode] = useState("text");
  const [subject, setSubject] = useState("subject");
  const [body, setBody] = useState("body");
  const [email, setEmail] = useState("pahuneshreyas@gmail.com");
  const [url, setUrl] = useState("www.google.com");
  const [smsNumber, setSmsNumber] = useState("+911234567890");
  const [smsBody, setSmsBody] = useState("This is demo SMS Body");
  const [twitterUserName, setTwitterUserName] = useState("PahuneShreyas");
  const [linkedinUsername, setLinkedinUsername] = useState("shreyas-pahune");
  useEffect(() => {
    setMode("text");
    setText("QR is op!! is't it?");
  }, []);

  const downloadImage = () => {
    htmlToImage
      .toJpeg(document.getElementById("qr"), { quality: 1.5 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "qr-code.jpeg";
        link.href = dataUrl;
        link.click();
        console.clear();
      });
  };
  const handleSetMode = (e) => {
    setMode(e.target.className);
  };

  const handleChange = (e) => {
    if (e.target.id === "subject") {
      setSubject(e.target.value);
    } else if (e.target.id === "body") {
      setBody(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "twitter") {
      setTwitterUserName(e.target.value);
    } else if (e.target.id === "number") {
      setSmsNumber(e.target.value);
    } else if (e.target.id === "smsMessage") {
      setSmsBody(e.target.value);
    } else if (e.target.id === "text") {
      setText(e.target.value);
    } else if (e.target.id === "linkedin") {
      setLinkedinUsername(e.target.value);
    }
  };

  const opts = {
    errorCorrectionLevel: "M",
    type: "image/jpeg",
    quality: 0.3,
    margin: 1,
    color: {
      light: "#023e8a",
      dark: "#F5F5F5",
    },
  };

  useEffect(() => {
    QRCode.toDataURL("QR Code is OP", opts).then((some) => setUrl(some));
  }, []);

  let mailFormat = `mailto:${email}?subject=${subject}&body=${body}`;
  let messageFormat = `sms:${smsNumber}&body=${smsBody}`;
  let twitterFormat = `https://twitter.com/${twitterUserName}`;
  let textFormat = `${text}`;
  let linkedinFormat = `https://www.linkedin.com/in/${linkedinUsername}/`;
  if (mode === "email") {
    QRCode.toDataURL(mailFormat, opts).then((some) => setUrl(some));
  } else if (mode === "message") {
    QRCode.toDataURL(messageFormat, opts).then((some) => setUrl(some));
  } else if (mode === "twitter") {
    QRCode.toDataURL(twitterFormat, opts).then((some) => setUrl(some));
  } else if (mode === "text") {
    QRCode.toDataURL(textFormat, opts).then((some) => setUrl(some));
  } else if (mode === "text") {
    QRCode.toDataURL(textFormat, opts).then((some) => setUrl(some));
  } else if (mode === "linkedin") {
    QRCode.toDataURL(linkedinFormat, opts).then((some) => setUrl(some));
  }

  return (
    <>
      <div className="center">
        <div className="left">
          {mode === "text" && (
            <div className="inputWrapper">
              <p>Enter your text </p>
              <input
                type="text"
                autoComplete="off"
                id="text"
                onChange={handleChange}
                placeholder="text here..."
              />
            </div>
          )}

          {mode === "url" && (
            <div className="inputWrapper">
              <p>Enter your link </p>
              <input
                type="url"
                autoComplete="off"
                onChange={handleChange}
                placeholder="text here..."
              />
            </div>
          )}

          {mode === "twitter" && (
            <div className="inputWrapper">
              <p>Enter your Twitter Username </p>

              <input
                autoComplete="off"
                type="text"
                id="twitter"
                onChange={handleChange}
                placeholder="twitter username here..."
              />
            </div>
          )}

          {mode === "message" && (
            <div className="inputWrapper">
              <p>Enter your message </p>

              <input
                autoComplete="off"
                type="text"
                onChange={handleChange}
                id="number"
                placeholder="+919111002356"
              />
              <textarea
                autoComplete="off"
                type="text"
                id="smsMessage"
                onChange={handleChange}
                placeholder="Enter your message"
              />
            </div>
          )}

          {mode === "email" && (
            <div className="inputWrapper">
              <p>Email </p>

              <input
                type="text"
                autoComplete="off"
                onChange={handleChange}
                placeholder="someone@email.com"
                id="email"
              />

              <input
                type="text"
                autoComplete="off"
                onChange={handleChange}
                placeholder="subject"
                id="subject"
              />

              <textarea
                type="text"
                autoComplete="off"
                onChange={handleChange}
                placeholder="email message/body"
                id="body"
              />
            </div>
          )}

          {mode === "linkedin" && (
            <div className="inputWrapper">
              <p>Enter your LinkedIn username</p>

              <input
                type="text"
                autoComplete="off"
                onChange={handleChange}
                placeholder="your profile"
                id="linkedin"
              />
            </div>
          )}
        </div>

        <div className="right">
          <img src={url} alt="" className="qr-img" id="qr" />
          <div className="btn-group">
            <button className="primary-btn btn" onClick={() => downloadImage()}>
              <FaDownload className="download-icon" /> JPEG
            </button>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <div className="footer">
        <div className="url" onClick={handleSetMode} title="URL">
          <FaLink className="icon" title="URL" />
        </div>
        <div className="text" onClick={handleSetMode} title="Text">
          <FaFileAlt className="icon" title="text" />
        </div>
        <div id="email" onClick={handleSetMode} title="Email" className="email">
          <FaEnvelope className="icon" />
        </div>
        <div className="message" onClick={handleSetMode} title="Message">
          <FaComment className="icon" />
        </div>
        <div className="twitter" onClick={handleSetMode} title="Twitter">
          <FaTwitter className="icon" />
        </div>
        <div className="linkedin" onClick={handleSetMode} title="LinkedIn">
          <FaLinkedin className="icon" />
        </div>
      </div>
    </>
  );
};

export default App;
