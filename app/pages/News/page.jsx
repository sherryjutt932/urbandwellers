import NewsList from "@/app/constants/News";
import Card from "@/app/components/Card";
import Filter from "@/app/components/Filter";
import NewsFilter from "@/app/constants/NewsFilter";

export default function News() {
  return (
    <div className='flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full  pt-10 sm:pt-0'>
      <Filter item={NewsFilter} name="events"/>

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
