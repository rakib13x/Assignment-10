import GoBack from "@/app/components/Goback";
import Details from "@/app/components/blog/Details";
import getPostDetails from "@/utils/getPostDetails";
import getNewest from "@/utils/getNewest";

const page = async ({ params }) => {
  const id = params.id;
  const blog = await getPostDetails(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <Details blog={blog.postDetails} />
      <GoBack />
    </main>
  );
};

export async function generateStaticParams() {
  const posts = await getNewest();

  return posts.map((post) => ({
    id: "" + post.id,
  }));
}

export default page;
