import type { ComponentProps } from "react"
import { cx } from "~/utils/cva"

export const LogoSymbol = ({ className, ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 216 251"
      role="img"
      aria-label="Logo"
      className={cx("h-5 w-auto fill-current", className)}
      {...props}
    >
      <path d="M0 105v93c0 3.18.29 6.35 2.53 8.6l42.25 42.24C48.56 252.62 55 250.34 55 245v-93c0-3.19-1.05-6.36-3.31-8.62l-42.6-42.6C5.28 96.97-.02 99.64 0 105ZM74 56v132c0 3.18.79 6.14 3.03 8.38l42.25 42.24c3.77 3.78 10.72.73 10.72-4.62V103c0-3.18-1.55-6.5-3.8-8.76L83.56 51.62C79.8 47.84 74 50.66 74 56ZM148 6v155c0 3.18.84 6.6 3.08 8.85l54.99 54.98c3.78 3.78 9.93 1.02 9.93-4.33v-155c0-3.18-.76-6.1-3.01-8.36L157.62 1.77C153.84-2 148 .66 148 6Z" />
      <path d="M74 56v132c0 3.18.79 6.14 3.03 8.38l42.25 42.24c3.77 3.78 10.72.73 10.72-4.62V103c0-3.18-1.55-6.5-3.8-8.76L83.56 51.62C79.8 47.84 74 50.66 74 56Z" />
    </svg>
  )
}
