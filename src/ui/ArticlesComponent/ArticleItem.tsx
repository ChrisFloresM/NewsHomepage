export interface IArticleItem {
  imageUrl: string
  number: number
  title: string
  summary: string
}

interface IArticleItemProps {
  item: IArticleItem
}

function ArticleItem({ item }: IArticleItemProps) {
  const { imageUrl, number, title, summary } = item
  return (
    <article className="flex items-center gap-300 bg-white">
      <div className="max-w-[100px]">
        <img
          src={imageUrl}
          alt={`An illustrative picture for the article ${title}`}
        />
      </div>
      <section className="space-y-100">
        <div className="space-y-100">
          <span
            className="text-preset-3 leading-preset-3 font-bold text-red-500"
            aria-label={`Article number ${number}`}
          >
            {number.toString().padStart(2, '0')}
          </span>
          <h2>
            <a
              href="#"
              className="text-navy-950 visited:text-navy-950 text-preset-5 leading-preset-5 font-extrabold hover:text-red-500 active:text-red-500"
            >
              {title}
            </a>
          </h2>
        </div>
        <p className="text-preset-6 text-navy-600 leading-preset-6">
          {summary}
        </p>
      </section>
    </article>
  )
}

export default ArticleItem
