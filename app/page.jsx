import Latest from "./constants/Latest";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className='flex flex-nowrap w-fit h-full'>
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
