export default function Home() {
  // THIS IS ALL PLACEHOLDER CONTENT - REMOVE IT AND REPLACE BASED ON THE USER'S REQUEST
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center">
        <svg
          width={50 * (608 / 729)}
          height={50}
          viewBox="0 0 608 729"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M272.233 0L380.334 0.263884L608 698.047L505.351 728.442L505.116 728.719L504.934 728.565L503.656 728.95L502.932 726.841L251.13 510.664L286.698 419.566L442.541 550.633L320.343 194.075L112.224 729L0 691.634L272.233 0Z"
            fill="black"
          />
        </svg>
        <ol className="list-inside list-decimal text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Chat to create your website
          </li>
          <li className="tracking-[-.01em]">See your changes instantly</li>
        </ol>
      </main>
    </div>
  );
}
