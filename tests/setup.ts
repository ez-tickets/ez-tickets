import '@testing-library/jest-dom/vitest';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

export { expect };

import {http, HttpResponse} from "msw";
import {setupServer} from "msw/node";
import {afterAll, afterEach, beforeAll, expect} from "vitest";

const handlers = [
  http.get("http://localhost:8080/categories", () => {
    console.log("captured!")
    return HttpResponse.json([
      { id: "1", name: "card1" },
      { id: "2", name: "card2" },
      { id: "3", name: "card3" },
      { id: "4", name: "card4" },
      { id: "5", name: "card5" },
      { id: "6", name: "card6" },
      { id: "7", name: "card7" },
      { id: "8", name: "card8" },
      { id: "9", name: "card9" },
      { id: "10", name: "card10" },
    ], { status: 200 })
  }),
]

const server = setupServer(...handlers);
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
