import getNewest from "@/utils/getNewest";
import List from "./components/blog/List";
import Image from "next/image";
import Link from "next/link";
const OPTIONS = { containScroll: "trimSnaps" };

export default async function Home() {
  const newest_posts = await getNewest();
  const first_post = newest_posts.find(() => true);
  const second_latest = newest_posts.slice(1, 3);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <h1 className="font-semibold text-center pt-[60px]"></h1>
      <div className="grid grid-cols-12 gap-4 md:grid-cols-12 mx-auto p-9">
        <div className="p-4 col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8 w-full">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <Link
              href={`/blog/details/${first_post.id}`}
              className="card w-100 glass"
            >
              <Image
                className="object-cover w-full"
                src={first_post.img}
                width={1200}
                height={600}
                layout="responsive"
                alt={first_post.title}
              />
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xs tracking-tight font-semibold text-white sm:text-sm md:text-xl lg:text-xl">
                  {first_post.title}
                </h4>
                <p className="leading-normal text-gray-100 sm:hidden md:text-xl lg:text-xl">
                  {first_post.short}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-2 col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 w-full">
          {second_latest.map((blog, index) => {
            return (
              <div className="pt-2" key={index.toString()}>
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <Link
                    href={`/blog/details/${blog.id}`}
                    key={index.toString()}
                    className="card w-100 glass"
                  >
                    <Image
                      className="object-cover w-full"
                      src={blog.img}
                      width={1200}
                      height={600}
                      layout="responsive"
                      alt={blog.title}
                    />
                    <div className="absolute top-0 left-0 px-6 py-4">
                      <h4 className="mb-3 text-xs font-semibold tracking-tight text-white sm:text-sm md:text-xl lg:text-xl">
                        {blog.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="font-semibold text-xl text-black text-left">
        Latest News
      </h1>
      {<List list={newest_posts} />}
    </main>
  );
}
