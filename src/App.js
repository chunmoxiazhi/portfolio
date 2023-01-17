import React, { Suspense } from 'react'
import Layout from './page/Layout'
// import './styles/index.scss'

import { useTranslation } from 'react-i18next';

function App () {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading">
      <main id="main">
        <Layout 
          t={t}
        />
      </main>
    </Suspense>
  )
}

export default App
