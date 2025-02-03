import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { createBlogRoute, deliteBlogRoute, getBlogRoute, getBlogsRoute, updateBlogRoute } from "./routes/blogRoutes";
import { createBlogHandler, deliteBlogHandler, getBlogHandler, getBlogsHandler, updateBlogHandler } from "./controllers/blog/getBlogs";

export const app = new OpenAPIHono().basePath("/api");

const blogApp = new OpenAPIHono()
  .openapi(getBlogsRoute, getBlogsHandler)
  .openapi(getBlogRoute, getBlogHandler)
  .openapi(createBlogRoute, createBlogHandler)
  .openapi(updateBlogRoute, updateBlogHandler)
  .openapi(deliteBlogRoute, deliteBlogHandler);

  const route = app.route("/blogs", blogApp);

  app.doc("/specification", {
    openapi: "3.0.0",
    info: { title: "Blog API", version: "1.0.0" },
  });
  
  app.get("/doc", swaggerUI({ url: "/api/specification" }));

export type AppType = typeof route;
export default app;