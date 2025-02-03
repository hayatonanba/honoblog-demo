import { hono } from "@/lib/hono/client";

export default async function Home() {
 const res = await hono.api.blogs.$get()
 const blogs = await res.json()
 console.log(blogs)

  return (
    <div>
      
    </div>
  );
}
