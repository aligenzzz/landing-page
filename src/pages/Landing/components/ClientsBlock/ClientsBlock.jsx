import React from "react";
import "./ClientsBlock.styles.scss";
import Client1 from "@assets/images/clients/client1.png";
import Client2 from "@assets/images/clients/client2.png";
import Client3 from "@assets/images/clients/client3.png";
import Client4 from "@assets/images/clients/client4.png";
import Client5 from "@assets/images/clients/client5.png";
import Client6 from "@assets/images/clients/client6.png";

const clients = [Client1, Client2, Client3, Client4, Client5, Client6];

const ClientsBlock = () => {
  return (
    <div className="clients-block" id="clients">
      <h2 className="title" data-aos="fade-right">
        Нам доверяют
      </h2>
      <div className="carousel">
        <div className="carousel-track">
          {[...clients, ...clients].map((Element, index) => (
            <div key={index} className="item">
              <img src={Element} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsBlock;
