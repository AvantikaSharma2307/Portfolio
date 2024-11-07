import { CardSpotlightDemo } from "../Components/Cards"
import Image from "../assests/DALL·E 2024-09-28 14.53.52 - A modern kitchen counter with ingredients like vegetables, fruits, and spices laid out neatly. There are kitchen utensils like a knife, a cutting boar.webp"
import Image1 from "../assests/android-chrome-192x192.png"
import Image2 from "../assests/DALL·E 2024-11-06 22.31.32 - An image representing a GitHub user finder tool interface. The tool displays a search bar at the top where users can type a GitHub username, followed .webp"
export default function Project() {
  return (
    <>
    <div className="mt-44" id="project">
    <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex justify-center mb-10 md:mb-14">Recent Works</h1>
    <div className="flex flex-wrap   flex justify-center ml-14 mr-14 gap-10">
       <CardSpotlightDemo name="AydiLOOks" image={Image1} url="https://github.com/AydiLooks/aydilooks" />
       <CardSpotlightDemo name="Receipe project" image={Image} url="https://github.com/AvantikaSharma2307/Receipe-Project" />
       <CardSpotlightDemo name="Github_User_Finder" image={Image2} url="https://github.com/AvantikaSharma2307/Innogeeks-web"/>
       {/* <CardSpotlightDemo name="d" image="" url="" /> */}

    </div>
    </div>
    </>
  )
}
