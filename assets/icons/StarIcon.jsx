import * as React from "react";

const StarIcon = (props) => (
  <svg
    // width={39}
    // height={37}
    // fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m21.224 1.061 4.532 9.13c.28.566.826.952 1.446 1.037l10.145 1.459c1.58.23 2.199 2.147 1.069 3.256l-7.338 7.104a1.897 1.897 0 0 0-.547 1.688l1.737 10.034c.267 1.556-1.373 2.75-2.782 2.014l-9.076-4.74a1.945 1.945 0 0 0-1.786 0l-9.1 4.74c-1.409.736-3.061-.458-2.782-2.014L8.48 24.735a1.897 1.897 0 0 0-.546-1.688L.594 15.943c-1.142-1.097-.51-3.027 1.07-3.256l10.144-1.46a1.927 1.927 0 0 0 1.446-1.036l4.532-9.13c.692-1.41 2.734-1.41 3.438 0Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h39v37H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default StarIcon;
