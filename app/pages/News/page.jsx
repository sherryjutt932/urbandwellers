import NewsList from "@/app/constants/News";
import Card from "@/app/components/Card";

export default function News() {
  return (
    <div className='flex flex-nowrap w-fit h-full'>
      {
        NewsList.map((item, index)=>{
          return(
            <Card key={index} item={item} className='w-screen h-screen border border-borderClr' />
          )
        })
      }
    </div>
  )
}
