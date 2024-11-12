// Monthly Orders Chart
const monthlyOrdersCtx = document.getElementById('monthlyOrdersChart').getContext('2d');
new Chart(monthlyOrdersCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Orders',
            data: [50, 60, 70, 80, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    },
    options: {
        responsive: true
    }
});

// Most Popular Products Chart
const popularProductsCtx = document.getElementById('popularProductsChart').getContext('2d');
new Chart(popularProductsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Dog Food', 'Cat Food', 'Bird Food', 'Rabbit Food', 'Fish Food', 'Horse Food'],
        datasets: [{
            data: [55, 25, 20, 15, 30, 10],
            backgroundColor: ['#ff6347', '#36a2eb', '#ffcd56', '#4caf50', '#ff5722', '#8e24aa'],
        }]
    },
    options: {
        responsive: true
    }
});

// Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Revenue ($)',
            data: [3000, 4000, 3200, 4500, 5000],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true
        }]
    },
    options: {
        responsive: true
    }
});