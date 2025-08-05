// Navigation
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
showPage('about');

// To-Do Logic
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${i})">
      <span style="text-decoration:${task.completed ? 'line-through' : 'none'}">${task.text}</span>
      <button class="remove-btn" onclick="deleteTask(${i})">Remove</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}

function toggleTask(i) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[i].completed = !tasks[i].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function deleteTask(i) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();

// Product Logic with Professional Images
const products = [
  {
    name: "MacBook Air",
    category: "laptop",
    price: 2500,
    rating: 4.9,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=904&hei=840&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWNC9UNzNvY2N5NXJTTDQ2YkVYYmVXakJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk"
  },
  {
    name: "iPhone 16 Pro",
    category: "smartphone",
    price: 1200,
    rating: 4.7,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=MjUrdW9rK0I3Y0hBcFdUR2pNVTRtUFpIU2c1QXYxN1o5THJsVFdubi8vdU9STS9wYXZTN1hicnBjZ2p3Y1lQVndnZDdrU0tSek5hTHNwZzJKOWwvbnRrb3YwRE90eklmVkIwdHovcEFheWlka3BhTzl6cklqNm1lL21taEZoT3c"
  },
  {
    name: "Nike Sneakers",
    category: "sneakers",
    price: 150,
    rating: 4.3,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_qMK9rJA0HdwlWXPH3OkkAIvstbD8nUX52iAAR2Cp3_oS8aAdSQB7kiX9NL945yskTe0BEX0axv0-7Ee5o_qyWl7xEjCA2DxH5qZ_wRRb9L9BFwkc_9QRhQ"
  },
  {
    name: "Rolex Submariner",
    category: "watch",
    price: 5000,
    rating: 4.8,
    img: "https://www.cortinawatch.com/wp-content/uploads/2024/07/rolex-submariner-cover-m124060-0001-0002_2210jva_001-portrait.jpg"
  }
];


function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ${p.rating}</p>
      </div>
    `;
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById("sortBy").value;
  let sorted = [...products];
  if (sortBy === "price") sorted.sort((a, b) => a.price - b.price);
  else if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
  displayProducts(sorted);
}

displayProducts(products);

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();
  const response = document.getElementById("formResponse");

  if (name && email && feedback) {
    response.textContent = "Thank you for your feedback!";
    this.reset();
  } else {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
  }

  setTimeout(() => {
    response.textContent = "";
    response.style.color = "green";
  }, 3000);
});
