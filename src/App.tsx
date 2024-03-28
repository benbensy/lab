import './App.css'
import { BaseLayout } from '@/layouts/BaseLayout'
import { Banner } from './components/banner/Banner'
import { Intro } from './components/intro/Intro'
import { Digi } from './components/digi/Digi'
import { Blog } from './components/blog/Blog'
import { Partner } from './components/partner/Partner'

function App() {
  return (
    <BaseLayout>
      <Banner />
      <Intro />
      <Digi />
      <Blog />
      <Partner />
    </BaseLayout>
  )
}

export default App
