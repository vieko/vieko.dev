import Link from 'next/link'
import Toggle, { ToggleProvider } from '@/components/toggle'

export default function Home() {
  const links = [
    { href: 'mailto:hello@vieko.dev', label: 'email' },
    { href: 'https://github.com/vieko', label: 'github' },
    { href: 'https://twitter.com/vieko', label: 'twitter' },
    { href: 'https://devolverdigital.com', label: 'devolver' },
  ]

  return (
    <ToggleProvider>
      <div className="flex h-dvh flex-col items-center">
        <main className="flex flex-grow flex-col justify-center">
          <h1 className="text-slate selection:text-flame/60 dark:text-paper text-center font-sans text-3xl font-normal tracking-wider md:text-5xl">
            <Toggle id="vieko" toggleClass="text-flame">
              vieko
            </Toggle>{' '}
            <Toggle id="franetovic" toggleClass="text-flame">
              franetovic
            </Toggle>
          </h1>
          <em className="text-stone selection:text-flame/60 dark:selection:text-flame/60 text-center font-mono text-sm tracking-wider not-italic md:my-4">
            <Toggle id="pronunciation" toggleClass="text-slate dark:text-paper">
              VEE-eh-ko
            </Toggle>
          </em>
        </main>
        <footer className="my-10 flex flex-grow-0 justify-center md:my-16">
          <nav className="flex flex-col items-center gap-8 sm:flex-row md:gap-6 landscape:flex-row">
            {links.map(({ href, label }, index) => (
              <Link
                className="text-slate dark:text-paper hover:text-flame cursor-pointer text-base leading-none tracking-wider transition-colors duration-300"
                key={index}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </footer>
      </div>
    </ToggleProvider>
  )
}
