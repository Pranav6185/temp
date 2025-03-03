import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button1 } from "../components/ui/Button1";

export default function PregnancyDueDateCalculator() {
    const [lastPeriod, setLastPeriod] = useState("");
    const [cycleLength, setCycleLength] = useState(28);
    const [dueDate, setDueDate] = useState("");

    const calculateDueDate = () => {
        if (!lastPeriod) return;
        const lastPeriodDate = new Date(lastPeriod);
        lastPeriodDate.setDate(lastPeriodDate.getDate() + 280); // Average pregnancy duration (40 weeks)
        setDueDate(lastPeriodDate.toDateString());
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg mt-10">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Pregnancy Due Date Calculator
                </h1>
                <p className="text-gray-600 text-center mt-4">
                    Our easy-to-use pregnancy calculator is the number one most popular
                    way to calculate your due date based on the date of your last
                    menstrual period.
                </p>

                <div className="bg-blue-100 p-6 rounded-lg mt-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Pregnancy Calendar and Due Date Calculator
                    </h2>
                    <label className="block text-gray-600 mt-4">First Day of Last Menstrual Period*</label>
                    <Input
                        type="date"
                        value={lastPeriod}
                        onChange={(e) => setLastPeriod(e.target.value)}
                        className="mt-2"
                    />
                    <label className="block text-gray-600 mt-4">Average Length of Cycles</label>
                    <Input
                        type="number"
                        value={cycleLength}
                        onChange={(e) => setCycleLength(e.target.value)}
                        className="mt-2"
                    />
                    <Button1
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={calculateDueDate}
                    >
                        Get the Date!
                    </Button1>
                    {dueDate && (
                        <p className="mt-4 text-lg text-gray-700 font-semibold">
                            Estimated Due Date: {dueDate}
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
}
