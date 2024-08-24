import {loadStripe} from '@stripe/stripe-js';
// ensures we only create one instance of Stripe, reusing it if it already exists
let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    }
    return stripePromise;
}
export default getStripe;