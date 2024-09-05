import React, {useState, useEffect} from "react"
import axios from "axios"
import countWords from "../utils/util";

const EntryList = () => {
    // State to store entries from the API
    const [entries, setEntries] = useState([])
    // State to store the current filter type
    const [filter, setFilter] = useState("none")

    // Fetch entries from the API when the component mounts
    useEffect(() => {
        const fetchEntries = async () => {
            const response = await axios.get("http://localhost:5000/api/entries")
            setEntries(response.data)
        }
        fetchEntries()
    }, [])

    // Filter and sort entries based on the selected filter
    const filterEntries = () => {
        if (filter === "moreThanFive") {
            return entries
                .filter((entry) => countWords(entry.title) > 5)
                .sort((a, b) => b.comments - a.comments)
        }
        if (filter === "fiveOrLess") {
            return entries
                .filter((entry) => countWords(entry.title) <= 5)
                .sort((a, b) => b.points - a.points)
        }
        return entries
    }

    return (<div>
        <h1 className="text-2xl font-bold mb-4 flex justify-center"> Crawling Hacker News </h1>
        <div className="flex justify-center mb-3">
            <button onClick={() => setFilter("moreThanFive")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3">
                More than 5 words
            </button>
            <button onClick={() => setFilter("fiveOrLess")}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ml-3">
                5 words or less
            </button>
        </div>

        <ul>
            {filterEntries().map((entry, index) => (<li
                key={index}
                className="p-4 bg-gray-50 border rounded-lg shadow-sm mb-2">
                <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    {entry.title}
                </a>
                <div className="text-sm text-gray-500">
                    {entry.points} points, {entry.comments} comments
                </div>
            </li>))}
        </ul>
    </div>)
}

export default EntryList
