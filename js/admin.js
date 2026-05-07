let products = [];
let messages = [];
let orders = [];
let siteSettings = {};

document.addEventListener('DOMContentLoaded', () => {
    loadAllData();
    initAdmin();
});

function loadAllData() {
    products = JSON.parse(localStorage.getItem('lordProducts')) || [];
    messages = JSON.parse(localStorage.getItem('lordMessages')) || [];
    orders = JSON.parse(localStorage.getItem('lordOrders')) || [];
    siteSettings = JSON.parse(localStorage.getItem('lordSettings')) || {
        phone: '+216 12 345 678',
        whatsapp: '12345678',
        email: 'contact@lordnutrition.com',
        address: 'Tunis, Tunisia',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com'
    };
}

function saveProducts() { localStorage.setItem('lordProducts', JSON.stringify(products)); }
function saveMessages() { localStorage.setItem('lordMessages', JSON.stringify(messages)); }
function saveOrders() { localStorage.setItem('lordOrders', JSON.stringify(orders)); }
function saveSettings() { localStorage.setItem('lordSettings', JSON.stringify(siteSettings)); }

function initAdmin() {
    // Nav Click Handlers
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = item.dataset.tab;
            switchTab(tab);
        });
    });

    // Form Handlers
    document.getElementById('productForm').addEventListener('submit', handleProductSubmit);
    document.getElementById('settingsForm').addEventListener('submit', handleSettingsSubmit);

    // Image Upload Logic
    initImageUpload();

    // Initial Render
    renderAll();
    updateBadges();
}

function switchTab(tab) {
    // Update Sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tab);
    });

    // Update Content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    const targetId = 'tab' + tab.charAt(0).toUpperCase() + tab.slice(1);
    const targetPane = document.getElementById(targetId);
    if (targetPane) targetPane.classList.add('active');

    // Section specific rendering
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'products') renderProductsTable();
    if (tab === 'orders') renderOrdersTable();
    if (tab === 'messages') renderMessagesTable();
    if (tab === 'settings') populateSettingsForm();
}

function renderAll() {
    renderDashboard();
    renderProductsTable();
    renderOrdersTable();
    renderMessagesTable();
    populateSettingsForm();
}

// --- Dashboard Logic ---
function renderDashboard() {
    const totalRevenue = orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + o.total, 0);
    document.getElementById('statRevenue').innerText = `${totalRevenue.toFixed(2)} TND`;
    document.getElementById('statOrders').innerText = orders.length;
    document.getElementById('statProducts').innerText = products.length;

    // Recent Orders
    const recentBody = document.getElementById('recentOrdersBody');
    recentBody.innerHTML = '';
    
    const statusNames = {
        'pending': 'Waiting',
        'confirmed': 'Confirmed',
        'shipped': 'Sending',
        'delivered': 'Selled'
    };

    [...orders].reverse().slice(0, 5).forEach(o => {
        const tr = document.createElement('tr');
        const statusKey = o.status || 'pending';
        const statusClass = `status-${statusKey}`;
        tr.innerHTML = `
            <td>${o.date.split(',')[0]}</td>
            <td>${o.name}</td>
            <td style="color:var(--primary-color); font-weight:700;">${o.total.toFixed(2)} TND</td>
            <td><span class="status-badge ${statusClass}">${statusNames[statusKey]}</span></td>
        `;
        recentBody.appendChild(tr);
    });
}

