import {groq} from 'next-sanity';
export const pageQuery = groq`
	*[_type == 'page' && slug.current == $slug][0] {
		...,
        title,
	}
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;