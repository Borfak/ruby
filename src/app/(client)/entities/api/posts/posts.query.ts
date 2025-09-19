import { useQuery } from '@tanstack/react-query';
import { postsApi } from './posts.api';

export const POSTS_QUERY_KEYS = {
	all: ['posts'] as const,
	lists: () => [...POSTS_QUERY_KEYS.all, 'list'] as const,
	list: (filters: Record<string, unknown>) => [...POSTS_QUERY_KEYS.lists(), { filters }] as const,
	details: () => [...POSTS_QUERY_KEYS.all, 'detail'] as const,
	detail: (id: number) => [...POSTS_QUERY_KEYS.details(), id] as const,
	slug: (slug: string) => [...POSTS_QUERY_KEYS.all, 'slug', slug] as const,
};

export const USER_QUERY_KEYS = {
	all: ['users'] as const,
	details: () => [...USER_QUERY_KEYS.all, 'detail'] as const,
	detail: (id: number) => [...USER_QUERY_KEYS.details(), id] as const,
};

export const usePostsQuery = () => {
	return useQuery({
		queryKey: POSTS_QUERY_KEYS.lists(),
		queryFn: postsApi.getAllPosts,
		staleTime: 30 * 1000,
	});
};

export const usePostQuery = (id: number) => {
	return useQuery({
		queryKey: POSTS_QUERY_KEYS.detail(id),
		queryFn: () => postsApi.getPostById(id),
		staleTime: 30 * 1000,
		enabled: !!id && id > 0,
	});
};

export const usePostBySlugQuery = (slug: string) => {
	return useQuery({
		queryKey: POSTS_QUERY_KEYS.slug(slug),
		queryFn: () => postsApi.getPostBySlug(slug),
		staleTime: 30 * 1000,
		enabled: !!slug,
	});
};

export const useUserQuery = (userId: number) => {
	return useQuery({
		queryKey: USER_QUERY_KEYS.detail(userId),
		queryFn: () => postsApi.getUserById(userId),
		staleTime: 30 * 1000,
		enabled: !!userId && userId > 0,
	});
};
