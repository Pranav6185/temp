import { useState } from "react";

export default function OvulationCalendar() {
    const [date, setDate] = useState("");
    const [cycleLength, setCycleLength] = useState(28);
    const [ovulationDate, setOvulationDate] = useState(null);
    const [fertileWindow, setFertileWindow] = useState(null);

    const calculateOvulation = () => {
        if (!date) return;
        const firstDay = new Date(date);
        const ovulationDay = new Date(firstDay);
        ovulationDay.setDate(firstDay.getDate() + cycleLength - 14);

        const fertileStart = new Date(ovulationDay);
        fertileStart.setDate(ovulationDay.getDate() - 5);
        const fertileEnd = new Date(ovulationDay);
        fertileEnd.setDate(ovulationDay.getDate() + 1);

        setOvulationDate(ovulationDay.toDateString());
        setFertileWindow(`${fertileStart.toDateString()} to ${fertileEnd.toDateString()}`);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
            <header className="text-center py-6">
                <h1 className="text-3xl font-bold text-red-500">Ovulation Calendar</h1>
            </header>
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Do you know when you ovulate?</h2>
                <p className="text-gray-600 mt-2">
                    Our popular ovulation calculator will estimate your fertility window.
                    This is the time period in your monthly cycle when you can potentially conceive.
                </p>
                <div className="mt-4">
                    <label className="block font-semibold">First Day of Last Menstrual Period:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border p-2 rounded mt-1"
                    />
                </div>
                <div className="mt-4">
                    <label className="block font-semibold">Average Length of Cycles:</label>
                    <input
                        type="number"
                        value={cycleLength}
                        onChange={(e) => setCycleLength(e.target.value)}
                        className="w-full border p-2 rounded mt-1"
                    />
                </div>
                <button
                    onClick={calculateOvulation}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow-md">
                    Get the Date!
                </button>

                {ovulationDate && (
                    <div className="mt-4 p-4 bg-green-100 rounded">
                        <p className="text-green-700 font-semibold">Estimated Ovulation Date: {ovulationDate}</p>
                        <p className="text-green-700 font-semibold">Fertile Window: {fertileWindow}</p>
                    </div>
                )}
            </section>


        </div>
    );
}
