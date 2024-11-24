import navItems from "@/app/utils/navItems";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-primary absolute left-[calc(50%-512.89px/2)]">
      <ul className="flex items-center justify-center gap-8">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              className="hover:text-blue flex items-center justify-center gap-1"
            >
              <Link href={item.linkTo}>{item.title}</Link>
              {/* <p>{"|"}</p> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
