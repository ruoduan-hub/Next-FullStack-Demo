import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest, res:NextResponse ) {
  console.log(req)
  console.log(res)
  return res
}
