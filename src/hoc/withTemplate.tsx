/* eslint-disable react/display-name */
import { ComponentType, HTMLAttributes } from 'react'
import { DefaultPageTmpl } from '@components/DefaultPageTmpl'

type withTemplateProps = HTMLAttributes<HTMLElement> & { showNav?: false }

const withTemplate =
  (Wrapped: ComponentType, props?: withTemplateProps): React.FC =>
  () => {
    return (
      <DefaultPageTmpl {...props}>
        <Wrapped />
      </DefaultPageTmpl>
    )
  }

export { withTemplate }
