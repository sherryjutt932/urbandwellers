import Latest from "./constants/Latest";
import Card from "./components/Card";
import News from "./constants/News";
import Merchs from "./constants/Merchs";
import Artists from "./constants/Artists";
import Events from "./constants/Events";
import ArtistCard from "./components/ArtistCard";
import MerchCard from "./components/MerchCard";
import Link from "next/link";

// package.json for vps 
// "start": "next start -H 0.0.0.0 -p 3000",
// "start:external": "HOST=0.0.0.0 PORT=3000 next start"     

// for dev
// "start": "next start"


export default function Home() {
  const combinedArray = [
    ...News.map((item) => ({ type: "news", item })),
    ...Merchs.map((item) => ({ type: "merch", item })),
    ...Artists.map((item) => ({ type: "artist", item })),
    ...Events.map((item) => ({ type: "event", item })),
  ].sort((a, b) => new Date(b.item.timestamp) - new Date(a.item.timestamp));

  return (
    <div className="flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full">
      {combinedArray.map(({ type, item }, index) => {
        if (type === "merch") {
          return (
            <MerchCard
              key={index}
              item={item}
              className="w-screen h-screen border border-borderClr"
            />
          );
        } else if (type === "artist") {
          return (
            <ArtistCard
              key={index}
              item={item}
              className="w-screen h-screen border border-borderClr"
            />
          );
        } else if (type === "event") {
          return (
            <Link key={index} href="/pages/Events/[id]" as={`/pages/Events/${item.id}`}>
              <Card
                item={item}
                className="w-screen h-screen border border-borderClr"
              />
            </Link>
          );
        } else {
          return (
            <Link key={index} href="/pages/News/[id]" as={`/pages/News/${item.id}`}>
              <Card
                
                item={item}
                className="w-screen h-screen border border-borderClr"
              />
            </Link>
          );
        }
      })}
    </div>
  );
}
