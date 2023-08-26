import Image from "next/image";
import Link from "next/link";
const List = (props) => {
  return (
    <div>
      <div className="mx-auto p-9">
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.list.map((blog, index) => {
            return (
              <Link
                href={`/blog/details/${blog.id}`}
                key={index.toString()}
                className="card w-100 glass"
              >
                <figure>
                  <Image
                    src={blog.img}
                    width={1200}
                    height={600}
                    layout="responsive"
                    alt={blog.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p>{blog.short}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
