import React from "react";

export default function Map() {
  return (
    <section>
      <div className="grid-box" id="grid-box-2" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281739.934629057!2d72.0739749264313!3d20.75510870707456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1705850726191!5m2!1sen!2sin"
          style={{width: `100%`, height: `100%`, border: `none`}}
          allowFullScreen
          title="Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
