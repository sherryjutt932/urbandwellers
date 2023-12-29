import ArtistsList from "@/app/constants/Artists";
import ArtistCard from "@/app/components/ArtistCard";
import Filter from "@/app/components/Filter";
import ArtistsFilter from "@/app/constants/ArtistsFilter";

export default function Artists() {
  return (
    <div className='flex flex-nowrap w-fit h-full sm:pt-10'>
        <Filter item={ArtistsFilter} name="artists"/>
      {
        ArtistsList.map((item, index)=>{
          return(
            <ArtistCard key={index} item={item} className='w-screen h-screen border border-borderClr' />
          )
        })
      }
    </div>
  )
}
