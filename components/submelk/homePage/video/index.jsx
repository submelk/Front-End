import { useState } from "react";
import ReactPlayer from "react-player";

const HomePageVideo = () => {
  const [videoPlaying, setVideoPlaying] = useState("");

  return (
    <div className="-top-12 absolute w-full">
      <ReactPlayer
        style={{
          margin: "auto",
          borderRadius: "10px",
          objectFit: "cover",
          overflow: "hidden",
        }}
        width="93%"
        url="https://www.w3schools.com/html/mov_bbb.mp4"
        playing={videoPlaying}
      />

      <button
        onClick={() => setVideoPlaying((prev) => !prev)}
        className="absolute inset-0 flex items-center justify-center w-full"
      >
        {!videoPlaying && (
          <svg
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1157_12254)">
              <circle cx="61" cy="57" r="41" fill="white" />
            </g>
            <path
              d="M73.5 52.6699C76.8333 54.5944 76.8333 59.4056 73.5 61.3301L58.5 69.9904C55.1667 71.9149 51 69.5093 51 65.6603L51 48.3398C51 44.4907 55.1667 42.0851 58.5 44.0096L73.5 52.6699Z"
              fill="#005BEA"
            />
            <defs>
              <filter
                id="filter0_d_1157_12254"
                x="0"
                y="0"
                width="122"
                height="122"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1157_12254"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1157_12254"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </button>
    </div>
  );
};

export default HomePageVideo;
