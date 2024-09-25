import { CardSpotlightDemo } from "../Components/Cards"

export default function Project() {
  return (
    <>
    <div className="mt-44" id="project">
        <h1 className="font-serif text-white text-7xl flex justify-center">Recent Works</h1>
    <div className="grid grid-cols-3 mt-44 flex justify-center ml-14 mr-14 gap-10">
       <CardSpotlightDemo/>
       <CardSpotlightDemo/>
       <CardSpotlightDemo/>
       <CardSpotlightDemo/>

    </div>
    </div>
    </>
  )
}
