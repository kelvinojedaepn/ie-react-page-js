import './App.css';
import EntryList from "./components/EntryList";


function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl w-full p-6 bg-white shadow-md rounded-lg">
                <EntryList/>
            </div>
        </div>
    )
}

export default App;
