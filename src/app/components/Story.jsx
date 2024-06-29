"use client";
import Image from "next/image";

const Story = () => {
  return (
    <section id="sec">
      <div className="h-screen flex items-center bg-scroll bg-sabya md:bg-im5 bg-cover overflow-y-auto overflow-x-hidden z-10 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            id="img"
            src="/sabya.png"
            width={600}
            height={300}
            alt="photo"
          />
        </div>
        <div
          style={{ marginTop: "300px" }}
          className="flex flex-col justify-center items-start text-white p-8"
        >
          <h1 className="text-4xl mb-4">Story</h1>
          <div className="max-w-xl">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
              sapiente! Suscipit temporibus fugit ab voluptas molestiae
              voluptate nihil enim quis ducimus, exercitationem distinctio amet
              iste culpa ad natus beatae ut?Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat nisi mollitia porro quam
              dolorum obcaecati at odit sequi, adipisci, delectus laudantium
              cupiditate repudiandae? Relopellat iste provident natus odio a
              quam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, nisi perspiciatis similique consectetur vel dolore
              laborum alias voluptates distinctio, atque explicabo quidem, a
              commodi dolorum. Sed deleniti laudantium itaque iusto Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Delectus fugiat
              numquam voluptatum, dolore laboriosam aliquam facere modi
              repellat? Est ex veritatis sed vero nobis nemo voluptates nam amet
              numquam quis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque fugiat fugit tempora, tempore facere, ut iure non
              libero quisquam sint exercitationem aliquam enim. Aspernatur sed
              impedit dolor vero sit reprehenderit? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Maxime fuga impedit exercitationem
              dolores in labore. Beatae officia tempore accusantium esse
              quaerat, temporibus expedita id omnis, reprehenderit reiciendis
              fuga quae aspernatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis dolor tempora molestiae ut doloribus
              aliquid recusandae, voluptates ex error enim quam magnam qui
              necessitatibus similique mollitia nobis assumenda nesciunt porro!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
