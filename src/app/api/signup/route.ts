// app/api/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in DB
    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });

    // Create JWT payload
    const payload = { id: user.id, email: user.email };

    // Sign JWT (expires in 7 days)
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return NextResponse.json({ success: true, token, user });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
