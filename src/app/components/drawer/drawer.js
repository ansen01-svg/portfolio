import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { XMarkIcon } from "@heroicons/react/24/outline";
import navItems from "@/app/utils/navItems";

export default function DrawerHolder(props) {
  const { open, toggleDrawer } = props;

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#1a1a2e",
          border: "none",
          borderLeft: "1px solid rgba(0, 212, 170, 0.2)",
        },
      }}
    >
      <Box sx={{ width: "80vw", maxWidth: "320px" }} role="presentation">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-accent/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm">AB</span>
            </div>
            <div>
              <div className="font-bold text-text-primary">Ansen Bey</div>
              <div className="text-xs text-text-muted">Developer</div>
            </div>
          </div>

          <button
            onClick={toggleDrawer(false)}
            className="p-2 text-text-secondary hover:text-accent transition-colors duration-300 rounded-lg hover:bg-background-hover"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <List sx={{ padding: 0 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <Link
                href={item.linkTo}
                onClick={toggleDrawer(false)}
                className="block w-full px-6 py-4 text-text-secondary hover:text-accent hover:bg-background-hover transition-all duration-300 capitalize font-medium border-l-2 border-transparent hover:border-accent"
              >
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-accent/20">
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/ansen-bey-b27977209/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ansen01-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
