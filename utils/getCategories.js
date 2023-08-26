export default async function getCategories() {
  const res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-categories"
  );
  if (res.status == 200) {
    return res.json();
  } else {
    return [];
  }
}
