/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, lazy, FC } from 'react'
import { Spinner } from 'react-bootstrap'

const useLazyComponent = (
  importFunc: () => Promise<{ default: FC<any> }>
): FC => {
  const Component = lazy(importFunc)

  const LazyComponent = (props: any) => (
    <Suspense
      fallback={
        <Spinner animation="grow" variant="light" className="m-4 p-4" />
      }>
      <Component {...props} />
    </Suspense>
  )

  return LazyComponent
}

export { useLazyComponent }
