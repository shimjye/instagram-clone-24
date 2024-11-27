// lib/data.ts
export const posts = [
    {
      id: 1,
      userId: "1",
      username: 'john_doe',
      imageUrl: 'https://via.placeholder.com/150',
      likes: 120,
      comments: [{ id: 1, postId: '1', username: 'john_doe', content: 'Great post!' }]
    },
    // 다른 게시물 추가
  ];
  
  export const users = [
    {
      username: 'john_doe',
      profilePicture: 'https://via.placeholder.com/150',
      bio: 'Photographer & Traveler'
    },
    // 다른 사용자 추가
  ];
