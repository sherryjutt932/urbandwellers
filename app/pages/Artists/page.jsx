import ArtistsList from "@/app/constants/Artists";
import ArtistCard from "@/app/components/ArtistCard";
import Filter from "@/app/components/Filter";
import ArtistsFilter from "@/app/constants/ArtistsFilter";

export default function Artists() {
  return (
<<<<<<< HEAD
    <div className='flex flex-nowrap w-fit h-full sm:pt-10'>
=======
    <div className='flex flex-nowrap w-fit h-full pt-10 sm:pt-0'>
>>>>>>> 96afd09dfca5fc454fd6a6fcb19cb10f0854b0d5
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
