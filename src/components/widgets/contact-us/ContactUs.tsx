import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Phone:", phone);
  };

  return (
    <section id="contact-us">
      <div className="w-11/12 xl:flex container mx-auto xl:px-12 py-4 xl:py-6 bg-red text-white my-8 xl:my-16 rounded-3xl shadow-md">
        <div className="xl:w-2/5 xl:px-20">
          <h5 className="text-md xl:text-4xl text-center xl:text-start font-semibold mb-2">
            Связаться с нами!
          </h5>
          <p className="text-sm xl:text-xl text-center xl:text-start mb-4 xl:mb-0">
            Оставьте заявку, и наши менеджеры
            <br />
            свяжутся с Вами в ближайшее время.
          </p>
        </div>
        <div className="xl:w-3/5">
          <form
            onSubmit={handleSubmit}
            className="xl:flex gap-3 justify-center items-center"
          >
            <div className="md:flex justify-center items-center gap-6">
              <div className="text-black flex justify-center items-center mb-4 xl:mb-0">
                <input
                  className="px-8 py-3 rounded-xl text-lg xl:text-xl"
                  type="text"
                  placeholder="Ваше имя *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="text-black flex justify-center items-center mb-4 xl:mb-0">
                <input
                  className="px-8 py-3 rounded-xl text-lg xl:text-xl"
                  type="text"
                  placeholder="Телефон *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center xl:mx-0 px-16 xl:px-2 py-3 text-lg xl:text-xl rounded-xl bg-blue">
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
