import Latest from "@/app/constants/Latest";
import Card from "@/app/components/Card";
import Filter from "@/app/components/Filter";
import EventsFilter from "@/app/constants/EventsFilter";

export default function Events() {
  return (
    <div className='flex flex-nowrap w-fit h-full'>
        <Filter item={EventsFilter} name="events"/>
      {
        Latest.map((item, index)=>{
          return(
            <Card key={index} item={item} className='w-screen h-screen border border-borderClr' />
          )
        })
      }
    </div>
  )
}
