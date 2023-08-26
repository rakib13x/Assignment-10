export default async function getNewest() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
  if (res.status == 200) {
    return res.json();
  } else {
    return [];
  }
}
