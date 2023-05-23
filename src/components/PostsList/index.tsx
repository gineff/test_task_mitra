import { FC, HTMLAttributes } from 'react'
import { PostItem } from '@components/PostItem'
import { Post as PostType } from '@constants/posts'

type PostItemProps = HTMLAttributes<HTMLElement> & {
  posts: PostType[]
  showAvatar?: boolean
}

const PostsList: FC<PostItemProps> = ({ posts, showAvatar = true }) => {
  return (
    <div className="posts-list p-2">
      {posts.map((post: PostType) => (
        <PostItem key={post.id} showAvatar={showAvatar} {...post} />
      ))}
    </div>
  )
}

export { PostsList }
