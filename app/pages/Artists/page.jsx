import Latest from "@/app/constants/Latest";
import Card from "@/app/components/Card";
import Filter from "@/app/components/Filter";
import ArtistsFilter from "@/app/constants/ArtistsFilter";

export default function Artists() {
  return (
    <div className='flex flex-nowrap w-fit h-full'>
        <Filter item={ArtistsFilter} name="artists"/>
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
