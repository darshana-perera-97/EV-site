// Blog data for dynamic rendering with pagination
const blogData = [
  {
    id: 1,
    title: "How Government Incentives Accelerate the Adoption of Electric Vehicles in 2025",
    description: "Discover how government incentives accelerate EV adoption in 2025: EV tax incentives, Tesla Model Y, Model 3, Hyundai Ioniq 5, charging stations, and affordable electric cars.",
    author: "Alex Chen",
    date: "September 7, 2025",
    readTime: "8 min",
    category: "Government Policy",
    image: "blogImages/blog-thum-1.png",
    alt: "Government Incentives Accelerating EV Adoption",
    link: "blogs/government-incentives-accelerate-ev-adoption-2025.html"
  },
  {
    id: 2,
    title: "Are Used Electric Cars Worth It? A Buyer's Guide to Affordable EVs in 2025",
    description: "Complete buyer's guide to used electric cars in 2025: Tesla Model 3, Model Y, Model S, Model X, Hyundai Ioniq 5. Battery health, pricing, and EV tax incentives for affordable EVs.",
    author: "Alex Chen",
    date: "September 7, 2025",
    readTime: "8 min",
    category: "Used EVs",
    image: "blogImages/blog-thum-2.png",
    alt: "Used Electric Cars Buyer Guide",
    link: "blogs/used-electric-cars-buyer-guide-2025.html"
  },
  {
    id: 3,
    title: "Pros and Cons of Home EV Chargers: What Tesla, Hyundai, and Electric Car Owners Need to Know in 2025",
    description: "Complete guide to home EV chargers: pros and cons for Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5 owners. Installation costs, convenience, and charging solutions in 2025.",
    author: "Alex Chen",
    date: "September 9, 2025",
    readTime: "7 min",
    category: "EV Charging",
    image: "blogImages/blog-thum-3.png",
    alt: "Pros and Cons of Home EV Chargers",
    link: "blogs/pros-cons-home-ev-chargers-2025.html"
  },
  {
    id: 4,
    title: "Top Myths About Electric Vehicles Debunked: What You Need to Know About Tesla, Hyundai, Charging, and More",
    description: "Debunk the top myths about electric vehicles: Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5, EV charging stations, battery life, and affordable electric cars in 2025.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "9 min",
    category: "EV Myths",
    image: "blogImages/blog-thum-4.png",
    alt: "Top Myths About Electric Vehicles Debunked",
    link: "blogs/top-myths-electric-vehicles-debunked-2025.html"
  },
  {
    id: 5,
    title: "Essential Tips for Planning Your First EV Road Trip: Maximize Your Tesla Model Y, Hyundai Ioniq 5 & More",
    description: "Essential tips for planning your first EV road trip: maximize your Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5 with EV charging stations, battery life, and route planning.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "7 min",
    category: "EV Road Trips",
    image: "blogImages/blog-thum-5.png",
    alt: "Essential Tips for Planning Your First EV Road Trip",
    link: "blogs/essential-tips-ev-road-trip-planning-2025.html"
  },
  {
    id: 6,
    title: "The Rise of Electric SUVs in 2025: Benefits, Top Models, and Charging Solutions",
    description: "Discover the rise of electric SUVs in 2025: benefits, top models like Tesla Model Y, Hyundai Ioniq 5, charging solutions, and why electric SUVs are the best choice for families.",
    author: "Alex Chen",
    date: "September 11, 2025",
    readTime: "8 min",
    category: "Electric SUVs",
    image: "blogImages/blog-thum-6.png",
    alt: "The Rise of Electric SUVs in 2025",
    link: "blogs/rise-electric-suvs-2025.html"
  },
  {
    id: 7,
    title: "The Future of Electric Vehicles in 2025: Top Models, Charging Innovations & Market Trends",
    description: "Discover the future of electric vehicles in 2025: top Tesla models, Hyundai Ioniq 5, EV charging innovations, market trends, and the best electric cars for every budget.",
    author: "Alex Chen",
    date: "September 13, 2025",
    readTime: "8 min",
    category: "Future EVs",
    image: "blogImages/blog-thum-7.png",
    alt: "The Future of Electric Vehicles in 2025",
    link: "blogs/future-electric-vehicles-2025.html"
  },
  {
    id: 8,
    title: "Best Electric Vehicles for Families in 2025: Top Affordable and Reliable EVs",
    description: "Discover the best electric vehicles for families in 2025: Tesla Model Y, Hyundai Ioniq 5, family-friendly EVs, charging solutions, and key factors to consider for your family.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "7 min",
    category: "Family EVs",
    image: "blogImages/best-electric-vehicles-families-2025.jpg",
    alt: "Best Electric Vehicles for Families in 2025",
    link: "blogs/best-electric-vehicles-families-2025.html"
  },
  {
    id: 9,
    title: "Comprehensive Guide to EV Charging Infrastructure: Powering Tesla, Hyundai & Best Electric Cars 2025",
    description: "Complete guide to EV charging infrastructure: Tesla Superchargers, Hyundai Ioniq 5 charging, EV home chargers, charging stations, and powering the best electric cars of 2025.",
    author: "Alex Chen",
    date: "September 13, 2025",
    readTime: "9 min",
    category: "EV Charging",
    image: "blogImages/blog-thum-8.png",
    alt: "Comprehensive Guide to EV Charging Infrastructure",
    link: "blogs/ev-charging-infrastructure-guide-2025.html"
  },
  {
    id: 10,
    title: "Choosing the Right Electric Vehicle for You: 2025 Guide to Tesla, Hyundai & More",
    description: "Complete guide to choosing the right electric vehicle in 2025: Tesla Model Y, Model 3, Model S, Model X, Hyundai Ioniq 5 comparison, EV charging stations, and best electric cars for every budget.",
    author: "Alex Chen",
    date: "September 14, 2025",
    readTime: "8 min",
    category: "EV Buying Guide",
    image: "blogImages/blog-thum-9.png",
    alt: "Choosing the Right Electric Vehicle for You",
    link: "blogs/choosing-right-electric-vehicle-2025.html"
  },
  {
    id: 11,
    title: "How Electric Vehicles Are Revolutionizing Urban Transportation in 2025: Tesla, Hyundai & Future of Charging",
    description: "Discover how electric vehicles are revolutionizing urban transportation in 2025: Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5, EV charging stations, and the future of city mobility.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "6 min",
    category: "Urban Mobility",
    image: "blogImages/blog-thum-2.png",
    alt: "How Electric Vehicles Are Revolutionizing Urban Transportation",
    link: "blogs/urban-transportation-revolution-2025.html"
  },
  {
    id: 12,
    title: "Tesla Model 3 vs Model Y: Which Electric Vehicle Is the Best Buy in 2025?",
    description: "Comprehensive comparison of Tesla Model 3 vs Model Y in 2025: performance, range, pricing, features, and which electric vehicle is the best buy for your needs.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "8 min",
    category: "Tesla Comparison",
    image: "blogImages/blog-thum-3.png",
    alt: "Tesla Model 3 vs Model Y Comparison",
    link: "blogs/tesla-model-3-vs-model-y-comparison-2025.html"
  },
  {
    id: 13,
    title: "The Environmental Impact of Electric Vehicles: Why Tesla Models & Affordable EVs Drive a Greener Future",
    description: "Discover the environmental impact of electric vehicles: how Tesla Model Y, Model 3, Model X, Model S, and Hyundai Ioniq 5 reduce emissions and drive a greener future in 2025.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "7 min",
    category: "Environmental Impact",
    image: "blogImages/blog-thum-4.png",
    alt: "Environmental Impact of Electric Vehicles",
    link: "blogs/environmental-impact-electric-vehicles-2025.html"
  },
  {
    id: 14,
    title: "Affordable Electric Cars Under $30,000: Top Electric Vehicles to Watch in 2025",
    description: "Discover the best affordable electric cars under $30,000 in 2025: Hyundai Ioniq 5, used Tesla models, budget EVs with great range and charging options.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "6 min",
    category: "Affordable EVs",
    image: "blogImages/blog-thum-5.png",
    alt: "Affordable Electric Cars Under $30,000",
    link: "blogs/affordable-electric-cars-under-30000-2025.html"
  },
  {
    id: 15,
    title: "Top Electric Cars to Watch in 2025: Tesla, Hyundai & EV Revolution Leaders",
    description: "Discover the top electric cars to watch in 2025: Tesla Model Y, Model 3, Model S, Model X, Hyundai Ioniq 5, and more leading the EV revolution with cutting-edge technology.",
    author: "Alex Chen",
    date: "September 12, 2025",
    readTime: "7 min",
    category: "Top EVs",
    image: "blogImages/blog-thum-6.png",
    alt: "Top Electric Cars to Watch in 2025",
    link: "blogs/top-electric-cars-2025.html"
  },
  {
    id: 16,
    title: "Tesla Model Y vs Model 3: Which Electric SUV is Right for You?",
    description: "Compare Tesla Model Y and Model 3 features, pricing, and performance to find the perfect electric vehicle for your lifestyle and budget.",
    author: "Alex Chen",
    date: "January 12, 2025",
    readTime: "4 min",
    category: "Tesla Models",
    image: "blogImages/blog-thum-1.png",
    alt: "Tesla Model Y vs Model 3 electric SUV comparison",
    link: "blogs/single-blog.html"
  },
  {
    id: 17,
    title: "EV Charging Stations: Complete Guide to Public and Home Charging",
    description: "Everything you need to know about EV charging stations, from public charging networks to home EV chargers and charging speeds.",
    author: "Alex Chen",
    date: "January 10, 2025",
    readTime: "6 min",
    category: "EV Charging",
    image: "blogImages/blog-thum-2.png",
    alt: "EV Charging Stations Guide",
    link: "blogs/single-blog.html"
  },
  {
    id: 18,
    title: "Tesla Model X vs Model S: Luxury Electric Cars Comparison 2025",
    description: "Detailed comparison of Tesla Model X and Model S features, performance, pricing, and which luxury electric car suits your needs best.",
    author: "Alex Chen",
    date: "January 8, 2025",
    readTime: "5 min",
    category: "Tesla Models",
    image: "blogImages/blog-thum-3.png",
    alt: "Tesla Model X electric SUV charging at station",
    link: "blogs/single-blog.html"
  },
  {
    id: 19,
    title: "Hyundai Ioniq 5 Review: Best Affordable Electric Car 2025",
    description: "Comprehensive review of Hyundai Ioniq 5, including range, charging speed, features, and why it's considered one of the best affordable electric cars.",
    author: "Alex Chen",
    date: "January 5, 2025",
    readTime: "4 min",
    category: "Electric Cars",
    image: "blogImages/blog-thum-4.png",
    alt: "Hyundai Ioniq 5 electric car charging",
    link: "blogs/single-blog.html"
  },
  {
    id: 20,
    title: "EV Home Charger Installation: Complete Guide & Cost Breakdown",
    description: "Everything you need to know about installing an EV home charger, including costs, requirements, permits, and choosing the right charger for your electric car.",
    author: "Alex Chen",
    date: "January 3, 2025",
    readTime: "7 min",
    category: "EV Charging",
    image: "blogImages/blog-thum-5.png",
    alt: "EV home charger installation guide",
    link: "blogs/single-blog.html"
  },
  {
    id: 21,
    title: "Electric Car Battery Life: How Long Do EV Batteries Last?",
    description: "Learn about electric car battery life, degradation factors, maintenance tips, and how to maximize your EV battery lifespan for optimal performance.",
    author: "Alex Chen",
    date: "January 1, 2025",
    readTime: "6 min",
    category: "EV Technology",
    image: "blogImages/blog-thum-6.png",
    alt: "Electric car battery life and maintenance",
    link: "blogs/single-blog.html"
  },
  {
    id: 22,
    title: "EV Tax Incentives 2025: Complete Guide to Electric Car Rebates",
    description: "Complete guide to EV tax incentives, federal rebates, state programs, and how to save thousands on your electric car purchase in 2025.",
    author: "Alex Chen",
    date: "December 28, 2024",
    readTime: "8 min",
    category: "EV Incentives",
    image: "blogImages/blog-thum-7.png",
    alt: "EV tax incentives and rebates 2025",
    link: "blogs/single-blog.html"
  },
  {
    id: 23,
    title: "Powering Tomorrow: The Future of Battery Technology Transforming Electric Vehicles in 2025",
    description: "Discover the future of battery technology in electric vehicles 2025: Tesla Model Y, Model 3, Hyundai Ioniq 5, solid-state batteries, EV charging stations, battery life improvements, and EV tax incentives.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "8 min",
    category: "Battery Technology",
    image: "blogImages/blog-thum-8.png",
    alt: "Battery Technology Electric Vehicles 2025",
    link: "blogs/battery-technology-electric-vehicles-2025.html"
  },
  {
    id: 24,
    title: "Best EV Apps for Drivers in 2025: Boost Your Tesla, Hyundai Ioniq 5 & Electric Car Experience",
    description: "Discover the best EV apps for drivers in 2025: Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5, EV charging stations, battery management, and EV tax incentives 2025.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "7 min",
    category: "EV Apps",
    image: "blogImages/blog-thum-9.png",
    alt: "Best EV Apps for Drivers 2025",
    link: "blogs/best-ev-apps-drivers-2025.html"
  },
  {
    id: 25,
    title: "Why Switching to Electric Bikes is a Game-Changer for the Environment and the Future of Electric Vehicles",
    description: "Discover how electric bikes complement Tesla Model Y, Model 3, Hyundai Ioniq 5, and other electric vehicles. Learn about e-bike environmental benefits, EV charging stations, and sustainable transportation in 2025.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "6 min",
    category: "Electric Bikes",
    image: "blogImages/blog-thum-10.png",
    alt: "Electric Bikes Environmental Impact 2025",
    link: "blogs/electric-bikes-environmental-impact-2025.html"
  },
  {
    id: 26,
    title: "Electric Cars in Extreme Weather: How Tesla, Hyundai & EVs Perform in 2025",
    description: "Discover how electric cars perform in extreme weather conditions: Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5, cold weather range, and EV charging stations in harsh climates.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "7 min",
    category: "EV Performance",
    image: "blogImages/electric-cars-extreme-weather-2025.jpg",
    alt: "Electric Cars in Extreme Weather 2025",
    link: "blogs/electric-cars-extreme-weather-2025.html"
  },
  {
    id: 27,
    title: "How Electric Vehicles Save Money Long-Term: Complete Cost Analysis for Tesla, Hyundai & More",
    description: "Complete cost analysis of electric vehicles: how Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5 save money long-term with EV tax incentives, charging costs, and maintenance savings.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "8 min",
    category: "EV Economics",
    image: "blogImages/blog-thum-11.png",
    alt: "How Electric Vehicles Save Money Long-Term",
    link: "blogs/how-electric-vehicles-save-money-long-term-2025.html"
  },
  {
    id: 28,
    title: "Hybrid vs Full Electric Vehicles: Which is Right for You in 2025?",
    description: "Comprehensive comparison of hybrid vs full electric vehicles: Tesla Model Y, Model 3, Hyundai Ioniq 5, EV charging stations, battery life, and which option suits your lifestyle best.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "7 min",
    category: "EV Comparison",
    image: "blogImages/blog-thum-1.png",
    alt: "Hybrid vs Full Electric Vehicles 2025",
    link: "blogs/hybrid-vs-full-electric-vehicles-2025.html"
  },
  {
    id: 29,
    title: "Exploring Vehicle-to-Grid Technology: How Your EV Can Power Your Home in 2025",
    description: "Discover vehicle-to-grid technology: how Tesla Model Y, Model 3, Model X, Model S, Hyundai Ioniq 5 can power your home, EV charging stations, and the future of energy storage.",
    author: "Alex Chen",
    date: "September 10, 2025",
    readTime: "8 min",
    category: "V2G Technology",
    image: "blogImages/blog-thum-2.png",
    alt: "Vehicle-to-Grid Technology 2025",
    link: "blogs/exploring-vehicle-to-grid-technology-2025.html"
  }
];

