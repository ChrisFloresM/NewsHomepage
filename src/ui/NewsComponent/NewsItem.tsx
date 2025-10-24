export interface INewsItem {
  title: string
  summary: string
}

interface INewsItemProps {
  item: INewsItem
}

function NewsItem({ item }: INewsItemProps) {
  const { title, summary } = item
  return (
    <li className="not-first:not-last:py-400 first:pb-400 last:pt-400">
      <h3 className="text-preset-4 leading-preset-4 text-gold-400 font-extrabold">
        {title}
      </h3>
      <p className="text-preset-6 text-grey-300 font-normal">{summary}</p>
    </li>
  )
}

export default NewsItem
