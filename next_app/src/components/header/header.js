import Link from 'next/link';
import './header.css';
import HeaderBackground from './header-background';
import logoImg from '@/assets/comic.png';
import Image from 'next/image';

// 헤더 컴포넌트
export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header>
        <Link href="/">
          {/* <img src={logoImg.src} alt="img"/> */}
          <Image src={logoImg}></Image>
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
    </>
  )
}