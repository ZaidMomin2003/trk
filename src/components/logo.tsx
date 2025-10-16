import { cn } from "@/lib/utils";

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="170"
    height="40"
    viewBox="0 0 170 40"
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
          swag tracker
        </tspan>
      </text>
      <path
        d="M115.992 30.5C115.992 30.5 121.992 34 129.492 34C136.992 34 142.492 30.5 142.492 30.5"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M136 33.5L142.5 30.5L136 27.5"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_102_2">
        <rect width="170" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
