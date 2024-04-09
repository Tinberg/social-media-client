import { login } from "./login";
import { apiPath } from "../constants.js";
import { save } from "../../storage/index.js";

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn().mockReturnValue("mockedToken"),
}));

jest.mock("../headers.js", () => ({
  headers: jest.fn().mockReturnValue({ "Content-Type": "application/json" }),
}));

beforeEach(() => {
  jest.clearAllMocks();

  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest
      .fn()
      .mockResolvedValue({
        accessToken: "123",
        user: { id: "abc", name: "Test User" },
      }),
  });
});

describe("login function", () => {
  it("successfully logs in and saves profile", async () => {
    const profile = await login("test@example.com", "password");

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email: "test@example.com", password: "password" }),
      headers: { "Content-Type": "application/json" },
    });

    expect(save).toHaveBeenCalledTimes(2);
    expect(save).toHaveBeenNthCalledWith(1, "token", "123");
    expect(save).toHaveBeenNthCalledWith(2, "profile", {
      user: { id: "abc", name: "Test User" },
    });

    expect(profile).toEqual({ user: { id: "abc", name: "Test User" } });
  });

  it("throws an error on failed login", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(login("wrong@example.com", "wrongpassword")).rejects.toThrow(
      "Unauthorized",
    );
  });
});
