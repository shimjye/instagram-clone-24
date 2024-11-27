import React from 'react';
import { useContext } from 'react';
import { PostContext, PostContextType } from '../app/contexts/PostContext';
import { Post } from '../app/types';

// interface PostCardProps {
//   user: { username: string; profilePic: string };
//   image: string;
//   likes: number;
//   comments: number;
// }

const PostCard = ({postId}: { postId:number }) => {
  const { posts, addLike } = useContext(PostContext) as PostContextType;
  const post = posts.find((p:Post) => p.id === postId);

  return (
    <div className="rounded-md shadow-lg bg-white">
      {/* <div className="flex items-center p-4">
        <img src={user.profilePic} alt="profile" className="w-10 h-10 rounded-full" />
        <span className="ml-2 font-semibold">{user.username}</span>
      </div> */}
      <div className="post-card">
        <img src={post?.imageUrl} alt="Post" />
        <button onClick={() => addLike(postId)}>Like ({post?.likes})</button>
        {/* 댓글 및 기타 UI 추가 */}
      </div>
      {/* <img src={post.image} alt="post" className="w-full" /> */}
      {/* <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-2">
          <span className="icon">❤️</span>
          <span className="icon">💬</span>
          <span className="icon">🔗</span>
        </div>
        <span>{likes} likes</span>
      </div>
      <div className="px-4 py-2 text-gray-600">{comments} comments</div> */}
    </div>
  );
};

export default PostCard;