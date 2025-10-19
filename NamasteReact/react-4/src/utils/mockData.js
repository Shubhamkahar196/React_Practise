
const resObj = {
   
  "data": [
    {
      "id": "RES-001A",
      "name": "Spice Fusion Hub",
      "city": "Bengaluru",
      "locality": "Koramangala",
      "cuisine_tags": ["Indian", "Chinese", "Desserts"],
      "avg_rating": 4.2,
      "total_ratings": 5678,
      "cost_for_two": 550,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 35,
        "delivery_time_max": 45,
        "delivery_fee": 30,
        "is_open": true,
        "sla_string": "40 MINS"
      },
      "offers": [
        {"type": "PERCENTAGE", "value": 20, "description": "20% OFF up to ₹100"},
        {"type": "FLAT_DISCOUNT", "value": 50, "description": "Flat ₹50 off on orders above ₹299"}
      ],
      "menu_preview": [
        {"item_name": "Chicken Tikka Masala", "price": 320},
        {"item_name": "Veg Fried Rice", "price": 180},
        {"item_name": "Gulab Jamun (2 pcs)", "price": 90}
      ]
    },
    {
      "id": "RES-002B",
      "name": "The Vegan Bowl",
      "city": "Mumbai",
      "locality": "Bandra West",
      "cuisine_tags": ["Salads", "Healthy Food", "Smoothies"],
      "avg_rating": 4.6,
      "total_ratings": 1245,
      "cost_for_two": 700,
      "is_newly_listed": true,
      "is_veg_only": true,
      "service_data": {
        "delivery_time_min": 20,
        "delivery_time_max": 30,
        "delivery_fee": 0,
        "is_open": true,
        "sla_string": "25 MINS (Free Delivery)"
      },
      "offers": [
        {"type": "FREE_ITEM", "value": 1, "description": "Free Drink on all orders"}
      ],
      "menu_preview": [
        {"item_name": "Quinoa Salad", "price": 350},
        {"item_name": "Avocado Toast", "price": 280},
        {"item_name": "Berry Smoothie", "price": 199}
      ]
    },
    {
      "id": "RES-003C",
      "name": "Pizza Palace",
      "city": "Delhi",
      "locality": "Connaught Place",
      "cuisine_tags": ["Italian", "Pizza", "Pasta"],
      "avg_rating": 4.1,
      "total_ratings": 3456,
      "cost_for_two": 600,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 25,
        "delivery_time_max": 35,
        "delivery_fee": 20,
        "is_open": true,
        "sla_string": "30 MINS"
      },
      "offers": [
        {"type": "PERCENTAGE", "value": 15, "description": "15% OFF up to ₹75"}
      ],
      "menu_preview": [
        {"item_name": "Margherita Pizza", "price": 250},
        {"item_name": "Pasta Alfredo", "price": 300},
        {"item_name": "Garlic Bread", "price": 150}
      ]
    },
    {
      "id": "RES-004D",
      "name": "Sushi Spot",
      "city": "Kolkata",
      "locality": "Salt Lake",
      "cuisine_tags": ["Japanese", "Sushi", "Asian"],
      "avg_rating": 4.4,
      "total_ratings": 2100,
      "cost_for_two": 800,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 30,
        "delivery_time_max": 40,
        "delivery_fee": 40,
        "is_open": true,
        "sla_string": "35 MINS"
      },
      "offers": [
        {"type": "FLAT_DISCOUNT", "value": 100, "description": "Flat ₹100 off on orders above ₹500"}
      ],
      "menu_preview": [
        {"item_name": "California Roll", "price": 400},
        {"item_name": "Tempura Udon", "price": 350},
        {"item_name": "Miso Soup", "price": 120}
      ]
    },
    {
      "id": "RES-005E",
      "name": "Burger Barn",
      "city": "Chennai",
      "locality": "T. Nagar",
      "cuisine_tags": ["American", "Burgers", "Fast Food"],
      "avg_rating": 4.0,
      "total_ratings": 6789,
      "cost_for_two": 450,
      "is_newly_listed": true,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 15,
        "delivery_time_max": 25,
        "delivery_fee": 25,
        "is_open": true,
        "sla_string": "20 MINS"
      },
      "offers": [
        {"type": "FREE_ITEM", "value": 1, "description": "Free Fries with Burger"}
      ],
      "menu_preview": [
        {"item_name": "Cheeseburger", "price": 220},
        {"item_name": "Chicken Nuggets", "price": 180},
        {"item_name": "Milkshake", "price": 150}
      ]
    },
    {
      "id": "RES-006F",
      "name": "Dosa Delight",
      "city": "Hyderabad",
      "locality": "Banjara Hills",
      "cuisine_tags": ["South Indian", "Dosa", "Idli"],
      "avg_rating": 4.3,
      "total_ratings": 4321,
      "cost_for_two": 300,
      "is_newly_listed": false,
      "is_veg_only": true,
      "service_data": {
        "delivery_time_min": 20,
        "delivery_time_max": 30,
        "delivery_fee": 15,
        "is_open": true,
        "sla_string": "25 MINS"
      },
      "offers": [
        {"type": "PERCENTAGE", "value": 10, "description": "10% OFF up to ₹50"}
      ],
      "menu_preview": [
        {"item_name": "Masala Dosa", "price": 120},
        {"item_name": "Idli Sambar", "price": 80},
        {"item_name": "Vada", "price": 60}
      ]
    },
    {
      "id": "RES-007G",
      "name": "Taco Town",
      "city": "Pune",
      "locality": "Koregaon Park",
      "cuisine_tags": ["Mexican", "Tacos", "Burritos"],
      "avg_rating": 4.5,
      "total_ratings": 1876,
      "cost_for_two": 650,
      "is_newly_listed": true,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 25,
        "delivery_time_max": 35,
        "delivery_fee": 30,
        "is_open": true,
        "sla_string": "30 MINS"
      },
      "offers": [
        {"type": "FLAT_DISCOUNT", "value": 75, "description": "Flat ₹75 off on orders above ₹400"}
      ],
      "menu_preview": [
        {"item_name": "Chicken Taco", "price": 180},
        {"item_name": "Veggie Burrito", "price": 220},
        {"item_name": "Guacamole", "price": 100}
      ]
    },
    {
      "id": "RES-008H",
      "name": "Noodle Nook",
      "city": "Ahmedabad",
      "locality": "Navrangpura",
      "cuisine_tags": ["Chinese", "Noodles", "Dumplings"],
      "avg_rating": 4.2,
      "total_ratings": 2987,
      "cost_for_two": 500,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 20,
        "delivery_time_max": 30,
        "delivery_fee": 20,
        "is_open": true,
        "sla_string": "25 MINS"
      },
      "offers": [
        {"type": "PERCENTAGE", "value": 20, "description": "20% OFF up to ₹80"}
      ],
      "menu_preview": [
        {"item_name": "Hakka Noodles", "price": 160},
        {"item_name": "Dumplings", "price": 200},
        {"item_name": "Manchurian", "price": 140}
      ]
    },
    {
      "id": "RES-009I",
      "name": "Biryani Bliss",
      "city": "Jaipur",
      "locality": "Malviya Nagar",
      "cuisine_tags": ["Indian", "Biryani", "Kebabs"],
      "avg_rating": 4.7,
      "total_ratings": 5123,
      "cost_for_two": 400,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 30,
        "delivery_time_max": 40,
        "delivery_fee": 25,
        "is_open": true,
        "sla_string": "35 MINS"
      },
      "offers": [
        {"type": "FREE_ITEM", "value": 1, "description": "Free Raita with Biryani"}
      ],
      "menu_preview": [
        {"item_name": "Chicken Biryani", "price": 250},
        {"item_name": "Paneer Tikka", "price": 180},
        {"item_name": "Gulab Jamun", "price": 80}
      ]
    },
    {
      "id": "RES-010J",
      "name": "Pasta Paradise",
      "city": "Surat",
      "locality": "Adajan",
      "cuisine_tags": ["Italian", "Pasta", "Pizza"],
      "avg_rating": 4.3,
      "total_ratings": 1654,
      "cost_for_two": 550,
      "is_newly_listed": true,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 25,
        "delivery_time_max": 35,
        "delivery_fee": 20,
        "is_open": true,
        "sla_string": "30 MINS"
      },
      "offers": [
        {"type": "FLAT_DISCOUNT", "value": 50, "description": "Flat ₹50 off on orders above ₹300"}
      ],
      "menu_preview": [
        {"item_name": "Spaghetti Carbonara", "price": 280},
        {"item_name": "Margherita Pizza", "price": 240},
        {"item_name": "Tiramisu", "price": 150}
      ]
    },
    {
      "id": "RES-011K",
      "name": "Salad Station",
      "city": "Indore",
      "locality": "Vijay Nagar",
      "cuisine_tags": ["Healthy", "Salads", "Smoothies"],
      "avg_rating": 4.4,
      "total_ratings": 987,
      "cost_for_two": 350,
      "is_newly_listed": false,
      "is_veg_only": true,
      "service_data": {
        "delivery_time_min": 15,
        "delivery_time_max": 25,
        "delivery_fee": 0,
        "is_open": true,
        "sla_string": "20 MINS (Free Delivery)"
      },
      "offers": [
        {"type": "FREE_ITEM", "value": 1, "description": "Free Smoothie with Salad"}
      ],
      "menu_preview": [
        {"item_name": "Caesar Salad", "price": 200},
        {"item_name": "Fruit Smoothie", "price": 120},
        {"item_name": "Quinoa Bowl", "price": 250}
      ]
    },
    {
      "id": "RES-012L",
      "name": "Curry Corner",
      "city": "Lucknow",
      "locality": "Hazratganj",
      "cuisine_tags": ["Indian", "Curry", "Rice"],
      "avg_rating": 4.5,
      "total_ratings": 3765,
      "cost_for_two": 450,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 20,
        "delivery_time_max": 30,
        "delivery_fee": 15,
        "is_open": true,
        "sla_string": "25 MINS"
      },
      "offers": [
        {"type": "PERCENTAGE", "value": 15, "description": "15% OFF up to ₹60"}
      ],
      "menu_preview": [
        {"item_name": "Butter Chicken", "price": 280},
        {"item_name": "Jeera Rice", "price": 100},
        {"item_name": "Naan", "price": 40}
      ]
    }
  ]
}

export default resObj