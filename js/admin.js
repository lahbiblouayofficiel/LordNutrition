let products = [];
let messages = [];
let orders = [];

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadMessages();
    loadOrders();
    renderTable();
    renderMessagesTable();
    renderOrdersTable();
    updateBadge();

    document.getElementById('productForm').addEventListener('submit', handleFormSubmit);
});

function loadOrders() {
    orders = JSON.parse(localStorage.getItem('lordOrders')) || [];
}

function saveOrders() {
    localStorage.setItem('lordOrders', JSON.stringify(orders));
}

function loadMessages() {
    messages = JSON.parse(localStorage.getItem('lordMessages')) || [];
}

function saveMessages() {
    localStorage.setItem('lordMessages', JSON.stringify(messages));
}

function switchTab(tab) {
    const tabs = ['products', 'messages', 'orders'];
    tabs.forEach(t => {
        const div = document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1));
        const btn = document.getElementById('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
        
        if (t === tab) {
            div.style.display = 'block';
            btn.classList.add('btn-primary');
            btn.style.background = '';
        } else {
            div.style.display = 'none';
            btn.classList.remove('btn-primary');
            btn.style.background = '#333';
        }
    });
}

function renderMessagesTable() {
    const tbody = document.getElementById('messagesTableBody');
    tbody.innerHTML = '';
    
    if (messages.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 30px;">No messages yet.</td></tr>';
        return;
    }

    // Show newest first
    [...messages].reverse().forEach((msg, index) => {
        const actualIndex = messages.length - 1 - index;
        const tr = document.createElement('tr');
        
        // Highlight unread messages
        const fontWeight = msg.isRead ? 'normal' : 'bold';
        const bgColor = msg.isRead ? 'transparent' : 'rgba(239, 68, 68, 0.1)';
        
        tr.style.backgroundColor = bgColor;
        tr.style.fontWeight = fontWeight;
        
        tr.innerHTML = `
            <td style="white-space: nowrap; font-size: 0.9em; color: var(--text-muted);">${msg.date}</td>
            <td>${msg.name} ${!msg.isRead ? '<span style="color:var(--primary-color); font-size:10px; vertical-align:top;">NEW</span>' : ''}</td>
            <td><a href="mailto:${msg.email}" style="color: var(--primary-color);">${msg.email}</a></td>
            <td>${msg.phone || 'N/A'}</td>
            <td style="max-width: 300px; line-height: 1.4;">${msg.message}</td>
            <td>
                ${!msg.isRead ? `<button class="action-btn" style="color: #4CAF50;" onclick="markAsRead(${actualIndex})" title="Mark as Read"><i class="fas fa-eye"></i></button>` : ''}
                <button class="action-btn delete" onclick="deleteMessage(${actualIndex})" title="Delete"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateBadge() {
    // Messages
    const unreadMsgs = messages.filter(m => !m.isRead).length;
    const msgBadge = document.getElementById('msgBadge');
    if (unreadMsgs > 0) {
        msgBadge.innerText = unreadMsgs;
        msgBadge.style.display = 'inline-block';
    } else {
        msgBadge.style.display = 'none';
    }

    // Orders
    const unreadOrders = orders.filter(o => !o.isRead).length;
    const orderBadge = document.getElementById('orderBadge');
    if (unreadOrders > 0) {
        orderBadge.innerText = unreadOrders;
        orderBadge.style.display = 'inline-block';
    } else {
        orderBadge.style.display = 'none';
    }
}

// --- Orders Logic ---
function renderOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';
    
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 30px;">No orders yet.</td></tr>';
        return;
    }

    [...orders].reverse().forEach((order, index) => {
        const actualIndex = orders.length - 1 - index;
        const tr = document.createElement('tr');
        
        const fontWeight = order.isRead ? 'normal' : 'bold';
        const bgColor = order.isRead ? 'transparent' : 'rgba(239, 68, 68, 0.1)';
        
        tr.style.backgroundColor = bgColor;
        tr.style.fontWeight = fontWeight;
        
        const itemsList = order.items.map(item => `1x ${item.name}`).join('<br>');

        tr.innerHTML = `
            <td style="white-space: nowrap; font-size: 0.9em; color: var(--text-muted);">${order.date}</td>
            <td>${order.name}<br><small>${order.phone}</small> ${!order.isRead ? '<span style="color:var(--primary-color); font-size:10px; vertical-align:top;">NEW</span>' : ''}</td>
            <td>${order.address}<br><small>${order.city}</small></td>
            <td style="font-size: 0.9em;">${itemsList}</td>
            <td style="font-weight: bold; color: var(--primary-color);">${order.total.toFixed(2)} TND</td>
            <td>
                ${!order.isRead ? `<button class="action-btn" style="color: #4CAF50;" onclick="markOrderAsRead(${actualIndex})" title="Mark as Processed"><i class="fas fa-check"></i></button>` : ''}
                <button class="action-btn delete" onclick="deleteOrder(${actualIndex})" title="Delete"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function markOrderAsRead(index) {
    orders[index].isRead = true;
    saveOrders();
    renderOrdersTable();
    updateBadge();
}

function deleteOrder(index) {
    if (confirm('Delete this order?')) {
        orders.splice(index, 1);
        saveOrders();
        renderOrdersTable();
        updateBadge();
    }
}

function markAsRead(index) {
    messages[index].isRead = true;
    saveMessages();
    renderMessagesTable();
    updateBadge();
}

function deleteMessage(index) {
    if (confirm('Delete this message?')) {
        messages.splice(index, 1);
        saveMessages();
        renderMessagesTable();
        updateBadge();
    }
}

function loadProducts() {
    products = JSON.parse(localStorage.getItem('lordProducts')) || [];
}

function saveProducts() {
    localStorage.setItem('lordProducts', JSON.stringify(products));
}

function renderTable() {
    const tbody = document.getElementById('productTableBody');
    tbody.innerHTML = '';

    products.forEach((product, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${product.image}" alt="Product"></td>
            <td>${product.name}</td>
            <td style="text-transform: capitalize;">${product.category}</td>
            <td>${product.price.toFixed(2)} TND</td>
            <td>
                <button class="action-btn edit" onclick="editProduct(${index})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete" onclick="deleteProduct(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openModal(index = -1) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('modalTitle');
    const form = document.getElementById('productForm');
    
    if (index === -1) {
        title.innerText = 'Add Product';
        form.reset();
        document.getElementById('productId').value = '';
    } else {
        title.innerText = 'Edit Product';
        const product = products[index];
        document.getElementById('productId').value = index;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productImage').value = product.image;
        document.getElementById('productDesc').value = product.desc;
        document.getElementById('productBenefits').value = product.benefits.join(', ');
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const indexStr = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value || 'assets/product.png';
    const desc = document.getElementById('productDesc').value;
    const benefitsStr = document.getElementById('productBenefits').value;
    
    const benefits = benefitsStr.split(',').map(b => b.trim()).filter(b => b);

    if (indexStr === '') {
        // Add new
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, category, price, image, desc, benefits });
    } else {
        // Edit existing
        const index = parseInt(indexStr);
        products[index] = { ...products[index], name, category, price, image, desc, benefits };
    }

    saveProducts();
    renderTable();
    closeModal();
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        products.splice(index, 1);
        saveProducts();
        renderTable();
    }
}
