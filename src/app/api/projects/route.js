import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const projectTitle = request.nextUrl.searchParams.get("projectTitle");

    const filePath = path.join(process.cwd(), "projects_data.json");

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          error: "Projects data file not found",
          data: [],
        },
        { status: 404 }
      );
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    // If no project title specified, return all projects
    if (!projectTitle) {
      return NextResponse.json({
        data: data,
        status: 200,
      });
    }

    // Filter projects by title or id
    const filteredData = data.filter((project) => {
      const matchesTitle = project.projectTitle
        .toLowerCase()
        .includes(projectTitle.toLowerCase());
      const matchesId =
        project.id && project.id.toLowerCase() === projectTitle.toLowerCase();
      const matchesExactTitle =
        project.projectTitle.toLowerCase() === projectTitle.toLowerCase();

      return matchesTitle || matchesId || matchesExactTitle;
    });

    return NextResponse.json({
      data: filteredData,
      status: 200,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: error.message,
        data: [],
      },
      { status: 500 }
    );
  }
}
