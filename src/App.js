import "./App.css";
import { CreditHistory } from "./components/CreditHistory";
import { PersonalData } from "./components/PersonalData";
import application from "./data/945349.json";

function App() {
    const {
        CREATIONDATE,
        DOCUMENTNUMBER,
        ScoringBall,
        microcreditRequestsCounts,
        personInfo,
        requestsCounts,
    } = application;

    return (
        <div className="App">
            <PersonalData
                applicationNumber={DOCUMENTNUMBER}
                creationDate={CREATIONDATE}
                documents={personInfo}
                requestsCounts={{ ...requestsCounts, score: ScoringBall }}
                requestsMicrocreditCounts={microcreditRequestsCounts}
            />
            <CreditHistory />
        </div>
    );
}

export default App;
