export default async function getPostDetails(id) {
  const res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-details/" + id
  );
  if (res.status == 200) {
    return res.json();
  } else {
    return [];
  }
}
