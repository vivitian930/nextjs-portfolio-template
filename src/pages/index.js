import AnimatedText from "@/components/AnimatedText"
import HireMe from "@/components/HireMe"
import { LinkArrow } from "@/components/icons"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import ProfilePic from "../../public/images/profile/developer-pic-1.png"
import LightBultb from "../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center w-full justify-between lg:flex-col">
            <div className="w-[45%] md:w-full">
              <Image
                src={ProfilePic}
                alt="Vivi"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768) 100vw,
              (max-width: 1200) 50vw,
              50vw
              "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                text-lg font-semibold hover:bg-light hover:text-dark 
                border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:vivi.tian930@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={LightBultb} alt="Vivi" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
