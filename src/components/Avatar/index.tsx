import { FC, HTMLAttributes } from 'react'
import classnames from 'classnames'
import './Avatar.scss'

type AvatarProps = HTMLAttributes<HTMLElement> & {
  image?: string
  className?: string
  size?: 'small' | 'regular' | 'large' | 'auto'
}

const Avatar: FC<AvatarProps> = ({
  image,
  className: cls,
  size = 'small',
  style,
  ...attr
}) => {
  console.log('image', image)

  return (
    <div className="avatar__container">
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
