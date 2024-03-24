import { useEffect, useState } from "react";
import { getDataFromLocalHost } from "../utility";
import Blog from "../components/Blog";


const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        const dataFromLocalStor = getDataFromLocalHost();
        setBookmarks(dataFromLocalStor);
    }, [])

    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {
                    bookmarks.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;