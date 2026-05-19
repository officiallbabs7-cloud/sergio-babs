import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
      <div className="my-20 px-4">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contact
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto text-[#C59424]">
          {CONTACT_INFO.text}
        </p>

        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-10 lg:gap-0">
          <div className="flex items-start">
            <RiPhoneLine className="text-3xl mr-4 text-[#D4A02B] shrink-0" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-[#C59424]">
                <a
                  href={`tel:${CONTACT_INFO.phone.value}`}
                  className="hover:underline"
                >
                  {CONTACT_INFO.phone.value}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <RiMailLine className="text-3xl mr-4 text-[#D4A02B] shrink-0" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-[#C59424]">
                <a
                  href={`mailto:${CONTACT_INFO.email.value}`}
                  className="hover:underline"
                >
                  {CONTACT_INFO.email.value}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <RiMapPinLine className="text-3xl mr-4 text-[#D4A02B] shrink-0" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-[#C59424]">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
