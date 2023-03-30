import { writable } from 'svelte/store';
import type { Signer } from 'ethers';
import { subscribeToSigner } from '../signer/subscriber';

export const signer = writable<Signer>();

// Everytime the signer changes, we need to run the subscribeToSigner,
// which will take care of makind some API calls and update other stores
// such as transactions and userTokens.
signer.subscribe(subscribeToSigner);
