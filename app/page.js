import Greeting, { Hello, Bye } from "@/components/Greeting.jsx";
// props - properties of components - fancy word for arguments

function Home() {
  return (
    <div>
      <Greeting name={"Parth!"} />
    </div>
  );
}


export default Home;
