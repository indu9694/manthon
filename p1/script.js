document.addEventListener('DOMContentLoaded', () => {
    const addRowButton = document.getElementById('add-row');
    const downloadPdfButton = document.getElementById('download-pdf');
    const productTableBody = document.querySelector('#product-table tbody');
    const grandTotalElement = document.getElementById('grand-total');
    const pdfModal = document.getElementById('pdf-modal');
    const pdfIframe = document.getElementById('pdf-iframe');
    const confirmDownloadButton = document.getElementById('confirm-download');
    const closeModalButton = document.getElementById( 'close-modal');

    const products = [
        { name: 'Apples', price: 3.00 },
        { name: 'Bananas', price: 2.50 },
        { name: 'Carrots', price: 1.20 },
        { name: 'Tomatoes', price: 2.30 },
        { name: 'Potatoes', price: 1.00 },
        { name: 'Onions', price: 1.50 },
        { name: 'Milk', price: 1.20 },
        { name: 'Bread', price: 2.00 },
        { name: 'Eggs', price: 2.50 },
        { name: 'Butter', price: 3.00 },
        { name: 'Cheese', price: 4.00 },
        { name: 'Rice', price: 1.80 },
        { name: 'Flour', price: 1.50 },
        { name: 'Sugar', price: 1.00 },
        { name: 'Salt', price: 0.50 },
        { name: 'Pasta', price: 2.00 },
        { name: 'Oats', price: 3.00 },
        { name: 'Yogurt', price: 1.50 },
        { name: 'Chicken', price: 5.00 },
        { name: 'Beef', price: 6.00 },
        { name: 'Fish', price: 7.00 },
        { name: 'Lentils', price: 2.50 },
        { name: 'Beans', price: 2.00 },
        { name: 'Peas', price: 1.80 },
        { name: 'Coffee', price: 4.00 },
        { name: 'Tea', price: 3.50 },
        { name: 'Juice', price: 2.00 },
        { name: 'Soft Drinks', price: 1.50 },
        { name: 'Cookies', price: 2.00 },
        { name: 'Chips', price: 1.80 },
        { name: 'Nuts', price: 5.00 },
        { name: 'Chocolate', price: 2.50 },
        { name: 'Spices', price: 1.50 },
        { name: 'Vinegar', price: 1.20 },
        { name: 'Oil', price: 2.50 },
        { name: 'Sauce', price: 2.00 },
        { name: 'Mustard', price: 1.00 },
        { name: 'Ketchup', price: 1.50 },
        { name: 'Honey', price: 3.50 },
        { name: 'Jam', price: 2.50 },
        { name: 'Pickles', price: 1.80 },
        { name: 'Mayonnaise', price: 2.00 },
        { name: 'Cream', price: 2.50 },
        { name: 'Cereal', price: 3.00 },
        { name: 'Granola', price: 4.00 },
        { name: 'Pancake Mix', price: 2.50 },
        { name: 'Waffles', price: 3.00 },
        { name: 'Syrup', price: 2.00 },
        { name: 'Maple Syrup', price: 4.00 }
    ];

    function updateGrandTotal() {
        let total = 0;
        document.querySelectorAll('#product-table tbody tr').forEach(row => {
            const quantity = parseFloat(row.querySelector('.quantity').value) || 0;
            const price = parseFloat(row.querySelector('.product-description').selectedOptions[0]?.getAttribute('data-price')) || 0;
            const amount = quantity * price;
            row.querySelector('.total-amount').value = amount.toFixed(2);
            total += amount;
        });
        grandTotalElement.textContent = `Grand Total: ${total.toFixed(2)}`;
    }

    function updateRowNumbers() {
        document.querySelectorAll('#product-table tbody tr').forEach((row, index) => {
            row.querySelector('.sno').textContent = index + 1;
        });
    }

    addRowButton.addEventListener('click', () => {
        const row = document.createElement('tr');
        const productOptions = products.map(product =>
            `<option value="${product.name}" data-price="${product.price}">${product.name}</option>`
        ).join('');
        row.innerHTML = `
            <td class="sno">1</td>
            <td>
                <select class="product-description">
                    <option value="">Select Product</option>
                    ${productOptions}
                </select>
            </td>
            <td><input type="number" class="quantity" min="0" value="0"></td>
            <td><input type="number" class="unit-price" min="0" step="0.01" readonly></td>
            <td><input type="number" class="total-amount" min="0" step="0.01" value="0.00" readonly></td>
            <td><button class="delete-row">Delete</button></td>
        `;
        row.querySelector('.product-description').addEventListener('change', function () {
            const price = parseFloat(this.selectedOptions[0]?.getAttribute('data-price')) || 0;
            row.querySelector('.unit-price').value = price.toFixed(2);
            updateGrandTotal();
        });
        row.querySelector('.quantity').addEventListener('input', updateGrandTotal);
        row.querySelector('.delete-row').addEventListener('click', () => {
            row.remove();
            updateGrandTotal();
            updateRowNumbers();
        });
        productTableBody.appendChild(row);
        updateRowNumbers(); // Update row numbers after adding a new row
    });

    function formatDate(date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function generatePdfContent() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        let data = [];
        document.querySelectorAll('#product-table tbody tr').forEach(row => {
            const rowData = [
                row.querySelector('.sno').textContent,
                row.querySelector('.product-description').value,
                row.querySelector('.quantity').value,
                row.querySelector('.unit-price').value,
                row.querySelector('.total-amount').value,
            ];
            data.push(rowData);
        });

        // Distributor title and retailer details
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 128);
        doc.text('DISTRIBUTOR', 10, 10);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Retailer Name: ${document.getElementById('retailer-name').value}`, 10, 20);
        doc.text(`Billing Date: ${formatDate(document.getElementById('billing-date').value)}`, 10, 30);
        doc.text(`Retailer Address: ${document.getElementById('retailer-address').value}`, 10, 40);

        // Add table to PDF
        doc.autoTable({
            head: [['S.No.', 'Product Description', 'Quantity', 'Unit Price', 'Total Amount']],
            body: data,
            startY: 50,
            styles: {
                cellPadding: 4,
                fontSize: 10,
                overflow: 'linebreak',
                halign: 'center'
            },
            headStyles: {
                fillColor: [0, 0, 128],
                textColor: [255, 255, 255],
                fontSize: 12
            },
            margin: { horizontal: 10 },
            columnStyles: {
                0: { halign: 'center' },
                1: { halign: 'left' },
                2: { halign: 'center' },
                3: { halign: 'center' },
                4: { halign: 'center' }
            },
        });

        // Add Grand Total
        doc.text(`Grand Total: ${grandTotalElement.textContent.replace('Grand Total: ', '')}`, 10, doc.lastAutoTable.finalY + 10);

        return doc;
    }

    downloadPdfButton.addEventListener('click', () => {
        const doc = generatePdfContent();
        const pdfString = doc.output('bloburl');
        pdfIframe.src = pdfString;
        pdfModal.style.display = 'block';

        confirmDownloadButton.addEventListener('click', () => {
            doc.save('product-receipt.pdf');
            pdfModal.style.display = 'none';
        });

        closeModalButton.addEventListener('click', () => {
            pdfModal.style.display = 'none';
        });
    });
});
