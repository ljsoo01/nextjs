import Link from 'next/link';
import './header.css';

// 헤더 컴포넌트
export default function Header() {
  return (
    <header>
      <Link href="/">
        <h2>홈</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/blog">블로그</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}