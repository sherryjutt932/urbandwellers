import Card from "../../components/Card";
import Filter from "../../components/Filter";
import EventsFilter from "../../constants/EventsFilter";
import Link from "next/link";
import EventsList from "../../constants/Events";

export default function Events() {
  return (
    <div className='flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full  pt-10 sm:pt-0'>
        <Filter item={EventsFilter} name="events"/>
      {
        EventsList.map((item, index)=>{
          return(
            <Link  
    href="/pages/Events/[id]" key={index} as={`/pages/Events/${item.id}`}
    >
            <Card  item={item} className='w-screen h-screen border border-borderClr' />
            </Link>
          )
        })
      }
    </div>
  )
}
