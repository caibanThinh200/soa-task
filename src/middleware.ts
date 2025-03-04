import createMiddleware from "next-intl/middleware";
import { routing } from "./i8n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en)/:path*"],
};
