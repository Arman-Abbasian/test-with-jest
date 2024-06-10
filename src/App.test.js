import mockFetch from "../src/mocks/mockFetch";

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
 })
 
 afterEach(() => {
    jest.restoreAllMocks()
 });