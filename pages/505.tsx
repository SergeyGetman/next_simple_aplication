import stylesError from "../style/A.module.css";

export default function Custom500() {
  return (
    <div className={stylesError.server__error__style}>
      500 - Server-side error occurred
    </div>
  );
}
