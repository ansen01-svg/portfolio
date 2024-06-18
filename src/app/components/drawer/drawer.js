import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import navItems from "@/app/utils/navItems";

export default function DrawerHolder(props) {
  const { open, toggleDrawer } = props;

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: "70vw" }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <div className="w-full px-5 py-3 flex items-center justify-end">
          <button
            className="px-3 py-3 rounded-full hover:bg-[#efefef]"
            onClick={toggleDrawer(false)}
          >
            <CloseRoundedIcon />
          </button>
        </div>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                width: "100%",
              }}
            >
              <Link href={item.linkTo} className="w-full py-3 px-5 font-md">
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
