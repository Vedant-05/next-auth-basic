import NextAuth from "next-auth"
import { NEXT_AUTH } from "./auth"


const handler = NextAuth(NEXT_AUTH)

export { handler as GET, handler as POST }