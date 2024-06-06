"use client"
import { useFetchPostsById } from "@/app/customHooks/queries/post";

export default function Page({ params }: { params: { id: string } }) {
  console.log('params', params);
  const {data, error, isLoading} = useFetchPostsById(params.id);

  console.log('data', data)
  return <div>My Post: {params.id}</div>
}