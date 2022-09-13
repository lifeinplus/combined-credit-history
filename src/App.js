import { Navbar } from "./Layouts";
import Report from "./Pages/Report";

import data from "./data/945349.json";

const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Report data={data} />
            </main>
        </>
    );
};

export default App;
