import { useEffect, useRef, useState } from 'react';

const navigationLinks: string[] = [
  'Home',
  'New',
  'Popular',
  'trending',
  'categories',
];

const navBaseClass =
  'bg-navy-950 fixed top-0 right-0 flex h-dvh w-2/3 flex-col gap-1100' +
  ' px-[36px] py-[27px] sm:w-1/3 lg:relative lg:h-auto lg:w-auto lg:translate-x-0 lg:gap-0' +
  ' lg:bg-white lg:p-0 transition-transform duration-300 ease-in-out z-50';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Identify when a mobile device is being used
  useEffect(() => {
    function checkMobile(): void {
      setIsMobile(window.innerWidth < 1024);
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && menuOpen) {
      const navElement = navRef.current;
      const focusableElements = navElement
        ? navElement.querySelectorAll('button, a')
        : [];
      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      function handleTabKeyPress(e: KeyboardEvent) {
        if (e.key == 'Tab') {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }

      function handleEscapePress(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          setMenuOpen(false);
        }
      }

      navElement?.addEventListener('keydown', handleTabKeyPress);
      navElement?.addEventListener('keydown', handleEscapePress);

      return () => {
        navElement?.removeEventListener('keydown', handleTabKeyPress);
        navElement?.removeEventListener('keydown', handleEscapePress);
      };
    }
  }, [isMobile, menuOpen]);

  return (
    <>
      <button
        type="button"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        aria-label="Open the navigation menu"
        className="focus:ring-navy-950 flex h-[17px] w-[40px] flex-col gap-[4px] space-y-[1px] hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none lg:hidden"
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
        id="nav-menu"
        aria-hidden={isMobile && !menuOpen}
        inert={isMobile && !menuOpen}
        ref={navRef}
      >
        <button
          type="button"
          aria-label="Close the navigation menu"
          className="focus:ring-gold-400 relative ml-auto flex h-[17px] w-[40px] hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none lg:hidden"
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
                className="text-preset-5 text-gold-400 lg:text-preset-6 lg:leading-preset-6 lg:text-navy-600 lg:visited:not-hover:text-navy-600 transition-all hover:cursor-pointer hover:text-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none active:text-red-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
