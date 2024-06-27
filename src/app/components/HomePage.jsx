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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
