import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import { Header } from "./Layout"; // Import the actual Header component
import "@testing-library/jest-dom/vitest"; // Import the matchers

interface MockMemoryRouterProps extends React.PropsWithChildren {}

// Mock the 'wouter' dependency
vi.mock("wouter", () => {
  // Directly provide a mock implementation for MemoryRouter and useRoute
  const MockMemoryRouter: React.FC<MockMemoryRouterProps> = ({ children }) => (
    <>{children}</>
  ); // Simply renders its children
  const mockUseRoute = (pattern: string) => {
    // Simulate being on the home page for this test
    const currentPath = "/";
    return [currentPath === pattern];
  };

  return {
    // We need to return Link as well, as it's used by Header and ActiveLink
    Link: ({ to, children, ...props }: any) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
    MemoryRouter: MockMemoryRouter,
    useRoute: mockUseRoute,
    useLocation: vi.fn(() => ["/", vi.fn()]), // Mock useLocation as well for completeness
  };
});

describe("Header", () => {
  it("renders the header with navigation links", () => {
    render(
      // MemoryRouter is now mocked, so it can be used directly
      <Header />
    );

    // Check for the logo/brand name
    expect(screen.getByText("Academy INC.")).toBeInTheDocument();

    // Check for all navigation links
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Over ons")).toBeInTheDocument();
    expect(screen.getByText("Diensten")).toBeInTheDocument();
    expect(screen.getByText("Academy")).toBeInTheDocument();
    expect(screen.getByText("Nieuws")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
