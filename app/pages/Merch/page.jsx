import Merchs from "../../constants/Merchs";
import MerchCard from "../../components/MerchCard";

export default function Merch() {
  return (
    <div className='flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full'>
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
