import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { sanityClient, urlFor } from '../../sanity'
import { GetStaticProps } from 'next'
import { type Post } from '../../typings'
import { PortableText } from '@portabletext/react'

interface Props {
    post: Post
}

const Post = ({ post }: Props) => {
    const router = useRouter()

    return (
        <>
            <Header />

            {/* Back Button */}
            <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
                <button
                    onClick={() => router.back()}
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900 rounded-md transition-colors duration-200'
                >
                    ← Back
                </button>
            </div>

            {/* Main Image */}
            <img
                className='w-full h-96 object-cover md:h-[500px] sm:h-80 xs:h-64'
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
            />

            {/* Article */}
            <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
                <article className='w-full p-5 bg-secondaryColor/10'>
                    <h1 className='font-titleFont font-semibold text-3xl md:text-4xl text-primary border-b border-cyan-800 mt-10 mb-3'>
                        {post.title}
                    </h1>

                    <h2 className='font-bodyFont text-lg md:text-xl text-gray-400 mb-4'>
                        {post.description}
                    </h2>

                    {/* Author and Date */}
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4'>
                        <div className='flex items-center gap-3'>
                            <img
                                className='rounded-full w-12 h-12 object-cover'
                                src={urlFor(post.author.image).url()}
                                alt={post.title}
                            />
                            <p className='font-bodyFont text-sm text-gray-300'>
                                Blog post by{' '}
                                <span className='font-semibold text-secondaryColor'>
                                    {post.author.name}
                                </span>
                            </p>
                        </div>
                        <span className='text-xs text-gray-400'>
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                    </div>

                    {/* Blog Content */}
                    <div className='mt-10 text-white font-bodyFont leading-relaxed text-base md:text-lg'>
                        <PortableText
                            value={post.body}
                            components={{
                                block: {
                                    h1: ({ children }) => (
                                        <h1 className='text-3xl md:text-4xl font-bold my-5 font-titleFont'>
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className='text-2xl md:text-3xl font-semibold my-4 font-titleFont'>
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className='text-xl md:text-2xl font-semibold my-3 font-titleFont'>
                                            {children}
                                        </h3>
                                    ),
                                    normal: ({ children }) => (
                                        <p className='mb-4 text-gray-300'>{children}</p>
                                    ),
                                },
                                listItem: {
                                    bullet: ({ children }) => (
                                        <li className='ml-6 list-disc text-gray-300'>{children}</li>
                                    ),
                                },
                                marks: {
                                    link: ({ children, value }) => (
                                        <a
                                            href={value.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-400 hover:underline'
                                        >
                                            {children}
                                        </a>
                                    ),
                                },
                            }}
                        />
                    </div>
                </article>
                <hr className='max-w-lg my-5 mx-auto border[1px] border-secondaryColor' />
                <div>
                    <p className="text-xs text-secondaryColor uppercase font-titleFont font-bold">
                        Enjoy this article?
                    </p>
                    <h3 className="font-titleFont text-3xl font-bold">
                        Leave a Comment below!
                    </h3>
                    <hr className="p-3 mt-2" />
                    {/* Form will start here */}
                    <form action="">
                        <label className="flex flex-col">
                            <span className="font-titleFont font-semibold text-base">
                                Name
                            </span>
                            <input
                                className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
                                type='text'
                                placeholder='Enter your Name'
                            />
                        </label>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`

    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

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
  }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    }
}