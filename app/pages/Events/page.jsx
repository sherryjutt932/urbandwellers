import EventsList from "@/app/constants/Events";
import Card from "@/app/components/Card";
import Filter from "@/app/components/Filter";
import EventsFilter from "@/app/constants/EventsFilter";

export default function Events() {
  return (
    <div className='flex flex-nowrap w-fit h-full sm:pt-10'>
        <Filter item={EventsFilter} name="events"/>
      {
        EventsList.map((item, index)=>{
          return(
            <Card key={index} item={item} className='w-screen h-screen border border-borderClr' />
          )
        })
      }
    </div>
  )
}
