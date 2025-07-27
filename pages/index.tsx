import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Image from "next/image";
import Link from "next/link";

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <div className="bg-mainBgColor text-textColor min-h-screen">
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        <Header />
        <Banner />
        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>

        {/* ============ Posts Start here ============ */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="rounded-md overflow-hidden bg-[#1a1a1a] border border-gray-700 hover:border-[#00FFC3] shadow-md transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_0_12px_#00FFCB55] flex flex-col justify-between group cursor-pointer">

                {/* IMAGE SECTION */}
                <div className="w-full h-[220px] overflow-hidden image-container">
                  <Image
                    width={380}
                    height={350}
                    src={
                      post.mainImage && urlFor(post.mainImage).url()
                        ? urlFor(post.mainImage).url()!
                        : "/images/banner/nubelson-fernandes-jTpKCvH8A0E-unsplash.jpg"
                    }
                    alt="blog image"
                    className="w-full h-full object-cover brightness-75 transition-transform duration-300 group-hover:scale-100 image-zoom"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-400 line-clamp-3">{post.description}</p>
                  </div>

                  {/* AUTHOR & DATE */}
                  <div className="border-t border-secondaryColor border-opacity-30 pt-3 mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full object-cover"
                        src={
                          post.author?.image
                            ? urlFor(post.author.image).url()
                            : "/images/user.png"
                        }
                        alt={post.author?.alt || post.author?.name || "Author image"}
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author?.name}</p>
                      </div>
                    </div>
                    {post.publishedAt && (
                      <p className="text-xs text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </main>

      <style jsx global>{`
        .image-container:hover .image-zoom {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name, 
      image,
      alt
    },
    description,
    mainImage,
    slug,
    alt,
    publishedAt
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
