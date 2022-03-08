import { useEffect } from "react";
import { useLoaderData, Link } from "remix";

export const loader = () => {
	return {
		posts: [
			{
				id: 1,
				title: "Post 1",
				body: "This is a test post",
			},
			{
				id: 2,
				title: "Post 2",
				body: "This is a test post",
			},
			{
				id: 3,
				title: "Post 3",
				body: "This is a test post",
			},
		],
	};
	// return data;
};

function PostItems() {
	const data = useLoaderData();

	return (
		<>
			<div className="page-header">
				<h1>Posts</h1>
				<Link to="/posts/new" className="btn">
					New Post
				</Link>
			</div>
			<ul className="posts-list">
				{data.posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>
							<h3>{post.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default PostItems;
