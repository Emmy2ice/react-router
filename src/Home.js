import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblog] = useState([
        {title: 'My website', body: 'lorem ipsum...', author: 'Imuoh', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Chukwuemeka', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Emmanuel', id: 3}
    ])


    const handleDelete = (id) => {
        const newBlogs = blogs.filter (blog => blog.id !== id);
        setblog (newBlogs)
    }



    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = 'All Blogs' handleDelete = {handleDelete} />
        </div>
     );
}
 
export default Home;