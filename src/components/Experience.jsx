import React from "react";
import WorkCard from "./Cards/WorkCard";
import SliderButtons from "./Sliders/SliderButtons";

const Experience = () => {
  return (
    <section className="bg-[#f7f8fa] pt-32 pb-44 px-3 lg:px-10 xl:px-40 2xl:px-64 img-bg-experience overflow-hidden">
      <div className="flex flex-col gap-7 justify-center items-center">
        <div className="flex flex-col self-stretch ml-20">
          <p className="text-base font-bold font-neo text-[#fa7f98]">
            EXPERIENCE
          </p>
          <p className="text-4xl font-bold font-neo text-os">Developer</p>
        </div>
        <SliderButtons>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Java Developer"}
              company={"Babas.devel"}
              time={"Ago. 2021 - Dic. 2021"}
              description={
                "Desarrollado de sistemas comerciales de escritorio con uso de lenguaje Java, librerias como JavaFX para mejora de interfaces de usuarios."
              }
              url={"babasdevel.com"}
              image={
                "https://scontent.flim24-1.fna.fbcdn.net/v/t39.30808-6/306123907_548404567086248_7554300244924495233_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEqeyP2NQ7lBruU0j2AYNSsulnp6P5WObu6Weno_lY5u7FwekaBkuEdd5SrIwHMzmTgpZWc4FxseoejfKE6ew5g&_nc_ohc=3rFx-y6NEl4AX_4tbBG&_nc_ht=scontent.flim24-1.fna&oh=00_AfB9t4b-ExeKzos5dxMW2gQELOUKnhal5Fn6MTcD_vvxgw&oe=6419910F"
              }
            />
          </div>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Java Developer"}
              company={"Babas.devel"}
              time={"Ago. 2021 - Dic. 2021"}
              description={
                "Desarrollado de sistemas comerciales de escritorio con uso de lenguaje Java, librerias como JavaFX para mejora de interfaces de usuarios."
              }
              url={"babasdevel.com"}
              image={
                "https://scontent.flim24-1.fna.fbcdn.net/v/t39.30808-6/306123907_548404567086248_7554300244924495233_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEqeyP2NQ7lBruU0j2AYNSsulnp6P5WObu6Weno_lY5u7FwekaBkuEdd5SrIwHMzmTgpZWc4FxseoejfKE6ew5g&_nc_ohc=3rFx-y6NEl4AX_4tbBG&_nc_ht=scontent.flim24-1.fna&oh=00_AfB9t4b-ExeKzos5dxMW2gQELOUKnhal5Fn6MTcD_vvxgw&oe=6419910F"
              }
            />
          </div>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Java Developer"}
              company={"Babas.devel"}
              time={"Ago. 2021 - Dic. 2021"}
              description={
                "Desarrollado de sistemas comerciales de escritorio con uso de lenguaje Java, librerias como JavaFX para mejora de interfaces de usuarios."
              }
              url={"babasdevel.com"}
              image={
                "https://scontent.flim24-1.fna.fbcdn.net/v/t39.30808-6/306123907_548404567086248_7554300244924495233_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEqeyP2NQ7lBruU0j2AYNSsulnp6P5WObu6Weno_lY5u7FwekaBkuEdd5SrIwHMzmTgpZWc4FxseoejfKE6ew5g&_nc_ohc=3rFx-y6NEl4AX_4tbBG&_nc_ht=scontent.flim24-1.fna&oh=00_AfB9t4b-ExeKzos5dxMW2gQELOUKnhal5Fn6MTcD_vvxgw&oe=6419910F"
              }
            />
          </div>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Java Developer"}
              company={"Babas.devel"}
              time={"Ago. 2021 - Dic. 2021"}
              description={
                "Desarrollado de sistemas comerciales de escritorio con uso de lenguaje Java, librerias como JavaFX para mejora de interfaces de usuarios."
              }
              url={"babasdevel.com"}
              image={
                "https://scontent.flim24-1.fna.fbcdn.net/v/t39.30808-6/306123907_548404567086248_7554300244924495233_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEqeyP2NQ7lBruU0j2AYNSsulnp6P5WObu6Weno_lY5u7FwekaBkuEdd5SrIwHMzmTgpZWc4FxseoejfKE6ew5g&_nc_ohc=3rFx-y6NEl4AX_4tbBG&_nc_ht=scontent.flim24-1.fna&oh=00_AfB9t4b-ExeKzos5dxMW2gQELOUKnhal5Fn6MTcD_vvxgw&oe=6419910F"
              }
            />
          </div>
        </SliderButtons>
      </div>
    </section>
  );
};

export default Experience;
