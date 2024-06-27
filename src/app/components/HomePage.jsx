"use client";
import Template from "../components/Template";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Link,
  Image,
  Divider,
  Button,
} from "@nextui-org/react";
const Content = () => {
  return (
    <main className="" style={{ scrollBehavior: "smooth" }}>
      <div style={{ marginTop: "70px" }}>
        <div
          className="flex items-end justify-center  bg-background_1 bg-auto bg-cover h-[38rem] bg-center"
          style={{ paddingBottom: "3rem" }}
        >
          <div className="text-center text-white max-w-xl">
            <h1 className="text-5xl">lorem | ipsum | lorem</h1>
            <br />
            <p className="text-xl">lorem ipsum lorem ipsum lorem ipsum</p>
            <br />
            <Template>
              <Link href="/connect">
                <button
                  style={{}}
                  className={`button4 rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
                >
                  Join Waiting List
                </button>
              </Link>
            </Template>
          </div>
        </div>
        <div
          className="flex items-top justify-center h-[100rem] bg-[#18181b] bg-cover"
          style={{ paddingTop: "5rem" }}
        >
          <div className="text-white max-w-4xl text-center">
            <h1 className="text-7xl">
              <b>lorem ipsum</b>
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              nam unde maxime, labore totam ad repudiandae, eos, expedita ipsa
              nesciunt recusandae soluta voluptatem ratione facere fugiat minima
              quam eum ex. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Deleniti eos saepe repellat a voluptatem, enim libero
              pariatur quam repellendus, tempore dolorem cupiditate fugit,
              beatae nam unde perferendis modi recusandae blanditiis.
            </p>
            <br />
            <br />
            <img src="/chain.jpg" alt="" />
            <br />
            <br />
            <h1
              className="text-3xl max-w-7xl  text-center "
              style={{ fontSize: "35px" }}
            >
              lorem ipsum lorem ipsum lorem ipsum
            </h1>
            <br />
            <div className="flex items-top justify-center grid grid-cols-1 md:grid-cols-3 gap-10 md:flex-auto">
              <div
                className=" rounded-md bg-[#27272a]"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <Card
                  className="max-w-[500px]"
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <CardHeader className="justify-center">
                    <Image
                      alt="img 1"
                      height={400}
                      radius="sm"
                      src="/card1.jpg"
                      width={400}
                    />
                  </CardHeader>
                  <br />
                  <Divider />
                  <CardBody>
                    <h1 style={{ fontSize: "19px" }}>
                      <b>Lorem Ipsum lorem</b>
                    </h1>
                    <br />
                    <p style={{ fontSize: "15px" }} className="text-start">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis consequatur distinctio eos, ipsam dolor non
                      voluptatum in aut dolorem eius doloribus quidem ex
                      reprehenderit laboriosam sapiente deleniti maxime sunt
                      asperiores? Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Sed enim neque temporibus fuga laborum
                      vel quidem, repellendus corporis labore? Eaque laudantium
                      vero consequuntur atque expedita natus sed officiis ad
                      ducimus?
                    </p>
                    <br />
                    <br />
                  </CardBody>
                </Card>
              </div>
              <div
                className="rounded-md bg-[#27272a]"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <Card
                  className="max-w-[500px]"
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <CardHeader className="justify-center">
                    <Image
                      alt="img 2"
                      height={400}
                      radius="sm"
                      src="/card2.jpg"
                      width={400}
                    />
                  </CardHeader>
                  <br />
                  <Divider />
                  <CardBody>
                    <h1 style={{ fontSize: "20px" }}>
                      <b>lorem ipsum lorem</b>
                    </h1>
                    <br />
                    <p style={{ fontSize: "15px" }} className="text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi aspernatur, cumque veritatis, nostrum adipisci
                      cupiditate inventore quis unde modi molestias sapiente
                      totam facilis, aliquid sit atque molestiae perferendis
                      amet ratione? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sit, totam, odio excepturi dolore,
                      doloremque maiores dolorum vitae consectetur placeat quo
                      ullam optio facilis. Eum magnam accusantium pariatur
                      reprehenderit ad ullam.
                    </p>
                    <br />
                    <br />
                    <br />
                  </CardBody>
                </Card>
              </div>
              <div
                className=" rounded-md bg-[#27272a]"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <Card
                  className="max-w-[500px]"
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <CardHeader className="justify-center">
                    <Image
                      alt="img 3"
                      height={400}
                      radius="sm"
                      src="/card3.jpg"
                      width={400}
                    />
                  </CardHeader>
                  <br />
                  <Divider />
                  <CardBody>
                    <h1 style={{ fontSize: "20px" }}>
                      <b>lorem ipsum</b>
                    </h1>
                    <br />
                    <p style={{ fontSize: "15px" }} className="text-start">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit nemo laboriosam sint laborum quos repellendus
                      accusantium vero, exercitationem numquam adipisci atque
                      molestias error blanditiis aperiam cumque veniam soluta.
                      Culpa, omnis. Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Velit asperiores eveniet numquam
                      praesentium, voluptatibus, eum placeat est repudiandae
                      illum commodi esse laudantium, assumenda odit id inventore
                      ab quasi fugiat fugit.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {`
            .button1 {
              background-color: black;
              color: white;
            }
            .button1:hover {
              background-color: white;
              color: black;
            }
            .button2 {
              background-color: black;
              color: white;
            }
            .button2:hover {
              background-color: white;
              color: black;
            }
            .button3 {
              background-color: black;
              color: white;
            }
            .button3:hover {
              background-color: white;
              color: black;
            }
            .button4 {
              background-color: black;
              color: white;
            }
            .button4:hover {
              background-color: white;
              color: black;
            }
            body::-webkit-scrollbar {
              width: 8px; /* width of the entire scrollbar */
            }

            body::-webkit-scrollbar-track {
              background: grey; /* color of the tracking area */
            }

            body::-webkit-scrollbar-thumb {
              background-color: black; /* color of the scroll thumb */
              border-radius: 20px; /* roundness of the scroll thumb */
              border: 3px solid orange; /* creates padding around scroll thumb */
            }
          `}
        </style>
      </div>
    </main>
  );
};

export default Content;
