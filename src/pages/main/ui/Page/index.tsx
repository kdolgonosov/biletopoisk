import { Filter } from '@/features/Filter';
import { SearchBar } from '@/features/SearchBar';
import { MovieList } from '@/entities/MovieList/ui/MovieList';
export const MainPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Filter />
            <div>
                <SearchBar />
                <MovieList />
            </div>
        </div>
    );
};
