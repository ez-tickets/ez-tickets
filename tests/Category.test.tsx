import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { describe, it } from "vitest";
import Category from "../src/screen/Home/components/Category";

describe("Category Component", () => {
  it("fetch test", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
        <MemoryRouter>
          <Category />
        </MemoryRouter>
      </SWRConfig>,
    );
    await waitFor(() => {
      expect(screen.getByText("card10")).toBeInTheDocument();
    });
  });
});
