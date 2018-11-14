const data = {
    labels: [
        "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T"
    ],
    datasets: [
        {
            name: "Some Data", type: "area",
            values: [25, 40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52, 17, 4, 25, 40, 30, 35, 8, 52]
        },
        {
            name: "Another Set", type: "area",
            values: [25, 50, 10, 15, 18, 32, 27, 14, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14, 27, 14, 25, 50, 10, 15, 18, 32, 27, 14, 27, 14]
        }
    ]
}
const chart = new frappe.Chart("#chart", {  // or a DOM element,
    // new Chart() in case of ES6 module with above usage
    data: data,
    type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 400,
    colors: ['#7cd6fd', '#743ee2'],
    axisOptions: {
        yAxisMode: 'span',
        xAxisMode: 'span',
        xIsSeries: 1 // default: false
    },
    lineOptions: {
        hideDots: 1, // default: 0
        heatline:1,
        regionFill:1
    },
    isNavigable:0
})