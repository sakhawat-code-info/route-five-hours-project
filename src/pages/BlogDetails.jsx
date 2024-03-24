import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const { title } = blogDetails;

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
                <div>
                    <h1>btn</h1>
                </div>

                <div className="w-full mx-auto space-y-4 text-center">
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
                    <p className="text-sm dark:text-gray-600">by
                        <a rel="noopener noreferrer" href="#" target="_blank" className="underline dark:text-violet-600">
                        </a>on
                    </p>
                </div>
                <div role="tablist" className="tabs tabs-boxed">
                    <Link to="content" onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex === 0 && "tab-active"}`}>Content</Link>
                    <Link to="author" onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 && "tab-active"}`}>Author</Link>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </article>


        </div>
    );
};

export default BlogDetails;