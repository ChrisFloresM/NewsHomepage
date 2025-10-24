import NewsItem, { type INewsItem } from './NewsItem.tsx'

const newsList: INewsItem[] = [
  {
    title: 'Hydrogen VS Electric Cars',
    summary: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    summary:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying UP?',
    summary:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
]

function NewsComponent() {
  return (
    <section className="bg-navy-950 space-y-400 px-300 py-200">
      <header>
        <h2 className="text-gold-400 text-preset-3 leading-preset-3 font-bold">
          New
        </h2>
      </header>
      <ul className="divide-navy-600 divide-y">
        {newsList.map((item: INewsItem) => (
          <NewsItem item={item} key={item.title} />
        ))}
      </ul>
    </section>
  )
}

export default NewsComponent
