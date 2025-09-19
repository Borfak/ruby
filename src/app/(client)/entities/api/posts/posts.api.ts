import ky from 'ky';
import type { Post, User } from '../../models';

const api = ky.create({
	prefixUrl: 'https://jsonplaceholder.typicode.com',
});

export const postsApi = {
	getAllPosts: async (): Promise<Post[]> => {
		return api.get('posts').json();
	},

	getPostById: async (id: number): Promise<Post> => {
		return api.get(`posts/${id}`).json();
	},

	getPostBySlug: async (slug: string): Promise<Post> => {
		const id = parseInt(slug, 10);
		if (isNaN(id)) {
			throw new Error('Invalid post slug');
		}
		return api.get(`posts/${id}`).json();
	},

	getUserById: async (id: number): Promise<User> => {
		return api.get(`users/${id}`).json();
	},
};
