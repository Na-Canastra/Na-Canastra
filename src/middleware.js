export { default } from "next-auth/middleware"

export const config = { matcher: ["/editar-produto/:path*", "/criar-produto"] }