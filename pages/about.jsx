import Link from "next/link";
const About = () => {
  return (
    <div>
      <h1 className="py-4 px-8 font-bold text-xl">This is the about Page</h1>
      <p className="m-8 font-bold mb-2">
        This is a Sample decentralized lottery project built using Solidity and
        NextJS
      </p>
      <button className="bg-green-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-10 mt-5">
        <Link href="/">Home</Link>
      </button>
    </div>
  );
};

export default About;
