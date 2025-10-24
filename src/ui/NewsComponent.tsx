interface INewsItem {
  title: string
  summary: string
}

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
  return <section></section>
}

export default NewsComponent
