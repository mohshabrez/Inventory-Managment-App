import { CustomChart } from "../components/customChart"

export const Reports = () => {
    return(
        <div className="p-4 flex flex-col gap-4">
            <h2>Reports:</h2>
            <div className="h-max flex flex-col md:flex-row justify-center items-center">
                <CustomChart reportType="inventory"/>
                <CustomChart reportType="sales"/>
            </div>
        </div>
    )
}