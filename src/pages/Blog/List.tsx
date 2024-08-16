import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../../redux/features/blog/blogSlice";
// import { selectBlogPosts, selectBlogStatus, selectBlogError} from "../../redux/features/blog/blogSelectors";

const List: React.FC = () => {
  // 1st way to dynamically add or remove body class name 
  const location = useLocation();
  useEffect(() => {
    const body = document.body;
    body.classList.remove("index-page");
    body.classList.add("starter-page-page");
    return () => {
      body.classList.remove("starter-page-page");
      body.classList.add("index-page");
    };
  }, [location]);

  //
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(fetchPostsStart());
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        // console.log("Fetching posts", data);
        dispatch(fetchPostsSuccess(data));
      } catch (err) {
        const error = err as Error;
        dispatch(fetchPostsFailure(error.message));
      }
    };
    fetchPosts();
  }, [dispatch]);

  // Accessing state thorough the selectors
  // const posts = useSelector(selectBlogPosts);
  // const status = useSelector(selectBlogStatus);
  // const error = useSelector(selectBlogError);

  // Accessing state directly from the redux store
  const posts = useSelector((state: RootState) => state.blog.posts);
  const status = useSelector((state: RootState) => state.blog.status);
  const error = useSelector((state: RootState) => state.blog.error);

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Blogs</li>
            </ol>
          </nav>
          <h1>Starter Page</h1>
        </div>
      </div>
      {/* End Page Title */}

      {/* Starter Section */}
      <section id="starter-section" className="starter-section section">
        <div className="container" data-aos="fade-up">
          <div>
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" && (
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/blog/${post.id}`}>View Details</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      {/* End Starter Section */}
    </>
  );
};

export default List;
