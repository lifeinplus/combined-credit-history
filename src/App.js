import { Navbar } from "./Layouts";
import { Report } from "./Pages/Report";

import data from "./data/945349.json";

function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Report data={data} />
            </main>
        </div>
    );
}

export default App;
