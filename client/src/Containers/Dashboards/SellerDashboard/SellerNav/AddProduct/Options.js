export const Categories = [
  "Electronic Devices",
  "Electronic Accessories",
  "Home Appliances",
  "Health & Beauty",
  "Babies & Toys",
  "Groceries & Pets",
  "Home & Lifestyle",
  "Women's Fashion",
  "Men's Fashion",
  "Watches & Accessories",
  "Sports & Outdoor",
  "Automotive & Motorbike",
];

export const ChooseType = (category) => {
	let options2 = [];

switch(category) {
	case "Electronic Devices": options2 = ["Smart Phones", "Feature Phones", 'Tablets', 'Laptops', 'Desktops', "Gaming Consoles", 'Cameras', "Security Cameras" ];
	  return options2;
	case "Electronic Accessories": options2 = ["Mobile Accessories", 'Audio', 'Wearable', "Console Accessories", "Camera Accessories", "Computer Accessories", "Network Components" ];
	  return options2;
	case "Home Appliances": options2 = ['Televisions', "Home Audio", "TV Accessories & Video Device", "Large Appliances", "Small Kitchen Appliances", "Cooling & Heating", 'Fan', "Vacuums & Floor Care", "Irons & Garment Steamers", "Water Purifiers & Filters" ];
	  return options2;
	case "Health & Beauty": options2 = ["Bath & Body", "Beauty Tools", 'Fragrances', "Hair Care", 'Makeup', "Men's Care", "Personal Care", "Skin Care", "Food Suppliments", "Medical Supplies", "Sexual Wellness" ];
	  return options2;
	case "Babies & Toys": options2 = [ "Mother & Baby", 'Feeding', "Diapering & Potty", "Baby Gear", "Baby Personal Care", "Clothing & Accessories", 'Nursery', "Toys & Games", "Baby & Toddler Toys", "Remote Control & Vehicles", "Sports & Outdoor Play", "Traditional Games" ];
	  return options2;
	case "Groceries & Pets": options2 = ['Beverages', "Breakfast, Choco & Snacks", "Food Staples", "Cooking Ingredients", "Laundry & Household", 'Cat', 'Dog', 'Fish', 'Bird', "Small Pets", "Lifestyle Accessories" ];
	  return options2;
	case "Home & Lifestyle": options2 = ['Bath', 'Bedding', 'Decor', 'Furniture', "Kitchen & Dining", 'Lighting', "Laundry & Cleaning", "Tools, DIy & Outdoor", "Stationery & Craft", "Media, Music & Books" ];
	  return options2;
	case "Women's Fashion": options2 = ["Sweater & Cardigans", "Women's Jackets & Coats", 'Sarees', "Shalwar Kameez", "Unstitched Fabric", 'Kurtis', "Girl's Fashion", "Women's Bags", "Women's Shoes", "Women's Accessories", "Lingerie, Sleep & Lounge", "Travel & Luggage" ];
	  return options2;
	case "Men's Fashion": options2 = ["Men's Jackets & Coats", "Hoodies & Sweatshirts", 'Sweaters', "T-Shirts", 'Shirts', "Polo Shirts", 'Jeans', 'Pant', "Mens Bags", "Men's Shoes", "Men's Accessories", 'Clothing' ];
	  return options2;
	case "Watches & Accessories": options2 = ["Men's Watch", "Men's Jewelleries", "Women's Watch", "Women's Jewelleries", "Fashion Mask", "Men's Belt", "Men's Wallet", 'Sunglasses', 'Eyeglasses', "Kid's Watch" ];
	  return options2;
	case "Sports & Outdoor": options2 = ['Treadmills', "Fitness Accessories", "Dumb-bells", 'Cycling', "Boxing, Martial Arts & MMA", "Men Shoes & Clothing", "Outdoor Recreation", "Exercise & Fitness", "Racket Sports", "Team Sports", "Camping & Hiking", 'Fanshop' ];
	  return options2;
	case "Automotive & Motorbike": options2 = ['Automobile', "Auto Oils &Fluids", "Interior Accessories", "Exterior Accessories", "Exterior Vehicle Care", "Interior Vehicle Care", "Car Electronic Accessories", "Car Audio", 'Motorcycle', "Moto Parts & Accessories", "Motorcycle Riding Gear" ];
	  return options2;
	default: return options2;
  }

}



