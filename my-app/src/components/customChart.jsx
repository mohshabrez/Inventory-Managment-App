import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import randomColor from "randomcolor"
import { Pie } from "react-chartjs-2"
import { useSelector } from "react-redux"

ChartJS.register(ArcElement, Tooltip, Legend)

export const CustomChart = ({reportType}) => {
    const items = useSelector((state) => state.itemState.items)
    const sales = useSelector((state) => state.saleState.sales)

    let data = {};

    if(reportType === "inventory"){
        const chartColors = items.map(() => 
        randomColor({ luminosity: 'light', format: 'hex'})
        );

        data= {
            labels: items.map((item) => item?.name),
            datasets: [
                {
                    label: "Amount",
                    data: items.map((item) => item?.quantity * item?.price),
                    backgroundColor: chartColors,
                    borderColor: "#000000",
                    borderWidth: 1,
                  },
            ]
        }
    }

    if (reportType === "sales") {
        const chartColors = sales.map(() =>
          randomColor({ luminosity: "light", format: "hex" })
        );
    
        data = {
          labels: sales.map((sale) =>
            sale?.item ? sale?.item?.name : "Out of Stock Item"
          ),
          datasets: [
            {
              label: "Amount",
              data: sales.map((sale) => sale?.quantity * sale?.price),
              backgroundColor: chartColors,
              borderColor: "#000000",
              borderWidth: 1,
            },
          ],
        };
      }

    return(
        <div className="max-w-[100%] md:max-w-[500px] flex flex-col items-center gap-2">
            <h3>
                {reportType === "inventory" ? "Inventory Report": "Sales Report"}
            </h3>

            <Pie data={data}/>
        </div>
    )
}