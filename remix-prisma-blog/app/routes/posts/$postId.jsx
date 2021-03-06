import { useLoaderData, Link, redirect } from 'remix';
import { db } from '~/utils/db.server';
import { getUser } from '~/utils/session.server';
import { getUsername } from '~/utils/post.server';

export const loader = async ({ request, params }) => {
  let user = await getUser(request);
  if (!user) {
    user = {
      id: null,
    };
  }

  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error('Post not found');

  console.log('made it here');
  const username = await getUsername(post.userId);
  // const username = post.userId;

  const data = { post, user, username };
  return data;
};

export const action = async ({ params, request }) => {
  const form = await request.formData();

  if (form.get('_method') === 'delete') {
    const user = await getUser(request);

    // Delete the post
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });

    if (!post) throw new Error('Post not found');

    if (user && post.userId == user.id) {
      await db.post.delete({ where: { id: params.postId } });
    }

    return redirect('/posts');
  }
};

function Post() {
  const data = useLoaderData();

  return (
    <div>
      <div className="page-header">
        <h1>{data.post.title} </h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <h3>Author: {data.username}</h3>
      <br />

      <div className="page-content">{data.post.body}</div>

      {data.user.id === data.post.userId && (
        <div className="page-footer">
          <form method="POST">
            <input type="hidden" name="_method" value="delete" />
            <button className="btn btn-delete">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Post;
