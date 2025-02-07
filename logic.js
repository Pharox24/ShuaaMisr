
document.getElementById("prev_img_btn").addEventListener('click', () => {
    // alert("user clocked on the prev image button");
});



const contentArray = [
    {
        title: "Oil Drilling Contracting",
        paragraph: "We specialize in oil drilling contracting, offering state-of-the-art solutions for both exploration and extraction. Our expertise spans across onshore and offshore drilling operations, ensuring maximum efficiency, safety, and strict adherence to international industry standards. Leveraging cutting-edge technology and a highly skilled workforce, we optimize drilling performance while minimizing operational risks and environmental impact. Our commitment to innovation and sustainability enables us to provide cost-effective solutions that meet the evolving needs of the energy sector. With a focus on responsible resource extraction, we strive to enhance productivity while upholding the highest standards of environmental stewardship.",
        img_fp: "statics/portfolio/oil_rig.jpg"
    },
    {
        title: "Diesel Processing",
        paragraph: "We are a leading supplier of premium diesel fuel, ensuring compliance with stringent industry regulations for efficiency, safety, and performance. Our diesel solutions are tailored to meet the diverse needs of industrial, commercial, and transportation sectors, delivering superior fuel economy and engine longevity. With a strong focus on sustainability, we provide high-quality diesel products that reduce emissions and contribute to cleaner energy consumption. Our advanced refining and quality control processes guarantee consistency, reliability, and enhanced performance, positioning us as a trusted partner for businesses seeking top-tier fuel solutions.",
        img_fp: "statics/portfolio/diesel.webp"
    },
    {
        title: "Fertilizer Production",
        paragraph: "Our company is dedicated to supplying high-quality fertilizers that enhance agricultural productivity, soil fertility, and crop yields. We offer a diverse portfolio of organic and chemical fertilizers, each formulated to address the specific nutritional needs of different crops and soil types. With a deep understanding of modern agricultural practices, we ensure our fertilizers contribute to sustainable farming while maximizing efficiency and output. Our strong distribution network enables us to serve farmers and agribusinesses globally, providing timely delivery, competitive pricing, and expert guidance to support food security and economic growth in the agricultural sector.",
        img_fp: "statics/portfolio/fertilizers.webp"
    },
    {
        title: "International Trade",
        paragraph: "We play a pivotal role in international trade, connecting businesses across the globe with high-quality products and raw materials. Our extensive market knowledge, robust supply chain infrastructure, and strategic partnerships enable us to facilitate seamless trade transactions while ensuring compliance with international trade regulations. Whether it’s sourcing raw materials, exporting finished goods, or navigating complex trade logistics, we provide tailored solutions that maximize value and competitive advantage for our partners. Our commitment to transparency, reliability, and efficiency positions us as a trusted intermediary in the global marketplace.",
        img_fp: "statics/portfolio/trade.jpg"
    },
    {
        title: "Logistics Solutions",
        paragraph: "Our logistics division offers end-to-end transportation and supply chain solutions, designed to optimize efficiency and reduce operational costs for businesses across multiple industries. We specialize in freight forwarding, warehousing, inventory management, and distribution services, ensuring seamless movement of goods from origin to destination. With cutting-edge technology and a highly experienced team, we enhance supply chain visibility, minimize delays, and improve overall logistics performance. Our commitment to reliability and customer satisfaction makes us the preferred choice for companies seeking streamlined logistics operations on a global scale.",
        img_fp: "statics/portfolio/logistics.jpeg"
    },
    {
        title: "Oil Chemicals Processing",
        paragraph: "As a trusted supplier of petrochemical products, we cater to the diverse needs of industries that rely on high-quality raw materials and specialized chemical compounds. Our extensive portfolio includes a wide range of oil-based chemicals used in manufacturing, construction, automotive, and energy sectors. With a focus on innovation and quality assurance, we ensure that our products meet industry standards for safety, consistency, and performance. By leveraging advanced processing technologies and sustainable practices, we contribute to the efficiency and growth of industries that depend on petrochemical solutions.",
        img_fp: "statics/portfolio/oil_chem.jpg"
    },
    {
        title: "Vietnamese Rice Production",
        paragraph: "We are a leading supplier of premium-quality Vietnamese rice, renowned worldwide for its exceptional taste, texture, and nutritional value. Our sourcing and distribution operations are designed to ensure the delivery of fresh, authentic rice varieties that meet the highest standards of quality and food safety. By maintaining strong relationships with local farmers and leveraging an efficient global supply chain, we provide wholesalers, retailers, and food distributors with access to a consistent supply of superior rice. Our commitment to excellence, sustainability, and customer satisfaction has positioned us as a trusted name in the global rice trade industry.",
        img_fp: "statics/portfolio/vietnamese_rice.jpg"
    }
];
    

let currentIndex = 0;

// Function to display the current content
function displayContent(index) {
const content = contentArray[index];
const imgElement = document.getElementById('slideshow-img');
const titleElement = document.getElementById('slideshow-title');
const paragraphElement = document.getElementById('slideshow-paragraph');

// Fade-in effect for the image
imgElement.classList.add('fade-in');
setTimeout(() => imgElement.classList.remove('fade-in'), 500);

// Slide-in effects for text
titleElement.classList.add('slide-in-left');
paragraphElement.classList.add('slide-in-right');
setTimeout(() => {
    titleElement.classList.remove('slide-in-left');
    paragraphElement.classList.remove('slide-in-right');
}, 500);

// Update content
imgElement.src = content.img_fp;
titleElement.textContent = content.title;
paragraphElement.textContent = content.paragraph;
}

// Function to go to the next slide
function nextSlide() {
currentIndex = (currentIndex + 1) % contentArray.length;
displayContent(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
displayContent(currentIndex);
}

// Initialize the first slide
displayContent(currentIndex);



