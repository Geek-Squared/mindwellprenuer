import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchPosts() {
  return axios.get('http://localhost:3000/api/posts')
    .then(response => response?.data.docs);
}

function fetchPostsById(id: string) {
  return axios.get(`http://localhost:3000/api/posts/${id}`)
  .then((response) => response.data)
  
}

export function useFetchPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
}

export function useFetchPostsById(id: any) {
  return useQuery({
    queryKey: ['postById'],
    queryFn: () => fetchPostsById(id),
  });
}