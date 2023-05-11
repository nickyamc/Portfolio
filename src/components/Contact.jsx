import React from "react";

const Contact = () => {
  return (
    <section className="px-10 pt-20 pb-32 img-bg-contact bg-[#f7f8fa]">
      <div className="flex justify-center ">
        <div className="w-[950px] rounded-3xl px-20 py-9 img-bg-contact-card bg-[#232a55]">
          <p className="text-3xl font-bold font-neo text-white">
            Contacto por Email
          </p>
          <p className="text-lg font-semibold font-open text-white mt-3">
            ¿Interesado en trabajar juntos? Deberías contactarme.
          </p>
          <div className="flex flex-col items-center gap-2 mt-4">
            <input className="rounded-lg border-2 bg-white/70 border-[#d2ddec] caret-[#4f65f1] py-1.5 min-w-[200px] w-[350px]" />
            <button className="bg-[#4f65f1] text-white rounded-md px-5 py-2 shadow-md">ENVIAR</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
