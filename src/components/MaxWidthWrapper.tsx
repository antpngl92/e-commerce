import { ReactNode } from 'react'
import { cn } from '@lib/utils'

const MaxWidthWrapper = ({ className, children }: {
 className?: string,
 children: ReactNode
}) => {
  return (
    <div className={cn("h-full max-auto w-full max-w-screen-xl px-2.5 md:px-30", className)}>
      {children} 
    </div>
  )
}

export default MaxWidthWrapper