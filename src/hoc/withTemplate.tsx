/* eslint-disable react/display-name */
import { ComponentType } from 'react'
import { DefaultPageTmpl } from '@components/DefaultPageTmpl'

const withTemplate =
  (Wrapped: ComponentType): React.FC =>
  () => {
    return (
      <DefaultPageTmpl>
        <Wrapped />
      </DefaultPageTmpl>
    )
  }

export { withTemplate }
