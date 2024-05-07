import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"

const Main =()=> {

    return (
        <main>
            <div className="container">
                <div className="one col-md-9">
                    <Section1 />
                </div>
                <div className="two col-md-9 text-end">
                    <Section2 />
                </div>
                <div className="three col-md-9">
                    <Section3 />
                </div>
            </div>
        </main>
    )
}

export default Main