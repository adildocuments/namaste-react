import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { withPromotedCard } from "../Body";
import MOCK_DATA from "../mocks/cardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurent Card component with props Data", () => {
  render(<Card restList={MOCK_DATA} />);
  const name = screen.getByText("Sita Ram Diwan Chand");
  //Assertion
  expect(name).toBeInTheDocument();
});

// it("Should render card component with promoted label", () => {
//   render(<withPromotedCard restList={MOCK_DATA} />);
//   const namePromoted = screen.getByText("/Sita Ram Diwan Chand/");
//   //Assertion
//   expect(namePromoted).toBeInTheDocument();
// });
