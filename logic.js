
const contentArray = [
    {
        title: "Oil Drilling Contracting",
        paragraph: "We specialize in oil drilling contracting, providing state-of-the-art solutions for exploration and extraction. Our expertise in onshore and offshore drilling operations ensures efficiency, safety, and compliance with international industry standards. With advanced technology and a skilled workforce, we optimize drilling performance while minimizing environmental impact.",
        img_fp: "statics/portfolio/oil_rig.jpg"
    },
    {
        title: "Diesel Processing",
        paragraph: "We supply premium diesel fuel, meeting stringent industry standards for efficiency and performance. Our diesel solutions cater to industrial, commercial, and transportation needs, ensuring optimal fuel economy, reduced emissions, and enhanced engine performance for our customers.",
        img_fp: "statics/portfolio/diesel.webp"
    },
    {
        title: "Fertilizer Production",
        paragraph: "Our company supplies high-quality fertilizers that enhance agricultural productivity and soil health. We provide a diverse range of organic and chemical fertilizers tailored to meet the specific needs of farmers and agribusinesses worldwide. With a strong distribution network, we ensure timely delivery and competitive pricing.",
        img_fp: "statics/portfolio/fertilizers.webp"
    },
    {
        title: "International Trade",
        paragraph: "We engage in international trading, connecting businesses worldwide with high-quality products and materials. Our extensive network and expertise in global markets enable us to facilitate seamless transactions, ensuring the best value and competitive advantage for our partners.",
        img_fp: "statics/portfolio/trade.jpg"
    },
    {
        title: "Logistics Solutions",
        paragraph: "Our logistics division provides comprehensive transportation and supply chain solutions. With a focus on efficiency and reliability, we offer freight forwarding, warehousing, and distribution services that optimize operations and reduce costs for our clients across various industries.",
        img_fp: "statics/portfolio/logistics.jpeg"
    },
    {
        title: "Oil Chemicals Processing",
        paragraph: "We are a trusted supplier of petrochemical products, catering to various industrial needs. From raw materials to specialized compounds, our extensive portfolio supports manufacturing processes across multiple industries, ensuring reliability, consistency, and superior performance.",
        img_fp: "statics/portfolio/oil_chem.jpg"
    },
    {
        title: "Vietnamese Rice Production",
        paragraph: "We source and distribute premium-quality Vietnamese rice, renowned for its exceptional taste, texture, and nutritional value. Our global supply chain guarantees fresh and authentic rice varieties, serving wholesalers, retailers, and food distributors with the highest standards of quality and service.",
        img_fp: "statics/portfolio/vietnamese_rice.jpg"
    }
];


let currentIndex = 0;

// Function to display the current content
function displayContent(index) {
    const content = contentArray[index];
    document.getElementById('slideshow-title').textContent = content.title;
    document.getElementById('slideshow-paragraph').textContent = content.paragraph;
    document.getElementById('slideshow-img').src = content.img_fp;
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % contentArray.length; // Wrap around to the first slide
    displayContent(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length; // Wrap around to the last slide
    displayContent(currentIndex);
}

// Initialize the first slide
displayContent(currentIndex);



// // Drilling Content
// const OD_title = "Oil Drilling Contracting";
// const OD_par = "We specialize in oil drilling contracting, providing state-of-the-art solutions for exploration and extraction. Our expertise in onshore and offshore drilling operations ensures efficiency, safety, and compliance with international industry standards. With advanced technology and a skilled workforce, we optimize drilling performance while minimizing environmental impact.";
// const OD_img_fp = "statics/portfolio/oil_rig.jpg";


// // Diesal Content
// const D_title = "Diesal Processing";
// const D_par = "We supply premium diesel fuel, meeting stringent industry standards for efficiency and performance. Our diesel solutions cater to industrial, commercial, and transportation needs, ensuring optimal fuel economy, reduced emissions, and enhanced engine performance for our customers.";
// const D_img_fp = "statics/portfolio/diesel.webp";


// // Fertizers content
// const F_title = "Fertilizer Production";
// const F_par = "Our company supplies high-quality fertilizers that enhance agricultural productivity and soil health. We provide a diverse range of organic and chemical fertilizers tailored to meet the specific needs of farmers and agribusinesses worldwide. With a strong distribution network, we ensure timely delivery and competitive pricing.";
// const F_img_fp = "statics/portfolio/fertilizers.webp";


// // International Trade Content
// const IT_title = "International Trade";
// const IT_par = "We engage in international trading, connecting businesses worldwide with high-quality products and materials. Our extensive network and expertise in global markets enable us to facilitate seamless transactions, ensuring the best value and competitive advantage for our partners.";
// const IT_img_fp = "statics/portfolio/trade.jpg";


// // Logistics content
// const L_title = "Logistics Solutions";
// const L_par = "Our logistics division provides comprehensive transportation and supply chain solutions. With a focus on efficiency and reliability, we offer freight forwarding, warehousing, and distribution services that optimize operations and reduce costs for our clients across various industries.";
// const L_img_fp = "statics/portfolio/logistics.jpeg";


// // Oil Chemicals Content
// const OC_title = "Oil Chemicals Processing";
// const OC_par = "We are a trusted supplier of petrochemical products, catering to various industrial needs. From raw materials to specialized compounds, our extensive portfolio supports manufacturing processes across multiple industries, ensuring reliability, consistency, and superior performance.";
// const OC_img_fp = "statics/portfolio/oil_chemicals.jpg";


// // Vietnamese Rice
// const VR_title = "Vietnamese Rice Production";
// const VR_par = "We source and distribute premium-quality Vietnamese rice, renowned for its exceptional taste, texture, and nutritional value. Our global supply chain guarantees fresh and authentic rice varieties, serving wholesalers, retailers, and food distributors with the highest standards of quality and service.";
// const VR_img_fp = "statics/portfolio/vietnamese-rice.jpg";



// let con_mod = {
//     title: OD_title,
//     paragraph: OD_par,
//     img_fp: OD_img_fp, 
//     index: 0;
// };


function addEventList(id) {
    document.getElementById(id).addEventListener('click', () => 
        alert('You clicked on the contracting module!')
    );
}