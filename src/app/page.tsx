import Link from 'next/link'

export default function Home() {
  const links = [
    { href: 'https://github.com/vieko', label: 'github' },
    { href: 'https://twitter.com/vieko', label: 'twitter' },
    { href: 'mailto:vieko@devolverdigital.com', label: 'email' },
    { href: 'https://devolverdigital.com', label: 'devolver' },
  ]

  return (
    <div className="flex h-[80vh] flex-col items-center md:h-[96vh]">
      <main className="flex flex-grow flex-col justify-center">
        <h1 className="text-slate selection:text-flame-light dark:text-paper dark:selection:text-flame-dark text-center font-sans text-4xl font-normal tracking-wider">
          vieko franetovic
        </h1>
        <em className="text-stone-dark selection:text-slate dark:text-stone-dark dark:selection:text-paper text-center font-mono tracking-wider not-italic">
          VEE-eh-ko
        </em>
      </main>
      <footer className="flex h-[20vh] flex-grow-0 md:h-[4vh]">
        <nav className="flex flex-col justify-center gap-x-2 gap-y-1 sm:flex-row landscape:flex-row">
          {links.map(({ href, label }, index) => (
            <Link
              className="text-slate dark:hover:text-flame-dark dark:text-paper hover:text-flame-light cursor-pointer px-4 py-2 text-center text-base tracking-wider transition-colors duration-150"
              key={index}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  )
}
