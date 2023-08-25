import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
    // "/" will be accessible to all users
    publicRoutes: ["/", 'https://shadcn-ui-ecommerce.vercel.app/:path*',"/products","/products/:path*", "/male", "/female", "/kids", "/api/webhooks/:path*", "/studio/:path*","/api/products/:path*"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/api/cart:path*"],
};