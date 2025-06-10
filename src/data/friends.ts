export interface Friend {
  name: string;
  url: string;
  description: string;
  avatar?: string;
}

export const friends: Friend[] = [
  {
    name: "liruifengv",
    url: "https://liruifengv.com/",
    description: "Web developer, Astro project member, open source enthusiast.",
    avatar: "/friend1.webp"
   },
 {
    name: "Aaron Conlon",
    url: "https://i5lin.top/",
    description: "A full stack developer passionate about delivering excellent results.",
    avatar: "/friend2.png"
  },
  {
    name: "Leetao",
    url: "https://leetao.me/",
    description: "Backend engineer, writes interesting code, does interesting things.",
    avatar: "/friend3.jpg"
  }


];