
import {createClient, createPreviewSubscriptionHook} from 'next-sanity';

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'm99njrsg',
	// useCdn: process.env.NODE_ENV === 'production',
	useCdn: true,
    token: '',
	apiVersion: '2022-08-08'
};

export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const sanityClient = createClient(config);