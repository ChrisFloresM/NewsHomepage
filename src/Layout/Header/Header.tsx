import NavigationBar from '../../ui/HeaderComponent/NavComponent.tsx'

function Header() {
  return (
    <header className="m-auto mb-400 flex max-w-[608px] items-center justify-between lg:mb-800 lg:max-w-[1112px]">
      <div>
        <img src="/icons/logo.svg" alt="logo" />
      </div>
      <NavigationBar />
    </header>
  )
}

export default Header
