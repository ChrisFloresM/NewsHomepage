import NewsComponent from './ui/NewsComponent/NewsComponent.tsx'
import ArticleItem from './ui/ArticleItem.tsx'

const testItem = {
  imageUrl: '/img/image-retro-pcs.jpg',
  number: 1,
  title: 'Reviving Retro PCs',
  summary: 'What happens when old PCs are' + ' given modern upgrades?',
}

function App() {
  return <ArticleItem item={testItem} />
}

export default App
