const InputFile = () => {
  return (
    <div className="relative w-full h-full">
      <label
        htmlFor="input"
        className="xxx gap-5 w-full h-full absolut right-0 top-0 bottom-0 left-0 
        bg-[#F5F7FA] flex flex-col items-center justify-center rounded-3xl"
      >
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.1133 0.862305C72.477 0.862305 80.1158 8.24231 80.532 17.5011L80.5508 18.2998V63.2998C80.5508 72.6636 73.1708 80.3023 63.912 80.7186L63.1133 80.7373H18.1133C8.74953 80.7373 1.11078 73.3573 0.694531 64.0986L0.675781 63.2998V18.2998C0.675781 8.93606 8.05578 1.2973 17.3145 0.881055L18.1133 0.862305H63.1133ZM52.7183 38.7823L41.712 50.2573L50.5845 59.4598C51.5183 60.4311 51.4883 61.9723 50.5208 62.9098C49.5495 63.8398 48.0083 63.8098 47.0708 62.8423L32.9858 48.2136C29.0783 44.8236 23.5845 44.8236 19.8383 48.0598L5.55078 62.9511V63.2998C5.55078 70.0048 10.8083 75.4873 17.4233 75.8436L18.1133 75.8623H63.1133C69.8183 75.8623 75.3008 70.6048 75.657 63.9898L75.6758 63.2998V49.1286L65.8658 38.9398C61.9583 35.5498 56.4645 35.5498 52.7183 38.7823ZM63.1133 5.73731H18.1133C11.4083 5.73731 5.92578 10.9948 5.56953 17.6098L5.55078 18.2998V55.9161L16.482 44.5311C22.2195 39.5511 30.4395 39.5511 36.3383 44.6811L38.3258 46.7436L49.362 35.2536C55.0995 30.2773 63.3195 30.2773 69.2183 35.4036L75.6758 42.1048V18.2998C75.6758 11.5948 70.4183 6.1123 63.8033 5.75605L63.1133 5.73731ZM33.1133 15.8623C38.6033 15.8623 43.0508 20.3098 43.0508 25.7998C43.0508 31.2898 38.6033 35.7373 33.1133 35.7373C27.6233 35.7373 23.1758 31.2898 23.1758 25.7998C23.1758 20.3098 27.6233 15.8623 33.1133 15.8623ZM33.1133 20.7373C30.3158 20.7373 28.0508 23.0023 28.0508 25.7998C28.0508 28.5973 30.3158 30.8623 33.1133 30.8623C35.9108 30.8623 38.1758 28.5973 38.1758 25.7998C38.1758 23.0023 35.9108 20.7373 33.1133 20.7373Z"
            fill="#418266"
          />
        </svg>
        <div className="text-[#424750]">
          Laden Sie das Bild Ihres Produkts hoch.
        </div>
      </label>
      <input type="file" name="" id="input" className="opacity-0 invisible" />
      <style jsx>{`
        .xxx {
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%23999999FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default InputFile;
