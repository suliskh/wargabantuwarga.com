import * as React from "react";

export function PhoneIcon({
  width,
  height,
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      fill={fill}
      height={height}
      viewBox="0 0 13 14"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8389 1.09375C12.8002 1.00009 12.7428 0.912296 12.667 0.835989C12.6659 0.834855 12.6647 0.833724 12.6636 0.832596C12.519 0.68882 12.3197 0.599976 12.0996 0.599976H8.89961C8.45778 0.599976 8.09961 0.958148 8.09961 1.39998C8.09961 1.8418 8.45778 2.19998 8.89961 2.19998H10.1682L7.53392 4.83429C7.2215 5.14671 7.2215 5.65324 7.53392 5.96566C7.84634 6.27808 8.35287 6.27808 8.66529 5.96566L11.2996 3.33135V4.59998C11.2996 5.0418 11.6578 5.39998 12.0996 5.39998C12.5414 5.39998 12.8996 5.0418 12.8996 4.59998V1.39998C12.8996 1.2915 12.878 1.18807 12.8389 1.09375Z"
        fill={fill}
      />
      <path
        d="M0.0996094 1.39998C0.0996094 0.958148 0.457782 0.599976 0.899609 0.599976H2.62191C3.01298 0.599976 3.34673 0.882706 3.41102 1.26846L4.00247 4.81716C4.06021 5.16358 3.88525 5.50715 3.57113 5.66422L2.33262 6.28347C3.22566 8.50263 4.99695 10.2739 7.21611 11.167L7.83537 9.92846C7.99243 9.61433 8.336 9.43937 8.68243 9.49711L12.2311 10.0886C12.6169 10.1529 12.8996 10.4866 12.8996 10.8777V12.6C12.8996 13.0418 12.5414 13.4 12.0996 13.4H10.4996C4.75585 13.4 0.0996094 8.74374 0.0996094 2.99998V1.39998Z"
        fill={fill}
      />
    </svg>
  );
}
