import "../input.css"
import Heading from "../Header-Footer/Heading";
import Footing from "../Header-Footer/Footing";
import Login from "./Login";

export default function Home() {
  return (
    <div>
      <Heading />
      <Login />
      <Footing />
    </div>
  );
}