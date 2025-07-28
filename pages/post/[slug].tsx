import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { type Post } from "../../typings";
import { PortableText } from "@portabletext/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
    post: Post;
}

type Inputs = {
    _id: string;
    name: string;
    email: string;
    comment: string;
};

const Post = ({ post }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        fetch("/api/createComment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                alert("Comment submitted successfully!");
                router.reload();
            })
            .catch((error) => {
                console.error("Error submitting comment:", error);
                alert("Failed to submit comment. Please try again later.");
            });
    };

    return (
        <>
            <Header />

            {/* Back Button */}
            <div className="max-w-4xl mx-auto mb-8 px-4 sm:px-6 lg:px-8 mt-4">
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900 rounded-md transition-colors duration-200"
                >
                    ← Back
                </button>
            </div>

            {/* Main Image */}
            <img
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
            />

            {/* Article */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="w-full p-4 sm:p-5 bg-secondaryColor/10">
                    <h1 className="font-titleFont font-semibold text-2xl sm:text-3xl md:text-4xl text-primary border-b border-cyan-800 mt-8 mb-3">
                        {post.title}
                    </h1>

                    <h2 className="font-bodyFont text-base sm:text-lg md:text-xl text-gray-400 mb-4">
                        {post.description}
                    </h2>

                    {/* Author and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <img
                                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
                                src={urlFor(post.author.image).url()}
                                alt={post.title}
                            />
                            <p className="font-bodyFont text-sm text-gray-300">
                                Blog post by{" "}
                                <span className="font-semibold text-secondaryColor">
                                    {post.author.name}
                                </span>
                            </p>
                        </div>
                        <span className="text-xs text-gray-400">
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                    </div>

                    {/* Blog Content */}
                    <div className="mt-8 text-white font-bodyFont leading-relaxed text-sm sm:text-base md:text-lg">
                        <PortableText
                            value={post.body}
                            components={{
                                block: {
                                    h1: ({ children }) => (
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-5 font-titleFont">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4 font-titleFont">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold my-3 font-titleFont">
                                            {children}
                                        </h3>
                                    ),
                                    normal: ({ children }) => (
                                        <p className="mb-4 text-gray-300">{children}</p>
                                    ),
                                },
                                listItem: {
                                    bullet: ({ children }) => (
                                        <li className="ml-6 list-disc text-gray-300">{children}</li>
                                    ),
                                },
                                marks: {
                                    link: ({ children, value }) => (
                                        <a
                                            href={value.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline"
                                        >
                                            {children}
                                        </a>
                                    ),
                                },
                            }}
                        />
                    </div>
                </article>
                <hr className="max-w-lg my-5 mx-auto border-[1px] border-secondaryColor" />
                <div>
                    <p className="text-xs text-secondaryColor uppercase font-titleFont font-bold">
                        Enjoy this article?
                    </p>
                    <h3 className="font-titleFont text-2xl sm:text-3xl font-bold">
                        Leave a Comment below!
                    </h3>
                    <hr className="p-3 mt-2" />
                    {/* Form */}
                    <input
                        {...register("_id")}
                        type="hidden"
                        name="_id"
                        value={post._id}
                        className="hidden"
                    />
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-6 space-y-5 sm:space-y-6"
                        action=""
                    >
                        {/* Name */}
                        <label className="flex flex-col">
                            <span className="font-titleFont font-semibold text-sm sm:text-base mb-1 text-white">
                                Name
                            </span>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter your Name"
                                className="bg-transparent border-b border-secondaryColor text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:border-primary focus:shadow-[0_1px_6px_0_rgba(255,255,255,0.15)] transition-all duration-200"
                            />
                        </label>

                        {/* Email */}
                        <label className="flex flex-col">
                            <span className="font-titleFont font-semibold text-sm sm:text-base mb-1 text-white">
                                Email
                            </span>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Enter your Email"
                                className="bg-transparent border-b border-secondaryColor text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:border-primary focus:shadow-[0_1px_6px_0_rgba(255,255,255,0.15)] transition-all duration-200"
                            />
                        </label>

                        {/* Comment */}
                        <label className="flex flex-col">
                            <span className="font-titleFont font-semibold text-sm sm:text-base mb-1 text-white">
                                Comment
                            </span>
                            <textarea
                                {...register("comment", { required: true })}
                                placeholder="Enter your Comment"
                                rows={4}
                                className="bg-transparent border-b border-secondaryColor text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:border-primary focus:shadow-[0_1px_6px_0_rgba(255,255,255,0.15)] transition-all duration-200 resize-none"
                            />
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-bgColor text-white text-sm sm:text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300"
                        >
                            Submit
                        </button>
                    </form>
                    {/* Comments Section */}
                    <div className="w-full flex flex-col p-6 sm:p-10 my-8 sm:my-10 mx-auto shadow-bgColor shadow-lg space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-titleFont font-semibold">
                            Comments
                        </h3>
                        <hr />
                        {post.comments.map((comment) => (
                            <div key={comment._id}>
                                <p>
                                    <span className="text-secondaryColor">{comment.name}</span>:{" "}
                                    {comment.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    author -> {
      name,
      image {
        asset,
        alt
      }
    },
    "comments": *[_type == "comment" && post._ref == ^._id]{
      _id,
      name,
      email,
      comment,
      _createdAt,
      Approved
    },
    description,
    mainImage {
      asset,
      alt
    },
    slug,
    body,
    publishedAt,
    categories[] -> {
      _id,
      title
    }
  }`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
};