// app/api/detect-mudra/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, imageUrl } = await req.json();

    if (!imageBase64 && !imageUrl) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const response = await axios({
      method: "POST",
      url: "https://serverless.roboflow.com/bharatanatyam-mudra/1",
      params: {
        api_key: process.env.ROBOFLOW_API_KEY,
        ...(imageUrl ? { image: imageUrl } : {}),
      },
      data: imageBase64 || undefined,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Roboflow error:", error.message);
    return NextResponse.json(
      { error: "Inference failed", details: error.message },
      { status: 500 }
    );
  }
}
