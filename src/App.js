import { Button } from "react-bootstrap";
import Header from "./Components/Header/Header";
import TopHeadline from "./Components/Top-headline/TopHeadline";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Button variant="primary">Primary</Button>
      <h1 className="text-primary">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
