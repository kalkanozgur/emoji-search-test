import React from "react";

import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("Header Test", () => {
	render(<Header />);
	const headerText = screen.getByText(/Emoji Search/i);
	expect(headerText).toBeInTheDocument();
});
