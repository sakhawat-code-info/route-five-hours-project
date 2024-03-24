import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Error from '../assets/error.jpg'

const Blog = ({ blog }) => {
    console.log(blog);
    const { cover_image, title, description, id } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-44' src={cover_image || Error} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title.slice(0, 15)}</h2>
                    <p>{description.slice(0, 60)}</p>
                    <div className="card-actions">
                        <Link to={`/blog/${id}`} ><button className="btn btn-primary">Show Details</button ></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};


Blog.propTypes = {
    blog: PropTypes.obj
};

export default Blog;