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
