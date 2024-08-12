import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchBlogPost } from "../../redux/features/blog/blogSlice";
// import { selectBlogPostDetails, selectBlogStatus, selectBlogError} from "../../redux/features/blog/blogSelectors";

const View: React.FC = () => {
  const { id } = useParams<Record<string, string>>();
  const blogId = Number(id);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (blogId) {
      dispatch(fetchBlogPost(blogId));
    }
  }, [blogId, dispatch]);

  // 2nd way to dynamically add or remove body class name
  useEffect(() => {
    const body = document.body;
    body.classList.remove("index-page");
    body.classList.add("starter-page-page");
    return () => {
      body.classList.remove("starter-page-page");
      body.classList.add("index-page");
    };
  }, []);

  // Accessing state thorough the selectors
  // const blog = useSelector(selectBlogPostDetails);
  // const status = useSelector(selectBlogStatus);
  // const error = useSelector(selectBlogError);

  // Accessing state directly from the redux store
  const { selectedPost: blog, status, error } = useSelector((state: RootState) => state.blog);

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
              <li className="current">Blog</li>
              <li className="current">Details</li>
            </ol>
          </nav>
          <h1>View Blog</h1>
        </div>
      </div>
      {/* End Page Title */}

      {/* Blog Details Section */}
      <section id="starter-section" className="starter-section section">
        <div className="container" data-aos="fade-up">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" && blog && (
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
            </div>
          )}
        </div>
      </section>
      {/* End Starter Section */}
    </>
  );
};

export default View;
