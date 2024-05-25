import Link from "next/link";
import './header.css';

export default function Header() {
  return(
    <header>
      <Link href="/">
        <h2>홈</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}