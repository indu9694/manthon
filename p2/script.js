// List of 200 Grocery Items
const groceryItems = [
    "Apple", "Banana", "Orange", "Tomato", "Potato", "Onion", "Garlic", "Ginger", "Cucumber", "Carrot",
     "Spinach", "Lettuce", "Broccoli", "Cauliflower", "Mushrooms", "Green Beans", "Peas", "Corn", "Zucchini", "Eggplant",
     "Chicken Breast", "Ground Beef", "Salmon", "Tuna", "Shrimp", "Pork Chops", "Turkey", "Bacon", "Sausage", "Eggs",
     "Milk", "Cheese", "Yogurt", "Butter", "Cream", "Cottage Cheese", "Ice Cream", "Frozen Peas", "Frozen Corn", "Frozen Spinach",
     "Rice", "Flour", "Sugar", "Salt", "Pepper", "Olive Oil", "Vegetable Oil", "Vinegar", "Soy Sauce", "Tomato Sauce",
     "Pasta", "Bread", "Tortillas", "Bagels", "English Muffins", "Pita Bread", "Cereal", "Oats", "Granola", "Pancake Mix",
     "Tea", "Coffee", "Juice", "Soda", "Energy Drinks", "Bottled Water", "Sports Drinks", "Wine", "Beer", "Whiskey",
     "Shampoo", "Conditioner", "Toothpaste", "Toothbrush", "Mouthwash", "Soap", "Body Wash", "Lotion", "Deodorant", "Shaving Cream",
     "Paper Towels", "Toilet Paper", "Napkins", "Aluminum Foil", "Plastic Wrap", "Trash Bags", "Sponges", "Dish Soap", "Laundry Detergent", "Bleach",
     "Cleaning Spray", "Glass Cleaner", "Disinfectant Wipes", "Hand Sanitizer", "Broom", "Mop", "Dustpan", "Vacuum Bags", "Light Bulbs", "Batteries",
     "Dog Food", "Cat Food", "Bird Seed", "Fish Food", "Dog Treats", "Cat Treats", "Cat Litter", "Pet Toys", "Pet Shampoo", "Pet Beds",
     "First Aid Kit", "Band-Aids", "Antibiotic Ointment", "Pain Reliever", "Cough Syrup", "Allergy Medication", "Vitamins", "Thermometer", "Hand Soap", "Disinfectant Spray",
     "Frozen Pizza", "Frozen Vegetables", "Frozen Fruit", "Frozen Burritos", "Frozen Dinners", "Frozen Waffles", "Frozen Pancakes", "Frozen French Fries", "Frozen Tater Tots", "Frozen Chicken Nuggets",
     "Granola Bars", "Protein Bars", "Chips", "Crackers", "Popcorn", "Pretzels", "Nuts", "Trail Mix", "Candy", "Cookies",
     "Ketchup", "Mustard", "Mayonnaise", "Barbecue Sauce", "Hot Sauce", "Salad Dressing", "Salsa", "Pickles", "Olives", "Relish",
     "Tofu", "Tempeh", "Seitan", "Vegan Cheese", "Almond Milk", "Soy Milk", "Coconut Milk", "Oat Milk", "Coconut Oil", "Peanut Butter",
     "Jam", "Honey", "Maple Syrup", "Agave Syrup", "Molasses", "Cinnamon", "Nutmeg", "Cloves", "Bay Leaves", "Oregano",
     "Basil", "Thyme", "Rosemary", "Dill", "Cilantro", "Parsley", "Chili Powder", "Paprika", "Cumin", "Turmeric",
     "Beef Jerky", "Pork Rinds", "Sunflower Seeds", "Pumpkin Seeds", "Sesame Seeds", "Chia Seeds", "Flax Seeds", "Quinoa", "Couscous", "Polenta",
     "Tapioca", "Cornstarch", "Baking Soda", "Baking Powder", "Yeast", "Pectin", "Gelatin", "Whipped Cream", "Evaporated Milk", "Condensed Milk"
     // Add the rest of the items here
 ];

 // Populate grocery items in select options
 function populateGroceryItems() {
     const selectElements = document.querySelectorAll('.goods-description');
     selectElements.forEach(select => {
         groceryItems.forEach(item => {
             const option = document.createElement('option');
             option.value = item;
             option.textContent = item;
             select.appendChild(option);
         });
     });
 }

 populateGroceryItems();

 // Update total amount
 function updateTotalAmount(element) {
     let row = element.closest('tr');
     let quantity = row.querySelector('.quantity').value;
     let amount = row.querySelector('.amount').value;
     let totalAmountCell = row.querySelector('.total-amount');

     let totalAmount = (quantity * amount).toFixed(2);
     totalAmountCell.innerText = totalAmount;
     calculateFinalTotal();
 }

 // Add new item row
 function addItem() {
     let table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
     let rowCount = table.rows.length;
     let newRow = table.insertRow();

     newRow.innerHTML = `
         <td>${rowCount + 1}</td>
         <td>
             <select class="goods-description">
                 <option value="">Select Item</option>
             </select>
         </td>
         <td><input type="number" class="quantity" oninput="updateTotalAmount(this)"></td>
         <td><input type="number" class="amount" oninput="updateTotalAmount(this)"></td>
         <td class="total-amount">0.00</td>
         <td class="hidden"><button class="delete-button" onclick="deleteItem(this)">Delete</button></td>
     `;

     populateGroceryItems(); // Populate the new row with grocery items
 }

 // Delete item row and re-sequence S.No.
 function deleteItem(button) {
     let row = button.closest('tr');
     row.remove();

     // Resequence the S.No. column
     let rows = document.querySelectorAll('#productTable tbody tr');
     rows.forEach((row, index) => {
         row.querySelector('td:first-child').innerText = index + 1;
     });

     calculateFinalTotal(); // Recalculate the totals
 }

 // Calculate CGST, SGST, GST and final total
 function calculateFinalTotal() {
     let totalAmountCells = document.querySelectorAll('.total-amount');
     let totalBeforeDiscount = 0;

     totalAmountCells.forEach(cell => {
         totalBeforeDiscount += parseFloat(cell.innerText);
     });

     let discountPercentage = document.getElementById('discount').value || 0;
     let discountAmount = (totalBeforeDiscount * discountPercentage) / 100;
     let totalBeforeGST = totalBeforeDiscount - discountAmount;

     let cgstPercentage = document.getElementById('cgst').value || 0;
     let sgstPercentage = document.getElementById('sgst').value || 0;
     let gstPercentage = document.getElementById('gst').value || 0;

     let cgstAmount = (totalBeforeGST * cgstPercentage) / 100;
     let sgstAmount = (totalBeforeGST * sgstPercentage) / 100;
     let gstAmount = (totalBeforeGST * gstPercentage) / 100;
     let totalGST = cgstAmount + sgstAmount + gstAmount;

     let finalTotal = totalBeforeGST + totalGST;

     document.getElementById('totalBeforeDiscount').innerText = totalBeforeDiscount.toFixed(2);
     document.getElementById('cgstAmount').innerText = cgstAmount.toFixed(2);
     document.getElementById('sgstAmount').innerText = sgstAmount.toFixed(2);
     document.getElementById('totalGST').innerText = totalGST.toFixed(2);
     document.getElementById('discountAmount').innerText = discountAmount.toFixed(2);
     document.getElementById('finalTotalAmount').innerText = finalTotal.toFixed(2);
 }

 // Preview PDF
 function previewPDF() {
     const { jsPDF } = window.jspdf;

     const doc = new jsPDF();
     doc.setFontSize(18);
     doc.text('TECHAVI DIGITAL AUTOMATION AGENCY', 10, 10);

     const customerName = document.getElementById('customerName').value;
     const customerDate = document.getElementById('customerDate').value;
     const customerAddress = document.getElementById('customerAddress').value;

     doc.setFontSize(12);
     doc.text(`Customer Name: ${customerName}`, 10, 20);
     doc.text(`Billing Date: ${customerDate}`, 10, 30);
     doc.text(`Customer Address: ${customerAddress}`, 10, 40);

     let rows = [];
     document.querySelectorAll('#productTable tbody tr').forEach(row => {
         let cells = Array.from(row.querySelectorAll('td'));
         let rowData = [
             cells[0].innerText,
             cells[1].querySelector('select').value || cells[1].innerText,
             cells[2].querySelector('input').value,
             cells[3].querySelector('input').value,
             cells[4].innerText
         ];
         rows.push(rowData);
     });

     doc.autoTable({
         head: [['S.No.', 'Goods Description', 'Quantity', 'Amount', 'Total Amount']],
         body: rows,
         startY: 50,
         theme: 'grid',
         headStyles: { fillColor: [139, 69, 19] }, // Saddle Brown color for headers
         columnStyles: {
             0: { halign: 'center' },
             4: { halign: 'right' }
         },
         margin: { top: 60 }
     });

     let totalBeforeDiscount = document.getElementById('totalBeforeDiscount').innerText;
     let cgstAmount = document.getElementById('cgstAmount').innerText;
     let sgstAmount = document.getElementById('sgstAmount').innerText;
     let totalGST = document.getElementById('totalGST').innerText;
     let discountAmount = document.getElementById('discountAmount').innerText;
     let finalTotal = document.getElementById('finalTotalAmount').innerText;

     doc.text(`Total Amount Before GST and Discount: INR ${totalBeforeDiscount}`, 10, doc.lastAutoTable.finalY + 10);
     doc.text(`CGST (${document.getElementById('cgst').value}%): INR ${cgstAmount}`, 10, doc.lastAutoTable.finalY + 20);
     doc.text(`SGST (${document.getElementById('sgst').value}%): INR ${sgstAmount}`, 10, doc.lastAutoTable.finalY + 30);
     doc.text(`GST (${document.getElementById('gst').value}%): INR ${totalGST}`, 10, doc.lastAutoTable.finalY + 40);
     doc.text(`Discount Amount: INR ${discountAmount}`, 10, doc.lastAutoTable.finalY + 50);
     doc.text(`Final Total Amount: INR ${finalTotal}`, 10, doc.lastAutoTable.finalY + 60);

     let pdfPreviewContainer = document.getElementById('pdfPreview');
     pdfPreviewContainer.classList.remove('hidden');
     pdfPreviewContainer.innerHTML = '<iframe src="' + doc.output('bloburl') + '" width="100%" height="600px"></iframe>';
 }

 // Save PDF
 function savePDF() {
     const { jsPDF } = window.jspdf;

     const doc = new jsPDF();
     doc.setFontSize(18);
     doc.text('TECHAVI DIGITAL AUTOMATION AGENCY', 10, 10);

     const customerName = document.getElementById('customerName').value;
     const customerDate = document.getElementById('customerDate').value;
     const customerAddress = document.getElementById('customerAddress').value;

     doc.setFontSize(12);
     doc.text(`Customer Name: ${customerName}`, 10, 20);
     doc.text(`Billing Date: ${customerDate}`, 10, 30);
     doc.text(`Customer Address: ${customerAddress}`, 10, 40);

     let rows = [];
     document.querySelectorAll('#productTable tbody tr').forEach(row => {
         let cells = Array.from(row.querySelectorAll('td'));
         let rowData = [
             cells[0].innerText,
             cells[1].querySelector('select').value || cells[1].innerText,
             cells[2].querySelector('input').value,
             cells[3].querySelector('input').value,
             cells[4].innerText
         ];
         rows.push(rowData);
     });

     doc.autoTable({
         head: [['S.No.', 'Goods Description', 'Quantity', 'Amount', 'Total Amount']],
         body: rows,
         startY: 50,
         theme: 'grid',
         headStyles: { fillColor: [139, 69, 19] }, // Saddle Brown color for headers
         columnStyles: {
             0: { halign: 'center' },
             4: { halign: 'right' }
         },
         margin: { top: 60 }
     });

     let totalBeforeDiscount = document.getElementById('totalBeforeDiscount').innerText;
     let cgstAmount = document.getElementById('cgstAmount').innerText;
     let sgstAmount = document.getElementById('sgstAmount').innerText;
     let totalGST = document.getElementById('totalGST').innerText;
     let discountAmount = document.getElementById('discountAmount').innerText;
     let finalTotal = document.getElementById('finalTotalAmount').innerText;

     doc.text(`Total Amount Before GST and Discount: INR ${totalBeforeDiscount}`, 10, doc.lastAutoTable.finalY + 10);
     doc.text(`CGST (${document.getElementById('cgst').value}%): INR ${cgstAmount}`, 10, doc.lastAutoTable.finalY + 20);
     doc.text(`SGST (${document.getElementById('sgst').value}%): INR ${sgstAmount}`, 10, doc.lastAutoTable.finalY + 30);
     doc.text(`GST (${document.getElementById('gst').value}%): INR ${totalGST}`, 10, doc.lastAutoTable.finalY + 40);
     doc.text(`Discount Amount: INR ${discountAmount}`, 10, doc.lastAutoTable.finalY + 50);
     doc.text(`Final Total Amount: INR ${finalTotal}`, 10, doc.lastAutoTable.finalY + 60);

     doc.save('bill.pdf');
 }







 // Delete item row and re-sequence S.No.
 function deleteItem(button) {
     let row = button.closest('tr');
     row.remove();

     // Resequence the S.No. column
     let rows = document.querySelectorAll('#productTable tbody tr');
     rows.forEach((row, index) => {
         row.querySelector('td:first-child').innerText = index + 1;
     });

     calculateFinalTotal(); // Recalculate the totals
}