import EventsList from "@/app/constants/Events";
import Card from "@/app/components/Card";
import Filter from "@/app/components/Filter";
import EventsFilter from "@/app/constants/EventsFilter";

export default function Events() {
  return (
<<<<<<< HEAD
    <div className='flex flex-nowrap w-fit h-full sm:pt-10'>
=======
    <div className='flex flex-nowrap w-fit h-full pt-10 sm:pt-0'>
>>>>>>> 96afd09dfca5fc454fd6a6fcb19cb10f0854b0d5
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
