export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Values {
  name: string;
  email: string;
  phone: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostValues {
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  body: string;
}