// --- Products Logic ---
function renderProductsTable() {
    const tbody = document.getElementById('productTableBody');
    tbody.innerHTML = '';

    products.forEach((p, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${p.image}" alt="Product"></td>
            <td>
                <strong>${p.name}</strong><br>
                <small style="color:var(--text-muted);">${p.flavors?.length || 0} Flavors | ${p.sizes?.length || 0} Sizes</small>
            </td>
            <td style="text-transform: capitalize;">${p.category}</td>
            <td>${p.price.toFixed(2)} TND</td>
            <td>
                <button class="action-btn" onclick="openModal(${idx})"><i class="fas fa-edit"></i></button>
                <button class="action-btn" onclick="deleteProduct(${idx})"><i class="fas fa-trash"></i></button>
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
        title.innerText = 'Add New Product';
        form.reset();
        document.getElementById('productId').value = '';
    } else {
        title.innerText = 'Edit Product';
        const p = products[index];
        document.getElementById('productId').value = index;
        document.getElementById('productName').value = p.name;
        document.getElementById('productCategory').value = p.category;
        document.getElementById('productPrice').value = p.price;
        // Handle Image Preview
        if (p.image) {
            showImagePreview(p.image);
            document.getElementById('productImageValue').value = p.image;
        } else {
            removeImagePreview();
        }
        document.getElementById('productDesc').value = p.desc;
        document.getElementById('productBenefits').value = p.benefits ? p.benefits.join(', ') : '';
        document.getElementById('productFlavors').value = p.flavors ? p.flavors.join(', ') : '';
        document.getElementById('productSizes').value = p.sizes ? p.sizes.join(', ') : '';
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function handleProductSubmit(e) {
    e.preventDefault();
    
    const idx = document.getElementById('productId').value;
    const productData = {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        image: document.getElementById('productImageValue').value || 'assets/product.png',
        desc: document.getElementById('productDesc').value,
        benefits: document.getElementById('productBenefits').value.split(',').map(s => s.trim()).filter(s => s),
        flavors: document.getElementById('productFlavors').value.split(',').map(s => s.trim()).filter(s => s),
        sizes: document.getElementById('productSizes').value.split(',').map(s => s.trim()).filter(s => s)
    };

    if (idx === '') {
        productData.id = Date.now();
        products.push(productData);
    } else {
        products[parseInt(idx)] = { ...products[parseInt(idx)], ...productData };
    }

    saveProducts();
    renderProductsTable();
    renderDashboard();
    closeModal();
}

function deleteProduct(idx) {
    if (confirm('Delete this product permanently?')) {
        products.splice(idx, 1);
        saveProducts();
        renderProductsTable();
        renderDashboard();
    }
}

// --- Orders Logic ---
function renderOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';
    
    [...orders].reverse().forEach((o, i) => {
        const actualIdx = orders.length - 1 - i;
        const tr = document.createElement('tr');
        if (!o.isRead) tr.style.background = 'rgba(229, 57, 53, 0.05)';
        
        const itemsText = o.items.map(it => `${it.quantity || 1}x ${it.name} (${it.flavor || 'N/A'})`).join('<br>');
        
        tr.innerHTML = `
            <td>${o.date}</td>
            <td><strong>${o.name}</strong><br><small>${o.phone}</small></td>
            <td>${o.address}<br><small>${o.city}</small></td>
            <td style="font-size:0.85rem;">${itemsText}</td>
            <td style="font-weight:700; color:var(--primary-color);">${o.total.toFixed(2)} TND</td>
            <td>
                <select class="status-select" onchange="updateOrderStatus(${actualIdx}, this.value)">
                    <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Waiting</option>
                    <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Sending</option>
                    <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Selled</option>
                </select>
                <button class="action-btn" onclick="deleteOrder(${actualIdx})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateOrderStatus(idx, newStatus) {
    orders[idx].status = newStatus;
    // Auto-mark as read if changed from pending
    if (newStatus !== 'pending') orders[idx].isRead = true;
    
    saveOrders();
    renderOrdersTable();
    renderDashboard();
    updateBadges();
}

function deleteOrder(idx) {
    if (confirm('Delete this order history?')) {
        orders.splice(idx, 1);
        saveOrders();
        renderOrdersTable();
        renderDashboard();
        updateBadges();
    }
}

// --- Messages Logic ---
function renderMessagesTable() {
    const tbody = document.getElementById('messagesTableBody');
    tbody.innerHTML = '';
    
    [...messages].reverse().forEach((m, i) => {
        const actualIdx = messages.length - 1 - i;
        const tr = document.createElement('tr');
        if (!m.isRead) tr.style.background = 'rgba(229, 57, 53, 0.05)';
        
        tr.innerHTML = `
            <td>${m.date}</td>
            <td><strong>${m.name}</strong></td>
            <td><a href="mailto:${m.email}">${m.email}</a></td>
            <td>${m.phone}</td>
            <td style="max-width:250px; font-size:0.85rem;">${m.message}</td>
            <td>
                ${!m.isRead ? `<button class="action-btn" style="color:#4CAF50;" onclick="markMsgRead(${actualIdx})"><i class="fas fa-check"></i></button>` : ''}
                <button class="action-btn" onclick="deleteMsg(${actualIdx})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function markMsgRead(idx) {
    messages[idx].isRead = true;
    saveMessages();
    renderMessagesTable();
    updateBadges();
}

function deleteMsg(idx) {
    if (confirm('Delete this message?')) {
        messages.splice(idx, 1);
        saveMessages();
        renderMessagesTable();
        updateBadges();
    }
}

// --- Settings Logic ---
function populateSettingsForm() {
    document.getElementById('setPhone').value = siteSettings.phone;
    document.getElementById('setWhatsapp').value = siteSettings.whatsapp;
    document.getElementById('setEmail').value = siteSettings.email;
    document.getElementById('setAddress').value = siteSettings.address;
    document.getElementById('setFacebook').value = siteSettings.facebook;
    document.getElementById('setInstagram').value = siteSettings.instagram;
}

function handleSettingsSubmit(e) {
    e.preventDefault();
    siteSettings = {
        phone: document.getElementById('setPhone').value,
        whatsapp: document.getElementById('setWhatsapp').value,
        email: document.getElementById('setEmail').value,
        address: document.getElementById('setAddress').value,
        facebook: document.getElementById('setFacebook').value,
        instagram: document.getElementById('setInstagram').value
    };
    saveSettings();
    alert('Settings saved successfully!');
}

function updateBadges() {
    const unreadOrders = orders.filter(o => !o.isRead).length;
    const unreadMsgs = messages.filter(m => !m.isRead).length;
    
    const oBadge = document.getElementById('orderBadge');
    const mBadge = document.getElementById('msgBadge');
    
    if (unreadOrders > 0) {
        oBadge.innerText = unreadOrders;
        oBadge.style.display = 'inline-block';
    } else {
        oBadge.style.display = 'none';
    }
    
    if (unreadMsgs > 0) {
        mBadge.innerText = unreadMsgs;
        mBadge.style.display = 'inline-block';
    } else {
        mBadge.style.display = 'none';
    }
}

// --- Image Upload Functions ---
function initImageUpload() {
    const dropZone = document.getElementById('imageDropZone');
    const fileInput = document.getElementById('productImageInput');

    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    ['dragleave', 'drop'].forEach(evt => {
        dropZone.addEventListener(evt, () => dropZone.classList.remove('dragover'));
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) handleImageFile(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleImageFile(e.target.files[0]);
    });
}

function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        showImagePreview(base64);
        document.getElementById('productImageValue').value = base64;
    };
    reader.readAsDataURL(file);
}

function showImagePreview(src) {
    const container = document.getElementById('imagePreviewContainer');
    const img = document.getElementById('imagePreview');
    img.src = src;
    container.style.display = 'flex';
}

function removeImagePreview() {
    const container = document.getElementById('imagePreviewContainer');
    const img = document.getElementById('imagePreview');
    img.src = '';
    container.style.display = 'none';
    document.getElementById('productImageValue').value = '';
    document.getElementById('productImageInput').value = '';
}
