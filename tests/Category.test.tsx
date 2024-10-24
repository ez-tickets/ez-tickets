import {describe, it, test} from "vitest";
import {render, waitFor, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {SWRConfig} from "swr";
import React from "react";
import Category from "../src/screen/Home/components/Category";

function customRender(ui: React.ReactElement, options =   {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}


describe('Category Component', () => {
  it("fetch test", async () => {
    customRender(<SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}><MemoryRouter><Category /></MemoryRouter></SWRConfig>);
    await waitFor(() => {
      expect(screen.getByText('card1')).toBeInTheDocument();
    })
  });
});