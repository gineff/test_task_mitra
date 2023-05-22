import { FC, HTMLAttributes } from 'react'
import { PostItem } from '@components/PostItem'
import { Post as PostType } from '@constants/posts'

type PostItemProps = HTMLAttributes<HTMLElement> & {
  posts: PostType[]
}

const PostsList: FC<PostItemProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post: PostType) => (
        <PostItem key={post.id} {...post} />
      ))}
    </>
  )
}

export { PostsList }
