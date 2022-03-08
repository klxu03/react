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
		<div>
			<h1>Posts</h1>
			<ul className="posts-list">
				{data.posts.map((post) => (
					<li key={post.id}>
						<Link to={post.id}>
							<h3>{post.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostItems;
