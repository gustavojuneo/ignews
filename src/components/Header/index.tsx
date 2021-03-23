import Link from 'next/link'

import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.leftContent}>
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="ig.news" />
            </a>
          </Link>
          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>
        </div>
        <SignInButton />
      </div>
    </header>
  )
}
