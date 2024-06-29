// "use client";
// const Content = () => {
//   return (
//     <main className="overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
//       <div>
//         <div className="flex items-center justify-center h-screen bg-fixed bg-background_1 bg-auto md:bg-cover h-screen bg-fixed flex items-center justify-center">
//           <div className="text-center text-white max-w-xl">
//             <h1 className="text-5xl">Medchain</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center justify-start h-screen bg-fixed bg-im2 bg-cover">
//           <div className=" text-white max-w-xl bottom-0 left-0">
//             <h1 className="text-2xl">Medchain</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center justify-start h-screen bg-fixed bg-im3 bg-cover">
//           <div className=" text-white max-w-xl">
//             <h1 className="text-2xl">Medchain</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center justify-start h-screen bg-fixed bg-im4 bg-cover">
//           <div className="text-white max-w-xl">
//             <h1 className="text-2xl ">Medchain</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>
//         <style jsx global>
//           {`
//             body::-webkit-scrollbar {
//               width: 8px; /* width of the entire scrollbar */
//             }

//             body::-webkit-scrollbar-track {
//               background: grey; /* color of the tracking area */
//             }

//             body::-webkit-scrollbar-thumb {
//               background-color: black; /* color of the scroll thumb */
//               border-radius: 20px; /* roundness of the scroll thumb */
//               border: 3px solid orange; /* creates padding around scroll thumb */
//             }
//           `}
//         </style>
//       </div>
//     </main>
//   );
// };

// export default Content;

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
            <h1 className="text-5xl">STORE | ENRICH | SELL</h1>
            <br />
            <p className="text-xl">
              Our Blockchain based platform for Healthcare Data
            </p>
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
              <b>Medchain Platfrom</b>
            </h1>
            <br />
            <p>
              Medchain is a platform to securely store and enrich medical data
              of patients using Blockchain and Generative AI. This Data can be
              published in Medchain's Marketplace anonymously for selling it to
              Healthcare Organisations, Researchers, and Pharmaceutical
              companies for research and development.
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
              Phase - I : The genesis of the Web 3.0 Healthcare App
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
                      <b>Secure & Standard Storage</b>
                    </h1>
                    <br />
                    <p style={{ fontSize: "15px" }} className="text-start">
                      Medchain will provide a decentralized storage platform to
                      the patients for storing all the medical data irrespective
                      of the type or format. Every piece of medical data
                      irrespective of the type would be stored in a standardized
                      format using GEN AI.
                    </p>
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <Template>
                      <Link href="/news">
                        <button
                          style={{ marginBottom: "10px" }}
                          className={`button3 rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
                        >
                          Learn more
                        </button>
                      </Link>
                    </Template>
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
                      <b>AI Data Enrichment</b>
                    </h1>
                    <br />
                    <p style={{ fontSize: "15px" }} className="text-start">
                      Medchain will enrich the patient's base data by adding
                      calculated values if missing during Medchain's
                      Standardized storing process. Based on the Healthcare
                      professional comments in the base report Medchain adds the
                      diagnostic and data labels.
                    </p>
                    <br />
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <Template>
                      <Link href="/news">
                        <button
                          style={{ marginBottom: "10px" }}
                          className={`button2 rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
                        >
                          Learn more
                        </button>
                      </Link>
                    </Template>
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
                      <b>Robust Marketplace</b>
                    </h1>
                    <br />
                    <p style={{ fontSize: "15px" }} className="text-start">
                      Patients can list their anonymized data on the Medchain
                      marketplace for exchange leading to monetary benefits.
                      Researchers and Pharmaceutical Companies get access to
                      well-labeled and structured data for research, analysis
                      and development from our Marketplace.
                    </p>
                    <br />
                    <Divider />
                    <br />
                    <Template>
                      <Link href="/news">
                        <button
                          style={{ marginBottom: "10px" }}
                          className={`button1 rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
                        >
                          Learn more
                        </button>
                      </Link>
                    </Template>
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
