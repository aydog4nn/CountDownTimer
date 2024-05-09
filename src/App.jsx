import { useState, useEffect } from "react";

function App() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "May,13,2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / (1000 * 60)) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-body-bg min-h-screen m-0 p-0 h-lvh">

        <div className="bg-black flex flex-col  text-center justify-center align-middle">
            <div className="bg-black h-lvh flex flex-col items-center justify-center align-middle gap-5">
                <div className="bg-black flex flex-col items-center text-center  ">
                    <div>
                        <h1>This is not a brand</h1>
                    </div>
                    <div>
                        <h1 className="mt-2">This is an idea</h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row basis-1/3 gap-5 text-center  items-center ">
                    <div className="timer-boxs " id="box">
                        <p>{days}</p>
                        <span>days</span>
                    </div>

                    <div className="timer-boxs">
                        <p>{hours}</p>
                        <span>hours</span>
                    </div>

                    <div className="timer-boxs">
                        <p>{minutes}</p>
                        <span>minutes</span>
                    </div>

                    <div className="timer-boxs">
                        <p>{seconds}</p>
                        <span>seconds</span>
                    </div>
                </div>
            </div>
            
        </div>
        </section>
    );
}

export default App;