// Pagination configuration
const BLOGS_PER_PAGE = 6;
let currentPage = 1;
let totalPages = Math.ceil(blogData.length / BLOGS_PER_PAGE);

// Function to render blog posts
function renderBlogs(page = 1) {
  const startIndex = (page - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const blogsToShow = blogData.slice(startIndex, endIndex);
  
  const blogContainer = document.getElementById('blog-container');
  if (!blogContainer) return;
  
  blogContainer.innerHTML = '';
  
  blogsToShow.forEach(blog => {
    const blogHTML = `
      <article class="blog-post">
        <div class="blog-post-thumb">
          <img src="${blog.image}" alt="${blog.alt}" loading="lazy" />
        </div>
        <div class="blog-post-content">
          <div class="blog-post-tag">
            <a href="category.html">${blog.category}</a>
          </div>
          <div class="blog-post-title">
            <a href="${blog.link}">${blog.title}</a>
          </div>
          <div class="blog-post-meta">
            <ul>
              <li>By <a href="about.html">${blog.author}</a></li>
              <li>
                <i class="fa fa-clock-o"></i>
                ${blog.date} - ${blog.readTime}
              </li>
            </ul>
          </div>
          <p>${blog.description}</p>
          <a href="${blog.link}" class="blog-post-action">read more <i class="fa fa-angle-right"></i></a>
        </div>
      </article>
    `;
    blogContainer.insertAdjacentHTML('beforeend', blogHTML);
  });
}

// Function to render pagination
function renderPagination() {
  const paginationContainer = document.getElementById('pagination-container');
  if (!paginationContainer) return;
  
  let paginationHTML = '<nav aria-label="Page navigation example" class="nav-bg"><ul class="pagination">';
  
  // Previous button
  if (currentPage > 1) {
    paginationHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage - 1})"><i class="fa fa-angle-left"></i></a></li>`;
  }
  
  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? 'active' : '';
    paginationHTML += `<li class="page-item"><a class="page-link ${activeClass}" href="#" onclick="changePage(${i})">${i}</a></li>`;
  }
  
  // Next button
  if (currentPage < totalPages) {
    paginationHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage + 1})"><i class="fa fa-angle-right"></i></a></li>`;
  }
  
  paginationHTML += '</ul></nav>';
  paginationContainer.innerHTML = paginationHTML;
}

// Function to change page
function changePage(page) {
  if (page < 1 || page > totalPages) return;
  
  currentPage = page;
  renderBlogs(currentPage);
  renderPagination();
  
  // Scroll to top of blog section
  const blogSection = document.querySelector('.blog');
  if (blogSection) {
    blogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderBlogs(currentPage);
  renderPagination();
});
