import { useState } from 'react'

const navigationLinks: string[] = [
  'Home',
  'New',
  'Popular',
  'trending',
  'categories',
]

const navBaseClass =
  'bg-navy-950 fixed top-0 right-0 flex h-dvh w-2/3 flex-col gap-1100' +
  ' px-[36px] py-[27px] sm:w-1/3 lg:relative lg:h-auto lg:w-auto lg:translate-x-0 lg:gap-0' +
  ' lg:bg-white lg:p-0 transition-transform duration-300 ease-in-out z-50'

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="flex h-[17px] w-[40px] flex-col gap-[4px] space-y-[1px] hover:cursor-pointer lg:hidden"
        onClick={() => setMenuOpen(true)}
      >
        <span className="bg-navy-950 m-0 inline-block h-[3px] w-full"></span>
        <span className="bg-navy-950 m-0 inline-block h-[3px] w-full"></span>
        <span className="bg-navy-950 m-0 inline-block h-[3px] w-full"></span>
      </button>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-hidden="true"
        />
      )}
      <nav
        className={`${menuOpen ? 'translate-x-0' : 'translate-x-full'} ${navBaseClass}`}
      >
        <button
          type="button"
          className="relative ml-auto flex h-[17px] w-[40px] hover:cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <span className="bg-gold-400 absolute inline-block h-[3px] w-full origin-center rotate-45"></span>
          <span className="bg-gold-400 absolute inline-block h-[3px] w-full origin-center -rotate-45"></span>
        </button>
        <ul className="flex flex-col gap-300 lg:flex-row lg:gap-500 lg:p-0 lg:pt-0">
          {navigationLinks.map((link: string) => (
            <li key={link}>
              <a
                href="#"
                className="text-preset-5 leading-preset-5 text-gold-400 lg:text-preset-6 lg:leading-preset-6 lg:text-navy-600 lg:visited:not-hover:text-navy-600 transition-colors hover:cursor-pointer hover:text-red-500 active:text-red-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavigationBar
