import { createRoute } from "@hono/zod-openapi";
import { BlogIdSchema, BlogSchema, BlogsSchema, CreateBlogSchema, UpdateBlogSchema } from "../models/blogSchema";

export const getBlogsRoute = createRoute({
  path: "/",
  method: "get",
  description: "ブログの全記事を取得",
  responses: {
    200: {
      description: "成功",
      content: {
        "application/json": {
          schema: BlogsSchema
        }
      }
    }
  }
})

export const getBlogRoute = createRoute({
  path: "/{id}",
  method: "get",
  description: "ブログ個別記事の取得",
  request: {
    params: BlogIdSchema
  },
  responses: {
    200: { description: "成功", content: { "application/json": {schema: BlogSchema} } },
    404: { description: "取得失敗" },
  }
})

export const createBlogRoute = createRoute({
  path: "/",
  method: "post",
  description: "新しい記事の作成",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateBlogSchema
        }
      }
    }
  },
  responses: {
    201: {
      description:"成功",
      content: { "application/json": {
        schema: BlogSchema 
        } 
      }
    }
  }
})

export const updateBlogRoute = createRoute({
  path: "/{id}",
  method: "put",
  description: "記事の更新",
  request: {
    params: BlogIdSchema,
    body : {
      content: {
        "application/json": {
          schema: UpdateBlogSchema
        }
      }
    }
  },
  responses: {
    200: {
      description: "成功",
      content: { "application/json": {
          schema: BlogSchema
        }
      }
    },
    404: { description: "ブログが見つかりません" }
  }
})

export const deliteBlogRoute = createRoute({
  path: "/{id}",
  method: "delete",
  description: "記事の削除",
  request: {
    params: BlogIdSchema
  },
  responses: {
    200: {description: "削除完了"},
    404: { description: "ブログが見つかりません" }
  }
})
