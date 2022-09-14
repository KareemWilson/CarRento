import services from "../data/services.js";

const generateServiceCard = () => {
    const serviceSection = document.querySelector("#services");
    services.forEach((service) => {
        const serviceCard = document.createElement("div");
        const serviceImg = document.createElement("img");
        const serviceTitle = document.createElement("h4");
        const serviceDescription = document.createElement("p");
      
        serviceCard.setAttribute("class", "service-card d-flex flex-row p-2");
        serviceImg.setAttribute("class", "service-img");
        serviceImg.setAttribute("src", service.logo);
        serviceTitle.setAttribute("class", "service-title");
        serviceDescription.setAttribute("class", "service-desc");
      
        serviceTitle.innerHTML = service.serviceTitle
        serviceDescription.innerHTML = service.serviceDescription
      
        serviceSection.appendChild(serviceCard);
        serviceCard.append(serviceImg, serviceTitle, serviceDescription);
      });
    const serviceBtn = document.createElement('button')

    serviceBtn.setAttribute('class', 'btn')
    serviceBtn.innerHTML = 'Know more about us'

    serviceSection.appendChild(serviceBtn)
}

export default generateServiceCard