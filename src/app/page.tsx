import Link from 'next/link'

export default function Home() {
  const links = [
    { href: 'mailto:hello@vieko.dev', label: 'email' },
    { href: 'https://github.com/vieko', label: 'github' },
    { href: 'https://twitter.com/vieko', label: 'twitter' },
    { href: 'https://devolverdigital.com', label: 'devolver' },
  ]

  return (
    <div className="flex h-[80vh] flex-col items-center md:h-[96vh]">
      <main className="flex flex-grow flex-col justify-center">
        <h1 className="text-slate selection:text-flame dark:text-paper text-center font-sans text-4xl font-normal tracking-wider">
          vieko franetovic
        </h1>
        <em className="text-stone selection:text-slate dark:selection:text-paper text-center font-mono text-sm tracking-wider not-italic">
          VEE-eh-ko
        </em>
      </main>
      <footer className="flex flex-grow-0">
        <nav className="flex flex-col justify-center space-x-4 sm:flex-row landscape:flex-row">
          {links.map(({ href, label }, index) => (
            <Link
              className="text-slate dark:text-paper hover:text-flame flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-base leading-none tracking-wider transition-colors duration-300"
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
