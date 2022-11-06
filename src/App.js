import React, {Suspense} from 'react'
const Main = React.lazy(() => import('./Main'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Main/>
      </Suspense>
    </div>
  )
}

export default App