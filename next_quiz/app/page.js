import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='./about'>about 페이지</Link>
      <br />
      <Link href='./blog'>blog 페이지</Link>
    </>
  );
}
