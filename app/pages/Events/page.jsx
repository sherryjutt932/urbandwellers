import EventsList from "@/app/constants/Events";
import Card from "@/app/components/Card";
import Filter from "@/app/components/Filter";
import EventsFilter from "@/app/constants/EventsFilter";

export default function Events() {
  return (
    <div className='flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full  pt-10 sm:pt-0'>
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
