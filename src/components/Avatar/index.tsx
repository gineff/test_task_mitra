import { FC, HTMLAttributes } from 'react'
import classnames from 'classnames'
import './Avatar.scss'

type AvatarProps = HTMLAttributes<HTMLElement> & {
  image?: string
  className?: string
  size?: 'small' | 'regular' | 'large' | 'auto'
  variant?: 'half-up' | undefined
}

const Avatar: FC<AvatarProps> = ({
  image,
  className: cls,
  size = 'small',
  variant,
  style,
  ...attr
}) => {
  return (
    <div
      className={classnames('avatar__container', {
        [`avatar_variant_${variant}`]: !!variant,
      })}>
      <div
        className={classnames(
          'avatar rounded-circle d-inline-block border',
          { [`avatar_size_${size}`]: 'auto' != size },
          cls
        )}
        style={{
          ...style,
          ...(image ? { backgroundImage: `url(${image})` } : {}),
        }}
        {...attr}></div>
    </div>
  )
}

export { Avatar }
