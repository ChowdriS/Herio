import { BuildingLibraryIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, RssIcon } from "@heroicons/react/20/solid"

const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <HomeIcon className="w-5 h-5"/>
            <p>Home</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <BuildingLibraryIcon className="w-5 h-5"/>
            <p>Library</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <MagnifyingGlassIcon className="w-5 h-5"/>
            <p>Search</p>
          </button>
        </div>
        <hr className="border-t-[0.5px] border-gray-900"/>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <PlusCircleIcon className="w-5 h-5"/>
            <p>Create Playlist</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <HeartIcon className="w-5 h-5"/>
            <p>Liked songs</p>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 hover:text-white">
            <RssIcon className="w-5 h-5"/>
            <p>Your Episodes</p>
          </button>
        </div>
        <hr className="border-t-[0.5px] border-gray-900"/>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  )
}

export default Sidebar
