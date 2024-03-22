import { logout } from "./logout";
import * as storage from "../../storage/index.js";

// Mock the module ../../storage/index.js
jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("Logout Functionality", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears the token and profile from browser storage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledTimes(2);

    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
