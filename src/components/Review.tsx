import { FC } from 'react'
import { Check, Star } from "lucide-react";
import { ReviewProps } from '@lib/types'

const Review: FC<ReviewProps> = ({stars = 0, review, name, customerImageUrl}) => {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5 mb-2">
        {[...Array(stars)].map((e, i) => (
          <Star id={`${i}`} className="size-5 text-green-600 fill-green-600" />
        ))}
      
      </div>
      <div className="text-lg leading-8">
        <p>
          "{review}"
        </p>
      </div>

      <div className="flex gap-4 mt-2">
        <img className="rounded-full size-12 object-cover" src={customerImageUrl} alt="user" />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <div className="flex gap-1.5 items-center text-zinc-600">
            <Check className="size-4 stroke=[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Review