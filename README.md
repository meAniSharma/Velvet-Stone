# Velvet-Stone
SCM Group Project

#Project Overview ->
    🏡 Real Estate Property Listing Web App — Overview

    🔹 Project Description:

        A simple web-based application where users can post rental properties by filling a multi-step form, 
        and buyers can browse through the listed properties, view details, and even simulate a "Buy Now" action — just like OLX or MagicBricks.

    🔹 Main Pages:

        addProperty.html (for Owners/Sellers)
        A multi-step form where users can:
        Enter property location (country, city, address, map).
        Upload images.
        Add property details (type, bedrooms, bathrooms, furnishing, rent, description).
        Submit the property to localStorage.
        propertyList.html (for Management)
        Displays all properties listed so far.
        Each listing shows:
        Basic details + Image.
        A Delete button to remove any listing.
        Add New Property button at bottom to post another ad.
        buyProperty.html (for Buyers)
        Shows available properties to buy.
        Each property has:
        Property image + basic info.
        A "Buy Now" button.
        On click, shows a confirmation popup.

    🔹 Key Features:

        Multi-Step Form for better UX (user experience).
        LocalStorage to save properties temporarily without server backend.
        Add / Delete Listings dynamically.
        Buy Now simulation.
        Responsive and clean UI inspired by OLX/MagicBricks.
        Reusable Data across pages using localStorage.

    🔹 Technologies Used:

        HTML5
        CSS3
        JavaScript (ES6+)
        Leaflet.js (for map — optional)
        Google Fonts (Poppins) for clean typography.

    🔹 Possible Future Improvements:

        Add a backend (Node.js, Firebase) to store real data permanently.
        User authentication (login/register system).
        Payment gateway integration for real purchase.
        Add filters (location, price range, property type) on buy page.
        Add a success page after buying a property.


Project Distribution ->

1. Ani - BranchName -> dev-ani
    # Create three web pages:

    ->Add Property Page: 
        Multi-step form to submit property details with image upload and location input.

    ->Property Listing Page: 
        Displays all submitted properties in a list format with image, details, delete option, and add new property button.

    ->Buy Property Page: 
        Shows available properties with a "Buy Now" button for users to simulate property purchase.

2. Adit - BranchName -> master
    # Create the main/home landing page:


3. Aryan - BranchName -> aryan
    # Create the login/sign-up page: