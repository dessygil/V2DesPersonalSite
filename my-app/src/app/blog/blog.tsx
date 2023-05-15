import React, { useState, useEffect } from "react";

export default function Blog() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=dessygil")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error connecting to Dev.to API");
      })
      .then((json) => {
        setRecentPosts(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderBlogTopics = (node) => {
    return node.tag_list
      .slice(0, 4)
      .map((node, index) => <li className="topic mr-2" key={index}>{node}</li>);
  };

  const renderBlogPosts = () => {
    return recentPosts.slice(0, 6).map((node, index) => (
      <div className="card main-cards flex-auto mb-4 w-80" key={index}>
        <div className="card-body flex flex-col justify-evenly mt-1">
          <p className="date-posted text-gray-500 text-xs mb-2">Posted: {node.created_at.slice(0,10)}</p>
          <h5 className="card-title my-card-title font-bold text-2xl overflow-ellipsis overflow-hidden">
            {node.title}
          </h5>
          <p className="card-text my-card-text overflow-ellipsis overflow-hidden text-black">
            {node.description}
          </p>
          <ul className="topics flex flex-row justify-start list-none m-4 p-0 text-sm text-gray-600">
            {renderBlogTopics(node)}
          </ul>
          <div className="button-container flex justify-center">
            <button className="button-56">
              <a className="no-features" href={node.url}>
                Read more!
              </a>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div id="Blog-anchor" className="blog-intro mt-48">
      <h2 className="numbered-heading">
        <a className="a-tag-no-features" href="https://dev.to/dessygil">Blog Posts</a>
      </h2>
      <div className="blog-posts flex flex-row flex-wrap mr-4">
        {recentPosts.length ? renderBlogPosts() : <p>Loading...</p>}
      </div>
    </div>
  );
}