export const ChooseItem = (type) => {
	let options3 = [];

switch(type) {
	case  "Smart Phones": options3 = ["Realme", "Samsung", "Xiaomi", "OPPO", "Vivo", "Infinix", "Motorola", "Tecno", "Walton"];
	 return options3;
	case  "Feature Phones": options3 = ["Walton", "Nokia", "Samsung", "iMAX", "5 Star", "Tinmo"];
	 return options3;
	case  "Tablets": options3 = [];
	 return options3;
	case  "Laptops": options3 = ["Laptops & Notebooks", "Gaming", "HP", "Asus", "Dell", "Lenovo", "Walton", "Acer", "MSI"];
	 return options3;
	case  "Desktops": options3 = ["All-in-ONE", "Gaming"];
	 return options3;
	case  "Gaming Consoles": options3 = ["PlayStations Consoles", "PlayStation Games", "PlayStations Controllers", "Nintendo Games", "Xbox Games", "Other Gaming Consoles"];
	 return options3;
	case  "Cameras": options3 = ["DSLR", "Mirrorless", "Point & Shoot", "Bridge", "Car Cameras", "Action/Video Cameras"];
	 return options3;
	case  "Security Cameras": options3 = ["IP Security Cameras", "IP Security Systems", "CCTV Security Cameras", "CCTV Security Systems"];
	 return options3;
	case  "Mobile Accessories": options3 = ["Phone Case s", "Power Banks", "Cables & Converters", "Wall Chargers", "Wireless Chargers"];
   	 return options3;	
	case  "Audio": options3 = ["Headphones & Headsets", "Home Entertainment", "Bluetooth Speaker", "Live Sound and Stage Equipments"];
   	 return options3;	
	case  "Wearable": options3 = ["Smart Watches", "Virtual Reality"];
   	 return options3;	
	case  "Console Accessories": options3 = ["PlayStation Controllers", "Other Gaming Accessories"];
   	 return options3;	
	case "Camera Accessories": options3 = ["Memory Cards", "DSLR Lens", "Mirrorless Lens", "Special Camera Lens", "TriPods & MonoPods", "Case s & Covers", "Lighting & Studio Equipments", "Dry Box", "Batteries"];
   	 return options3;	
	case "Computer Accessories": options3 = ["Monitors", "Mice", "PC Audio", "Keyboards", "Mice & Keyboards Combo", "Power Cords & Adaptors"];
   	 return options3;	
	case "Storage": options3 = ["External Hard Drives", "Internal Hadr Drives", "Flash Drives", "OTG drives"];
   	 return options3;	
	case "Printer": options3 = ["Printers", "Ink & Toners", "Printer Stands", "Fax MAchines"];
   	 return options3;	
	case "Computer Components": options3 = ["Graphics Cards", "Desktop Casings", "Motherboards", "Fans & Heatsinks", "RAM", "Processors"];
   	 return options3;	
	case "Network Components": options3 = ["Access Points", "Modems", "Network interface Cards", "Network Switches", "Routers", "Wireless USB Adapters"];
   	 return options3;	
	case "Software": options3 = ["Educational Media", "Operating Systems", "PC Games", "Security Softwares"];
   	 return options3;	
	case 'Televisions': options3 = ["Smart", "LED", "OLED", "Walton", "Samsung", "Vision", "Sony", "Singer", "Others"];
	 return options3;	
	case "Home Audio": options3 =  ["SoundBars", "Home Entertainment", "Portable Players", "Live Sound and Stage Equipments"];
	return options3;
	case "TV Accessories & Video Device": options3 =  ["TV Receivers", "Projectors", "TV Remote Controllers", "Cables", "Wall Mounts & Projectors", "DVD Players"];
	 return options3;
	case "Large Appliances": options3 =  ["Refrigerators", "Freezers", "Washing Machine", "Microwave Oven", "Electric Oven", "Hoods", "Cooktop & Range"];
	 return options3;
	case "Small Kitchen Appliances": options3 =  ["Rice Cooker", "Blender, Mixer & Grinder", "Electric Kettle", "Juicer & Fruit Extraction", "Fryer", "Coffe Machine", "Pressure Cooker", "Sandwich Makers", "Toasters", "Specialty Cookware"];
	 return options3;
	case "Cooling & Heating": options3 =  ["Air Conditioner", "Air Cooler", "Air Purifiers", "Dehumidifiers", "Water Heater"];
	 return options3;
	case 'Fan': options3 = ["Ceiling", "Table", "Stand", "Mini", "Exhaust"];
	 return options3;
	case "Vacuums & Floor Care": options3 =  ["Vacuum Cleaner", "Steam Mops", "Vacuum Cleaner Parts"];
	 return options3;
	case "Irons & Garment Steamers": options3 =  ["Iron", "Sewing Machine"];
	 return options3;
	case "Water Purifiers & Filters": options3 =  ["Pureit", "Kent", "Panasonic", "Eva Pure"];
	 return options3;
	case "Bath & Body": options3 =  ["Body & Massage Oils", "Body Moisturizers", "Body Scrubs", "Body Soaps & Shower Gels", "Foot Care", "Hair Removal", "Hand Care", "Sun Care", "Bath Accessories"];
	 return options3;
	case "Beauty Tools": options3 =  ["Curling Irons & Wands", "Flat Irons", "Multi-stylers", "Hair Dryer", "Face Skin Care Tools", "Foot Relief Tools", "Hair Removal Accessories", "Slimming & Electric Massaging"];
	 return options3;
	case 'Fragrances': options3 =  ["Women", "Men", "Unisex"];
	 return options3;
	case "Hair Care": options3 =  ["Shampoo", "Hair Treatments", "Hair Care Accessories", "Hair Brushes & Combs", "Hair Coloring", "Hair Conditioner", "Wig & Hair Extensions & Pads"];
	 return options3;
	case 'Makeup': options3 =  ["Face", "Lips", "Eyes", "Nails", "Palettes & Sets", "Brushes & Sets", "Makeup Accessories", "Makeup Removers"];
	 return options3;
	case "Men's Care": options3 =  ["Deodorants", "Hair Care", "Shaving & Grooming", "Skin Care"];
	 return options3;
	case "Personal Care": options3 =  ["Deodorants", "Feminine Care", "Oral Care", "Parsonal Safety & Security"];
	 return options3;
	case "Skin Care": options3 =  ["Moisturizers & Creams", "Serum & Essence", "Face Mask & Packs", "Face Scrubs & Exfoliators", "Facial Cleansers", "Lip Balm & Treatments", "Toner & Mists"];
	 return options3;
	case "Food Suppliments": options3 =  ["Beauty Suppliments", "Multivitamins", "Sports Nutrition", "Well Being", "Sexual Health Vitamins"];
	return options3;
	case "Medical Supplies": options3 =  ["First Aid Supplies", "Health Accessories", "Health Monitors & Tests", "Nebulizers & Aspirators", "Ointments & Creams", "Scales & Body Fat Analyzers", "Wheelchair"];
	 return options3;
	case "Sexual Wellness": options3 =  [];
	 return options3;
	case "Mother & Baby": options3 =  [];
	 return options3;
	case 'Feeding': options3 =  ["baby & Toddler Foods", "Milk Formula"];
	 return options3;
	case "Diapering & Potty": options3 =  ["Cloth Diapers & Accessories", "Diaper Bags", "Wipes & Holders", "Disposable Diapers"];
	 return options3;
	case "Baby Gear": options3 =  ["Baby Walkers", "Backpacks & Carriers", "Strollers", "Swings, Jumpers & Bouncers"];
	 return options3;
	case "Baby Personal Care": options3 =  ["Baby Bath", "Bathing Tubs & Seats", "Shampoo & Conditioners", "Soaps, Cleansers, & Bodywash"];
	 return options3;
	case "Clothing & Accessories": options3 =  ["Girls Clothing", "Girls Shoes", "Boys Clothing", "Maternity Waer", "New Born Unisex(0-6months)", "New Born Body Suits", "New Born Sets & Packs"];
	 return options3;
	case 'Nursery': options3 =  ["Bathroom Safety", "Mattresses & Bedding", "Sanitizers"];
	 return options3;
	case "Toys & Games": options3 =  ["Action Figures & Collectibles", "Arts & Crafts for Kids", "Ball Prit & Accessories", "Block & Building Toys", "Doll & Accessories", "Dress Up & Pretend Play", "Electronic Toys", "Learing & Education", "Party Supplies", "Puzzles", "Slime & Squishy Toys", "Stuffed Toys"];
	 return options3;
	case "Baby & Toddler Toys": options3 =  ["Activity Gym & Playmates", "Ball", "Bath Toys", "Crib Toys & Attachments", "Early Learing", "Indoor Climbers & Structures", "Push & Pull Toys", "Rocking & Spring Ride-Ons"];
	 return options3;
	case "Remote Control & Vehicles": options3 = ["Die-Cast Vehicles", "RC Vehicles & Batteries", "Play Trains & Railway Sets", "Play Vehicles", "Drones & Accessories"];
	 return options3;
	case "Sports & Outdoor Play": options3 =  ["Fidget Spinners & Cubes", "Kids Bikes & Accessories", "Swimming Pool & Water Toys", "Outdoor Toys", "Play Tents & Tunnels", "Boxing", "Play Sets & Playground Equipments", "Sports Play", "Kids Tricycles", "Toys Sports"];
	 return options3;
	case "Traditional Games": options3 =  ["Board Games", "Card Games", "Game Room Games"];
	 return options3;
	case 'Beverages': options3 =  ["Coffee", "Hot Chocolate Drinks", "Powdered Drink Mixes"];
	 return options3;
	case "Breakfast, Choco & Snacks": options3 =  ["Biscuit", "Breakfast Cereals", "Chocolate", "Oatmeals"];
	 return options3;
	case "Food Staples": options3 =  ["Canned Food", "Condiment Dressing", "Grains, Beans & Pulses"];
	 return options3;
	case "Cooking Ingredients": options3 =  ["Oil", "Herbs & Spices", "Sauce"];
	 return options3;
	case "Laundry & Household": options3 =  ["AirCare", "Cleaning", "Dishwashing", "Laundry", "Pest Control"];
	 return options3;
	case 'Cat': options3 = ["Cat Food", "Grooming", "Toys & Accessories", "Litter & Toilet"];
	 return options3;
	case 'Dog': options3 = ["Dog Food", "Dog Treats", "Grooming", "Toys & Accessories", "Carriers & Travel", "Leashes, Collars & Muzzles"];
	 return options3;
	case 'Fish': options3 = ["Aquariums & Accessories", "Fish Food", "Starter Kits"];
	 return options3;
	case 'Bird': options3 = ["Bird Food"];
	 return options3;
	case "Small Pets": options3 = ["Food & Accessories"];
	 return options3;
	case "Lifestyle Accessories": options3 = ["Lighters"];
	 return options3;
	case 'Bath': options3 = ["Bathroom Scales", "Shower Caddies & Hangers", "Shower Curtains", "Towel Rails & Warmers"];
	 return options3;
	case 'Bedding': options3 = ["Blankets & Throws", "Comforters, Quilts & Duvets", "Mattress Pads", "Mattress Protectors", "Pillows & Bolsters"];
	 return options3;
	case 'Decor': options3 = ["Artificial Flowers & Plants", "Candles & Candleholders", "Clocks", "Curtains", "Cushions & Covers", "Picture Frames", "Rugs & Carpets", "Vases & Vessels"];
	 return options3;
	case 'Furniture': options3 = ["Bedroom", "Living Room", "home Office"];
	 return options3;
	case "Kitchen & Dining": options3 = ["Storage & Organization", "Coffee & Tea", "Cookware", "Dinnerware", "Kitchen & Table Linen", "Kitchen Storage & Accessories", "Kitchen Utensils", "Serveware"];
	 return options3;
	case 'Lighting': options3 = ["Ceiling Lights", "Floor Lamps", "Lamp Shades", "Light Bulbs", "Lighting Fixtures & Component", "Outdoor Lighting", "Rechargeables & Flashlights", "Specialty Lighting", "Table Lamps", "Wall Lights & Sconces"];
	 return options3;
	case "Laundry & Cleaning": options3 = ["Brushes, Sponges & Wipers", "Brooms, Mops & Sweepers", "Laundry Baskets & Hampers", "Clothes Line & Drying Racks", "Ironing Boards"];
	 return options3;
	case "Tools, DIy & Outdoor": options3 = ["Outdoor", "Fixtures & Plumbing", "Electrical", "Hand Tools", "Power Tools", "Security"];
	 return options3;
	case "Stationery & Craft": options3 = ["Gifts & Wrapping", "Packaging & Cartoons", "Paper Products", "School & Office Equipment", "Writing & Correction", "Art Supplies", "Carft Supplies", "Sewing", "Religious Items"];
	 return options3;
	case "Media, Music & Books": options3 = ["eBooks", "Books", "Litareture Books", "Educational Books", "Religious Books", "Self Help & Meditation Books", "Musical Instruments", "Guitar", "Guitar & Bass Accessories", "Keyboards & Piano", "Ukulele", "Drums & Percussion"];
	 return options3;
	case "Sweater & Cardigans": options3 = [];
	 return options3;
	case "Women's Jackets & Coats": options3 = [];
	 return options3;
	case 'Sarees': options3 = [];
	 return options3;
	case "Shalwar Kameez": options3 = [];
	 return options3;
	case "Unstitched Fabric": options3 = [];
	 return options3;
	case 'Kurtis': options3 = [];
	 return options3;
	case "Girl's Fashion": options3 = [];
	 return options3;
	case "Women's Bags": options3 = ["Cross Body & Shoulder Bags", "Coin Purses & Pouches", "Top Handle Bags"];
	 return options3;
	case "Women's Shoes": options3 = ["Flat Sandals", "Heels", "Flat Shoes", "Wedges", "Flip Flop"];
	 return options3;
	case "Women's Accessories": options3 = ["Jewelleries", "Belts", "Hair Accessories", "Scarves", "Umbrellas"];
	 return options3;
	case "Lingerie, Sleep & Lounge": options3 = ["Bras", "Panties", "Lingerie Sets", "Sleep & Loungewear", "Tank Tops & Slips"];
	 return options3;
	case "Travel & Luggage": options3 = ["Weekender Bags", "Laptop Backpacks", "Suitcase s", "Travel Accessories"];
	 return options3;
	case "Men's Jackets & Coats": options3 = ["Bomber Jackets", "Denim Jackets", "Leather Jackets", "Rain Coats & Trenches"];
	 return options3;
	case "Hoodies & Sweatshirts": options3 = []
	 return options3;
	case 'Sweaters': options3 = []
	 return options3;
	case "T-Shirts": options3 = []
	 return options3;
	case 'Shirts': options3 = []
	 return options3;
	case "Polo Shirts": options3 = []
	 return options3;
	case 'Jeans': options3 = []
	 return options3;
	case 'Pant': options3 = ["Cargo", "Joggers & Sweatpants"]
	 return options3;
	case "Mens Bags": options3 = ["Backpack", "Suitcase s", "Weekender Bags", "Business Bags", "Messenger Bags", "Crossbody Bags", "Travel Bags"]
	 return options3;
	case "Men's Shoes": options3 = ["Sneakers", "Sandals", "Formal Shoes", "Boots", "Flip Flops", "Slip-ons & Loafers", "House Slippers", "boys Shoes"]
	 return options3;
	case "Men's Accessories": options3 = ["Belt", "Wallet", "Hats & Caps", "Ties & Bow Ties", "Gloves", "Umbrellas"]
	 return options3;
	case 'Clothing': options3 = ["Panjabi & Fatua", "Suits", "Underwear", "Boys Clothing"]
	 return options3;
	case "Men's Watch": options3 = ["Casual", "Business", "Fashion", "Sports"]
	 return options3;
	case "Men's Jewelleries": options3 = ["Rings", "Necklaces & Pendants", "Bracelets"]
	 return options3;
	case "Women's Watch": options3 = ["Casual", "Business", "Fashion"]
	 return options3;
	case "Women's Jewelleries": options3 = ["Rings", "Necklaces", "Pendants", "Earrings", "Jewellery Sets", "Bracelets"]
	 return options3;
	case "Fashion Mask": options3 = []
	 return options3;
	case "Men's Belt": options3 = []
	 return options3;
	case "Men's Wallet": options3 = []
	 return options3;
	case 'Sunglasses': options3 = ["Men", "Women", "Kids"]
	 return options3;
	case 'Eyeglasses': options3 = ["Men", "Women", "Kids"]
	 return options3;
	case "Kid's Watch": options3 = []
	 return options3;
	case 'Treadmills': options3 = []
	 return options3;
	case "Fitness Accessories": options3 = []
	 return options3;
	case "Dumb-bells": options3 = []
	 return options3;
	case 'Cycling': options3 = ["Bicycle", "Bicycle Accessories"]
	 return options3;
	case "Boxing, Martial Arts & MMA": options3 = ["Boxing Gloves", "Boxing Protective Gear", "Martial Art Equipment", "Punching Bags & Accessories"]
	 return options3;
	case "Men Shoes & Clothing": options3 = ["Clothing", "Shoes", "Accessories", "Bags"]
	 return options3;
	case "Outdoor Recreation": options3 = ["Golf", "Fishing", "Skateboards", "Water Sports"]
	 return options3;
	case "Exercise & Fitness": options3 = ["Exercise Bikes", "Elliptical trainers", "Strength Training Equipment"]
	 return options3;
	case "Racket Sports": options3 = ["Badminton", "Squash"]
	 return options3;
	case "Team Sports": options3 = ["Football", "Cricket", "Basket Ball", "Volleyball"]
	 return options3;
	case "Camping & Hiking": options3 = ["Tents", "Sleeping Bags", "Cooking Essentials", "Hiking Backpacks"]
	 return options3;
	case 'Fanshop': options3 = []
	 return options3;
	case 'Automobile': options3 = ["Imported Cars", "Sedans", "SUVs", "Trucks"]
	 return options3;
	case "Auto Oils &Fluids": options3 = ["Additives", "Transmission Fluids"]
	 return options3;
	case "Interior Accessories": options3 = ["Seat Covers & Accessories", "Floor Mats & Cargo Liners", "Air Fresheners"]
	 return options3;
	case "Exterior Accessories": options3 = ["Covers"]
	 return options3;
	case "Exterior Vehicle Care": options3 = ["Car Polishes & Waxes"]
	 return options3;
	case "Interior Vehicle Care": options3 = ["Vacuums"]
	 return options3;
	case "Car Electronic Accessories": options3 = []
	 return options3;
	case "Car Audio": options3 = ["Speakers"]
	 return options3;
	case 'Motorcycle': options3 = ["Scooters", "Standard Bikes"]
	 return options3;
	 case "Moto Parts & Accessories": options3 = ["Drivetrain & Transmission", "Oils & Fluids", "Tools & Maintenance"]
	 return options3;
	 case "Motorcycle Riding Gear": options3 = ["Helmet", "Gloves", "Eyewear"]
	 return options3;
	 default: return options3;
}
}