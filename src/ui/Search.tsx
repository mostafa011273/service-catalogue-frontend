export default function Search(props: { placeHolder: string }) {
    
    return(
        <div>
            <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder={props.placeHolder}
            //   value={}
            //   onChange={(e) => setSearchId(e.target.value)}
              className="border p-2 rounded w-1/3"
            />
            <button
            //   onClick={}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
            >
              <img src="public/images/Search.svg" alt="search" className="w-8 h-8" />
              Search
            </button>
          </div>
        </div>
    )
}