import Merchs from "@/app/constants/Merchs";
import MerchCard from "@/app/components/MerchCard";

export default function Merch() {
  return (
    <div className='flex flex-nowrap w-fit h-full'>
      {
        Merchs.map((item, index)=>{
          return(
            <MerchCard key={index} item={item} className='w-screen h-screen border border-borderClr' />
          )
        })
      }
    </div>
  )
}
