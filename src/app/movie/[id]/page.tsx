import { ActorList } from '@/entities/ActorList/ui/ActorList';
import { MoviePageCard } from '@/shared/ui/MoviePageCard/MoviePageCard';
import React from 'react';
// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())

//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }
//   const MoviePage = ({ params }) => {
//     const post = posts.find((post) => post.slug === params.slug);
//     if (!post) return null;
//     return <div>{post.title}</div>;
//   };
const getMovieData = async (id: number) => {
    const response = await fetch(`http://localhost:3030/api/v1/movie/${id}`);
    const data = await response.json();
    return data;
};
const MoviePage = async ({ params }: { params: { id: number } }) => {
    const data = await getMovieData(params.id);
    // console.log(data);
    return (
        <>
            <MoviePageCard {...data} />
            <ActorList {...data.actors} />
        </>
    );
};

export default MoviePage;
