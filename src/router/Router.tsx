import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { PageNotFound } from "../pages/PageNotFound/PageNotFound"

import { Photos } from "../pages/Photos/Photos"
import { Posts } from "../pages/Posts/Posts"
import { Users } from "../pages/Users/Users"
import { Comments } from "../pages/Comments/Comments"
import { RoootLayout } from "../layouts/RootLayout/RootLayout"
import { UserDetails } from "../pages/UserDetails/UserDetails"
import { PostDetails } from "../pages/PostDetails/PostDetails"
import { CommentDetail } from "../pages/CommentDetail/CommentDetail"
import { PhotoDetails } from "../pages/PhotoDetails/PhotoDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Photos />,
      },
      {
        path: "photos/:photoId",
        element: <PhotoDetails />
      },
      {
        path: "posts",
        element: <Posts />
      },
      {
        path: "posts/:postId",
        element: <PostDetails />
      },
      {
        path: "comments",
        element: <Comments />
      },
      {
        path: "comments/:commentId",
        element: <CommentDetail />
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
      },
    ]
  },
])

const Router = () => <RouterProvider router={router} />

export { Router }