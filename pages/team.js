import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import t from "../twitter.svg";
import Link from "next/link";
const team = () => {
  return (
    <>
      <Navbar />
      <div className="container h-[80vh] justify-center flex-wrap flex bg-gradient-to-r from-violet-300 to-violet-400">
        <div className="ml-5 p-9 h-[400px] w-[250px] member flex items-center justify-center flex-col gap-3 shadow-2xl bg-transparent">
          <img
            src="https://avatars.githubusercontent.com/u/63300537?s=400&u=1a639a062e6936727f3e9b591bf6a65990f25e75&v=4"
            alt="raj"
            className="h-[100px] rounded-[50%]"
          />
          <h1 className="text-white text-lg font-bold">Prashant Raj</h1>
          <h2>Frontend</h2>
          <div className="social flex gap-2 justify-center">
            <Link href="https://twitter.com/rajmaurya_dev">
              <img src="../twitter.svg" alt="Twitter" className="h-[20px]" />
            </Link>
            <Link href="https://www.linkedin.com/in/prashant-raj-5715bb24b/">
              <img src="../linkedin.svg" alt="Twitter" className="h-[20px]" />
            </Link>
          </div>
        </div>
        <div className="ml-5 p-9 h-[400px] w-[250px] member flex items-center justify-center flex-col gap-3 shadow-2xl bg-transparent">
          <img
            src="https://avatars.githubusercontent.com/u/59885206?v=4"
            alt="raj"
            className="h-[100px] rounded-[50%]"
          />
          <h1 className="text-white text-lg font-bold">Srikar</h1>
          <h2>Backend</h2>
          <div className="social flex gap-2 justify-center">
            <Link href="https://twitter.com/Srikarismad">
              <img src="../twitter.svg" alt="Twitter" className="h-[20px]" />
            </Link>
            <Link href="https://www.linkedin.com/in/srikarmk/">
              <img src="../linkedin.svg" alt="Twitter" className="h-[20px]" />
            </Link>
          </div>
        </div>
        <div className="ml-5 p-9 h-[400px] w-[250px] member flex items-center justify-center flex-col gap-3 shadow-2xl bg-transparent">
          <img
            src="https://avatars.githubusercontent.com/u/86061956?v=4"
            alt="raj"
            className="h-[100px] rounded-[50%]"
          />
          <h1 className="text-white text-lg font-bold">Jyoti Pandey</h1>
          <h2>Frontend</h2>
          <div className="social flex gap-2 justify-center">
            <Link href="https://twitter.com/kadak_chai_10">
              <img src="../twitter.svg" alt="Twitter" className="h-[20px]" />
            </Link>
            <Link href="https://www.linkedin.com/in/jyoti-pandey-b5025b1b1/">
              <img src="../linkedin.svg" alt="Twitter" className="h-[20px]" />
            </Link>
          </div>
        </div>
        <div className="ml-5 p-9 h-[400px] w-[250px] member flex items-center justify-center flex-col gap-3 shadow-2xl bg-transparent">
          <img
            src="https://avatars.githubusercontent.com/u/89316018?v=4/"
            alt="raj"
            className="h-[100px] rounded-[50%]"
          />
          <h1 className="text-white text-lg font-bold">Hemant Chaubey</h1>
          <h2>Frontend</h2>
          <div className="social flex gap-2 justify-center">
            <Link href="">
              <img src="../twitter.svg" alt="Twitter" className="h-[20px]" />
            </Link>
            <Link href="https://www.linkedin.com/in/imhemantchaubey/">
              <img src="../linkedin.svg" alt="Twitter" className="h-[20px]" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default team;
