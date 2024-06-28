"use client";
import Image from "next/image";
const Team = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        marginLeft: "10px",
        marginRight: "10px",
        fontSize: "40px",
      }}
    >
      <h1 className="flex justify-center items-center">
        <b>News</b>
      </h1>
      <br />
      <section id="News">
        <div>
          <Image
            src="/dramin.png"
            width={500}
            height={300}
            objectFit="cover"
            className="flex-none"
          />
        </div>
        <p
          className="max-w-xl"
          style={{
            flex: "1 0 50%",
            maxWidth: "50%",
            fontSize: "18px",
            padding: "20px",
          }}
        >
          lorem lorem lorem lorem lorem lorem
        </p>
      </section>
    </div>
  );
};
export default Team;
