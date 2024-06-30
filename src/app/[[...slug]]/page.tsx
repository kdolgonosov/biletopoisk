'use client';
import { Filter } from '@/features/Filter';
import { SearchBar } from '@/features/SearchBar';
import { MovieList } from '@/entities/MovieList/ui/MovieList';
// import { useParams } from 'next/navigation';

export default function Page() {
    // const params = useParams();
    // console.log(slug.searchParams);
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Filter />
            <div>
                <SearchBar />
                <MovieList />
            </div>
        </div>
    );
}
