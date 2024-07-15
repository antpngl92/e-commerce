export const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
] as const;

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    stars: 5,
    review:
      "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and the image is super clear, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.",
    name: "Jonathan",
    customerImageUrl: "/users/user-1.png",
  },
  {
    id: 2,
    stars: 5,
    review:
      "I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, looks brand new after about half a year. I dig it.",
    name: "Josh",
    customerImageUrl: "/users/user-4.jpg",
  },
] as const;

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const;

export const BASE_PRICE = 15_00;
