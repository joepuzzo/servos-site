export const ServoFace = ({ width }) => {
  return (
    <svg
      width={width}
      // height="179"
      viewBox="0 0 250 179"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.417 41.9747H131.425C191.389 41.9747 240 90.5852 240 150.549C240 160.725 231.751 168.975 221.575 168.975H28.5833C18.32 168.975 10 160.655 10 150.391C10 90.5145 58.5398 41.9747 118.417 41.9747Z"
        stroke="#2C2C2C"
        stroke-width="15"
      />
      <path
        d="M83.5 80.9747H166.5C176.717 80.9747 185 89.2575 185 99.4747C185 109.692 176.717 117.975 166.5 117.975H83.5C73.2827 117.975 65 109.692 65 99.4747C65 89.2575 73.2827 80.9747 83.5 80.9747Z"
        stroke="#2C2C2C"
        stroke-width="10"
      />
      <path
        d="M148.319 138.072C148.319 144.384 137.918 149.502 125.088 149.502C112.258 149.502 101.857 144.384 101.857 138.072"
        stroke="#2C2C2C"
        stroke-width="10"
      />
      {/* <path
        d="M133.879 105.861C133.879 99.5488 140.344 94.4314 148.319 94.4314C156.295 94.4314 162.76 99.5488 162.76 105.861"
        stroke="#2C2C2C"
        stroke-width="10"
        id="eye1"
      />
      <path
        d="M87.4182 105.861C87.4182 99.5488 93.8833 94.4314 101.858 94.4314C109.834 94.4314 116.299 99.5488 116.299 105.861"
        stroke="#2C2C2C"
        stroke-width="10"
        id="eye2"
      /> */}

      <ellipse
        id="eye1"
        cx="150" // X center coordinate
        cy="100" // Y center coordinate
        rx="9" // X radius (horizontal)
        ry="9" // Y radius (vertical), same as rx for a circle
        stroke="#2C2C2C"
        stroke-width="8"
      >
        <animate
          attributeName="ry"
          values="9;9;9;1;9;1;9;9;9;9;1;9"
          keyTimes="0;0.1;0.2;0.25;0.3;0.35;0.4;0.4;0.9;0.9;0.95;1"
          dur="5s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse
        id="eye2"
        cx="100" // X center coordinate
        cy="100" // Y center coordinate
        rx="9" // X radius
        ry="9" // Y radius
        stroke="#2C2C2C"
        stroke-width="8"
      >
        <animate
          attributeName="ry"
          values="9;9;9;1;9;1;9;9;9;9;1;9"
          keyTimes="0;0.1;0.2;0.25;0.3;0.35;0.4;0.4;0.9;0.9;0.95;1"
          dur="5s"
          repeatCount="indefinite"
        />
      </ellipse>

      <rect x="118.322" y="18.4045" width="10" height="13" fill="#2C2C2C" />
      <circle cx="123.322" cy="10.9747" r="7.5" fill="white" stroke="#2C2C2C" stroke-width="5" />
    </svg>
  );
};
