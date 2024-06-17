// Public routes that not require authentication
export const publicRoutes = [
  "/",
];

// Routes for authentication
export const authRoutes = [
  "/auth/login",
  "/auth/register",
];

// Prefix for API authentication routes
export const apiAuthPrefix = "/api/auth";

// The default redirect path after logging in
export const DEFAULT_LOGIN_REDIRECT = "/setting";