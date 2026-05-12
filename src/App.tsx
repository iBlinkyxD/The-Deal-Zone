import { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { DealDetailPage } from './pages/DealDetailPage'
import { DEALS } from './data/deals'

type Page = 'home' | 'detail'

export function App() {
  const [page, setPage] = useState<Page>('home')
  const [dealId, setDealId] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  const openDeal = (id: number) => {
    setDealId(id)
    setPage('detail')
  }

  return (
    <>
      <NavBar onLogoClick={() => setPage('home')} />
      {page === 'home' && <HomePage onOpenDeal={openDeal} />}
      {page === 'detail' && (
        <DealDetailPage deal={DEALS[dealId]} onBack={() => setPage('home')} />
      )}
    </>
  )
}
