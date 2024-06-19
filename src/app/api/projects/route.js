import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const projectTitle = request.nextUrl.searchParams.get("projectTitle");

    const filePath = path.join(process.cwd(), "projects_data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    const filteredData = data.filter((project) =>
      project.projectTitle.includes(projectTitle)
    );

    return NextResponse.json({
      data: filteredData,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
