import { NextRequest, NextResponse } from "next/server";
import { getUsers, postUsers, delUsers, updatalUsers } from "@/db/user";

// This's A CRUD DEMO
export async function GET(request: NextRequest) {
  return NextResponse.json({ data: await getUsers() }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const clonedBody = await req.text();
  const { name, email } = JSON.parse(clonedBody);
  postUsers({
    name,
    email,
  });
  return NextResponse.json({ data: await getUsers() }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const clonedBody = await req.text();
  const { id } = JSON.parse(clonedBody);
  await delUsers(id);
  return NextResponse.json({ data: await getUsers() }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const clonedBody = await req.text();
  const { id, name, email } = JSON.parse(clonedBody);
  await updatalUsers(id, { name, email });
  return NextResponse.json({ data: await getUsers() }, { status: 200 });
}
