document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.feature');
    const totalPriceElement = document.getElementById('total-price');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute('data-price'));
            }
        });
        totalPriceElement.textContent = total.toFixed(2);
    }
});

