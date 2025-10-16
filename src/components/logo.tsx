import { cn } from "@/lib/utils";

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="135"
    height="40"
    viewBox="0 0 135 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-white", className)}
    {...props}
  >
    <g clipPath="url(#clip0_102_2)">
      <text
        fill="currentColor"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Inter"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x="0" y="27.48">
          trackazon
        </tspan>
      </text>
      <path
        d="M80.9922 30.5C80.9922 30.5 86.9922 34 94.4922 34C101.992 34 107.492 30.5 107.492 30.5"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M101 33.5L107.5 30.5L101 27.5"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_102_2">
        <rect width="135" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
