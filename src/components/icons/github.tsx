import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5.08-1.3-.32-2.7-.94-3.8a6 6 0 0 0-.94-3.8s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C4.6 2.7 3.5 3 3.5 3a6 6 0 0 0-.94 3.8c-.62 1-.94 2.5-.94 3.8 0 5 3 6.5 6 6.5a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
