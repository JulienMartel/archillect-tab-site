export function Logo() {
  return (
    <div className="mx-auto bg-neutral-100 w-12 h-12 grid place-items-center rounded-xl">
      <svg
        viewBox="0 0 119 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/5 h-3/5"
      >
        <g filter="url(#filter0_d_515_11)">
          <path d="M44 23H28V87H44V23Z" fill="black" />
          <path d="M68 23H52V87H68V23Z" fill="black" />
          <path d="M92 23H76V87H92V23Z" fill="black" />
          <rect
            x="12"
            y="8"
            width="95"
            height="93"
            stroke="black"
            strokeWidth="16"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_515_11"
            x="0"
            y="0"
            width="119"
            height="117"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_515_11"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_515_11"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
