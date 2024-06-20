import logo from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";

export default function LogoAndMenuIcon({ toggleDrawer }) {
  const tabScreen = useMediaQuery("(max-width:1024px)");

  return (
    <div className="flex items-center justify-center gap-3">
      {tabScreen && (
        <div>
          <button
            className="px-3 py-3 text-primary rounded-full hover:bg-secondary hover:text-blue"
            onClick={toggleDrawer(true)}
          >
            <DragHandleRoundedIcon sx={{ fontSize: "30px" }} />
          </button>
        </div>
      )}
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={152}
            height={45}
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
    </div>
  );
}
