import NewsComponent from '../../ui/NewsComponent/NewsComponent.tsx'
import PrincipalArticle from '../../ui/PrincipalArticle/PrincipalArticle.tsx'
import ArticlesComponent from '../../ui/ArticlesComponent/ArticlesComponent.tsx'

function Main() {
  return (
    <main className="m-auto grid max-w-[608px] grid-cols-1 gap-500 lg:max-w-[1112px] lg:grid-cols-3 lg:gap-x-400 lg:gap-y-800">
      <PrincipalArticle />
      <NewsComponent />
      <ArticlesComponent />
    </main>
  )
}

export default Main
