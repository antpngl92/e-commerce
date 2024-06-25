import { HTMLAttributes } from "react";

export interface AnimatedReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

export interface ReviewProps {
  stars: number;
  review: string;
  name: string;
  customerImageUrl: string;
}

export interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  className?: string;
  dark?: boolean;
}

export interface ReviewColumProps {
  reviews: Array<string>;
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}