import ArticleItem, { type IArticleItem } from './ArticleItem.tsx'

const articlesList: IArticleItem[] = [
  {
    imageUrl: '/img/image-retro-pcs.jpg',
    number: 1,
    title: 'Reviving Retro PCs',
    summary: 'What happens when old PCs are given modern upgrades?',
  },
  {
    imageUrl: '/img/image-top-laptops.jpg',
    number: 2,
    title: 'Top 10 Laptops of 2022',
    summary: 'Our best picks for various needs and budgets.',
  },
  {
    imageUrl: '/img/image-gaming-growth.jpg',
    number: 3,
    title: 'The Growth of Gaming',
    summary: 'How the pandemic has sparked fresh opportunities.',
  },
]

function ArticlesComponent() {
  return (
    <section className="flex flex-col gap-400 lg:col-span-full lg:flex-row lg:gap-500">
      {articlesList.map((article: IArticleItem) => (
        <ArticleItem key={article.number} item={article} />
      ))}
    </section>
  )
}

export default ArticlesComponent
