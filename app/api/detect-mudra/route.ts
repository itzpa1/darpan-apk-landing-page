// app/api/detect-mudra/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, imageUrl } = await req.json();

    if (!imageBase64 && !imageUrl) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    let dataToSend: string;
    const apiUrl = `https://detect.roboflow.com/dance-mudras-yolo-v8/2?api_key=${process.env.ROBOFLOW_API_KEY}`;

    if (imageBase64) {
      // Remove "data:image/png;base64," if included
      const cleanBase64 = imageBase64.includes("base64,")
        ? imageBase64.split("base64,")[1]
        : imageBase64;

      dataToSend = cleanBase64;
    } else {
      // When using image URL instead of base64
      return await axios
        .post(apiUrl + `&image=${encodeURIComponent(imageUrl)}`)
        .then((r) => NextResponse.json(r.data))
        .catch((e) =>
          NextResponse.json(
            { error: "Roboflow URL inference failed", details: e.message },
            { status: 500 }
          )
        );
    }

    // Send base64 image data
    const response = await axios.post(apiUrl, dataToSend, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
