import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
import Project from "./project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen items-center justify-between p-24 bg-[#E7F0DC]">
      <Navbar/>
      
      <div className="absolute flex left-0 ml-52 w-[1200px] ml- mt-60">
        <div className="hover:scale-[1.01] duration-75">
          <h1 className="absolute w-auto inline-blocks ml-[8rem] -mt-[1rem] font-sans font-bold text-9xl text-[#597445]">"</h1>
          <h1 className="w-auto inline-blocks ml-48 font-sans font-bold text-8xl text-[#597445]">
            HELLO, I'M JERIN!
          </h1>
          <h1 className="absolute w-auto inline-blocks ml-[63rem] -mt-[7rem] font-sans font-bold text-9xl text-[#597445]">"</h1>
        </div>
        
        <p className="absolute w-auto inline-blocks ml-[13rem] mt-[8rem] font-sans font-bold text-[#658147]">
          This is my quick bio
        </p>

        <Link href="https://github.com/DireStorm" target="_blank" rel="noopener noreferrer">
          <Image
            className="absolute w-auto mt-[15rem] -ml-[50rem] transform transition-transform hover:-translate-y-1 duration-150"
            src="/github.png"
            width="30"
            height="30"
            alt=""
          />
        </Link>

        <Link href="https://www.linkedin.com/in/jerin-t-andrews/" target="_blank" rel="noopener noreferrer">
          <Image
            className="absolute w-auto mt-[15rem] -ml-[47rem] transform transition-transform hover:-translate-y-1 duration-150"
            src="/linkedin.webp"
            width="30"
            height="30"
            alt=""
          />
        </Link>
      </div>

      <div className="group relative flex left-[600px] mt-40">
          <div className="z-10 rounded-xl overflow-hidden group-hover:scale-105 duration-100">
            <Image 
              src="/IMG_1894.JPG"
              width={600}
              height={600}
              alt="ME!"
            />
          </div>
        <p className="z-0 absolute right-[20px] top-[20px] w-[600px] h-[600px] rounded-xl bg-[#658147] transform transition-transform group-hover:scale-105 duration-100 group-hover:translate-x-10"></p>
      </div>

      <div className="relative flex w-screen justify-around top-[30rem] mb-[30rem]">
        <div className="">
          <Project path="/github.png"/>
        </div>

        <p className="text-black relative right-[15rem]">
          Text
        </p>
      </div>

      <div className="relative flex w-screen justify-around top-[10rem] mb-[30rem]">
        <p className="text-black relative">
          Text
        </p>

        <div className="">
          <Project path="/github.png"/>
        </div>

      </div>

      <div className="relative flex w-screen justify-around -top-[10rem] mb-[20rem]">
        <div className="">
          <Project path="/github.png"/>
        </div>

        <p className="text-black relative right-[15rem]">
          Text
        </p>
      </div>


    </main>
  );
}

/**
 * <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
 */