import Link from "next/link";
import style from "../pages/style.module.css";

export default function NavigateLink({ text, href, children }) {
  return (
    <Link href={href}>
      {children}
      <h2 className={style.link}>{text}</h2>
    </Link>
  );
}
