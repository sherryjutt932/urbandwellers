import NewsList from "../../constants/News";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import NewsFilter from "../../constants/NewsFilter";
import Link from "next/link";

export default function News() {
  return (
    <div className='flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full  pt-10 sm:pt-0'>
      <Filter item={NewsFilter} name="events"/>

      {
        NewsList.map((item, index)=>{
          return(
            <Link  
    href="/pages/News/[id]" as={`/pages/News/${item.id}`}
    >
            <Card key={index} item={item} className='w-screen h-screen border border-borderClr' />
            </Link>
          )
        })
      }
    </div>
  )
}
