import { writable } from 'svelte/store';

export const location = writable({
    zip: '',
    city: '',
    state: ''
});

export const inputPage = writable({
    budget: '',
    time: '',
    personalStatement: ''
})
