const labels = ['0', '10', '20', '30', '40', '50', '60', '70', '80'];
// setup 
const data = {
    labels: labels,
    datasets: [
        {
            label: 'O(n^n)',
            data: [0, 17, 80],
            backgroundColor: 'dodgerblue',
            borderColor: 'dodgerblue',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
        {
            label: 'O(n3)',
            data: [0, 7, 25, 80],
            backgroundColor: 'green', 
            borderColor: 'green',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
        {
            label: 'O(n2)',
            data: [0, 3, 10, 35, 80],
            backgroundColor: 'violet',
            borderColor: 'violet',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
        {
            label: 'O(n)',
            data: [0, 10, 20, 30, 40, 50, 60, 70, 80],
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
        {
            label: 'O(log n)',
            data: [0, 20, 32, 38, 42, 45, 45, 45, 45, 45, 80],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
        {
            label: 'O(n log n)',
            data: [0, 3, 8, 14, 21, 28, 35, 42, 50],
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
        {
            label: 'O(1)',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        }
    ]
};

const data1 = {
    labels: labels,
    datasets: [
        {
            label: 'O(n^n)',
            data: [0, 20, 80],
            backgroundColor: 'dodgerblue',
            borderColor: 'dodgerblue',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};

const data2 = {
    labels: labels,
    datasets: [
        {
            label: 'O(n^3)',
            data: [0, 5, 25, 80],
            backgroundColor: 'green', 
            borderColor: 'green',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};

const data3 = {
    labels: labels,
    datasets: [
        {
            label: 'O(n^2)',
            data: [0, 0, 10, 35, 80],
            backgroundColor: 'violet',
            borderColor: 'violet',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};

const data4 = {
    labels: labels,
    datasets: [
        {
            label: 'O(n)',
            data: [0, 10, 20, 30, 40, 50, 60, 70, 80],
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};

const data5 = {
    labels: labels,
    datasets: [
        {
            label: 'O(log n)',
            data: [0, 20, 32, 38, 42, 45, 45, 45, 45, 45, 80],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};

const data6 = {
    labels: labels,
    datasets: [
        {
            label: 'O(n log n)',
            data: [0, 3, 8, 14, 21, 28, 35, 42, 50],
            backgroundColor: 'pink',
            borderColor: 'pink',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};

const data7 = {
    labels: labels,
    datasets: [
        {
            label: 'O(1)',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 2,
            tension: .3,
            pointRadius: 0
        },
    ]
};


// config
chartInfo = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Big O notation'
            }
        }
    },
};

// render init block
// new Chart(document.querySelectorAll('.myChart')[0], chartInfo);
// new Chart(document.querySelectorAll('.myChart')[1], chartInfo);

// For executing the code 
function executeCode(){

    $.ajax({
        method: "POST",
        url: "/awit/compiler.php",
        data: {
            code: textArea.value
        },
        success: function(response){

            $(".text").text(response);

            single_chartInfo = {
                type: 'line',
                data: data7,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Big O notation'
                        }
                    }
                },
            };

            // render init block
            const chart1 = new Chart(document.querySelectorAll('.myChart')[0], single_chartInfo);
            const chart2 = new Chart(document.querySelectorAll('.myChart')[1], single_chartInfo);

            let analysis = "Analysis output here... ...";
            
            // data7 = O(1)
            $(".analysis").text("A constant algorithm – O(1)\n\nRuntime remains constant through runtime execution.\n\nBig O notation is a way to express the speed of algorithms. n is the amount of data the algorithm is working with. O(1) means that, no matter how much data, it will execute in constant time");
            
            // data3 = O(n^2)
            // $(".analysis").text("A quadratic algorithm – O(n^2)\n\nRuntime grows quicker based on n.\n\nO(n) is O(n^2) can be interpreted as. The second function is always greater (or equal to) the first function for all values greater than n_0.");
            
            // data4 = O(n)
            // $(".analysis").text("A linear algorithm – O(n)\n\nRuntime grows directly in proportion to n.\n\nO(n) is Big O Notation and refers to the complexity of a given algorithm. n refers to the size of the input.");
            
            // data5 = O(log n)
            // $(".analysis").text("A logarithmic algorithm – O(logn)\n\nRuntime grows logarithmically in proportion to n.\n\nessentially means that the running time grows in proportion to the logarithm of the input size.");
            
        }
    });
}

