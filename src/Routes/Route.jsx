import Root from '../Layout/Root';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Bookmarks from "../pages/Bookmarks";
import Content from '../components/Content'
import Author from '../components/Author'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: "/blog/:id",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        path: 'content',
                        element: <Content></Content>
                    },
                    {
                        path: 'author',
                        element: <Author></Author>
                    }
                ]
            },
            {
                path: "/bookmarks",
                element: <Bookmarks></Bookmarks>,
            },
        ],
    },
]);
