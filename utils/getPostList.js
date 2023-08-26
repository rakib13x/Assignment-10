export default async function getPostList(id) {
    const res = await fetch(
      "https://basic-blog.teamrabbil.com/api/post-list/" + id
    );
    if (res.status == 200) {
      return res.json();
    } else {
      return [];
    }
  }
  