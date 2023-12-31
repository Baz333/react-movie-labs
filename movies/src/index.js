import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from './pages/favouriteMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from './contexts/moviesContext';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 360000,
			refetchInterval: 360000,
			refetchOnWindowFocus: false
		},
	},
});

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<SiteHeader />
				<MoviesContextProvider>
					<Routes>
						<Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
						<Route path="/movies/:id" element={<MoviePage />} />
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<Navigate to ="/" />} />
						<Route path="/reviews/:id" element={<MovieReviewPage />} />
						<Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
						<Route path="/reviews/form" element={<AddMovieReviewPage />} />
					</Routes>
				</MoviesContextProvider>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);