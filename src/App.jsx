import { useState, useEffect } from "react";

import { useCopyToClipboard, useWindowSize } from "@uidotdev/usehooks";
import { TypeAnimation } from "react-type-animation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Boxes } from "../components/ui/sparkles";

import walletDownload from "./assets/downloadWallet.png";
import blasterLogo from "./assets/shiba3.png";
import dogEye from "./assets/shiba4.png";
import sendToken from "./assets/sendToken.png";
import logoProtocol from "./assets/shiba.png";
import logoFooter from "./assets/shiba5.png";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";
import alert from "./assets/alert.svg";
import trade from "./assets/uniInterface.png";
import menu from "./assets/menu.svg";

import "./App.css";

function App() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [isScreenMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width <= 768 && !isScreenMobile) {
      setIsMobile(true);
    } else if (size.width && size.width >= 768 && isScreenMobile) {
      setIsMobile(false);
    }
  }, [size.width]);

  useEffect(() => {
    const containerGlobal = document.querySelector("#root");
    const containerGlobal2 = document.querySelector(".test-test");

    const observer = new MutationObserver((mutations) => {
      const totalHeight = containerGlobal.scrollHeight;
      containerGlobal2.style.height = `${totalHeight}px`;
    });

    observer.observe(containerGlobal, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background dark text-foreground  container-main flex flex-col justify-center items-center container-global">
      <div className="absolute inset-0 w-full h-full " />
      <Boxes className="" />

      <div className="2xl:w-9/12 flex flex-col">
        <div className="container-navigation flex items-center justify-between">
          <div className="container-logo-name-protocol flex items-center">
            <Avatar className="w-12 md:w-32 h-12 md:h-32 flex items-center justify-center bg-white">
              <AvatarImage
                className="w-12 md:w-3/4 h-12 md:h-3/4"
                src={logoProtocol}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-pixelify text-2xl font-semibold ml-2 z-50">
              BOGEPROTOCOL
            </h1>
          </div>
          {isScreenMobile ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img className="w-10 cursor-pointer" src={menu} />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[420px] bg-yellow-400 z-50">
                <DialogHeader>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-pixelify"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#about">About</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-pixelify"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#How-to-buy">How to buy</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-pixelify"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#community">Community</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-pixelify"
                      onClick={() => setOpen(false)}
                    >
                      <a href="/">App (soon)</a>
                    </Badge>{" "}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ) : (
            <div className="container-menu flex justify-between w-2/5">
              <Badge className="text-lg rounded font-pixelify font-normal z-50">
                <a href="#about">About</a>
              </Badge>
              <Badge className="text-lg rounded font-pixelify font-normal z-50">
                <a href="#How-to-buy">How to buy</a>
              </Badge>
              <Badge className="text-lg rounded font-pixelify font-normal z-50">
                <a href="#community">Community</a>
              </Badge>
              <Badge className="text-lg rounded font-pixelify font-normal z-50">
                <a href="/">App (soon)</a>
              </Badge>
            </div>
          )}
        </div>

        <div className="container-home flex justify-center mt-40">
          <div className="container-description w-full md:w-2/5">
            <div className="container-money">
              <h1 className="text-4xl md:text-7xl font-pixelify font-bold relative z-50">
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                  }}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    `Buy $BOGE\n Earn $ETH`,
                    1000,
                  ]}
                  cursor={false}
                  speed={50}
                />
              </h1>
            </div>
            <div className="container-intro-protocol mt-10">
              <p className="text-xl font-pixelify relative z-50">
                Experience BOGE Protocol's Hold to Earn (H2E) rewards feature.
                Keeping $BOGE allows you to consistently gain $ETH rewards.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    className="w-4 mt-2 cursor-pointer relative z-50"
                    src={alert}
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[420px]">
                  <DialogHeader>
                    <DialogTitle>Disclaimer</DialogTitle>
                    <DialogDescription>
                      Returns from BOGE Protocol's Hold 2 Earn (H2E) rewards
                      rely on the maintenance of trading volume. Sustained ETH
                      returns from holding $BOGE tokens are contingent upon
                      adequate volume levels. Market fluctuations can impact
                      returns. Users are urged to conduct due diligence and
                      evaluate risks before engaging. BOGE Protocol and its
                      affiliates are not accountable for return variations due
                      to volume or market changes.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="container-actions mt-10">
              <Button
                className="font-pixelify relative z-50"
                onClick={() =>
                  copyToClipboard("0x4C9484FD8F1b7BF56f66f06f79258D6C0c0Fa5BB")
                }
              >
                COPY TOKEN ADDRESS
              </Button>
              <p className="relative z-50">
                0x4C9484FD8F1b7BF56f66f06f79258D6C0c0Fa5BB
              </p>
            </div>
          </div>
          {isScreenMobile ? null : (
            <div className="container-description-logo flex ml-10 z-50">
              <img src={blasterLogo}></img>
            </div>
          )}
        </div>

        <div className="container-about mt-20 md:mt-40" id="about">
          <h1 className="font-pixelify font-semibold text-4xl relative z-50">
            Exploring the $BOGE
          </h1>

          <div className="container-cards flex flex-col md:flex-row  justify-between mt-10">
            <Card className="z-50">
              <CardHeader>
                <CardTitle className="font-pixelify text-center">
                  Total Tax
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-pixelify text-center">
                  8% for rewards, 2% for Project and 4% to liquidity
                </p>
              </CardContent>
            </Card>

            <Card className="z-50 mt-10 md:mt-0 ">
              <CardHeader>
                <CardTitle className="font-pixelify text-center">
                  Hold $BOGE {isScreenMobile ? <br /> : null} Earn $ETH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wrap font-pixelify text-center">
                  Revenue from taxes is seamlessly exchanged for ETH,
                  <br />
                  benefiting all holders and reinforcing the liquidity pool.
                  <br />
                  Rewards Mechanism is 100% automatic
                </p>
              </CardContent>
            </Card>

            <Card className="z-50 mt-10 md:mt-0">
              <CardHeader>
                <CardTitle className="font-pixelify text-center">
                  Total Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wrap font-pixelify text-center">
                  100 000 000 $BOGE <br />
                  Wallet marketing: 3 000 000 $BOGE
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container-buy mt-20 md:mt-40" id="How-to-buy">
          <h1 className="font-pixelify font-semibold text-4xl relative z-50">
            How to buy
          </h1>

          <div className="container-cards flex flex-col md:flex-row justify-between mt-10 ">
            <Card className="z-50 w-100 md:w-96">
              <CardHeader>
                <CardTitle>
                  <img src={walletDownload}></img>
                  <h1 className="font-pixelify mt-5 text-center">
                    CREATE A WALLET
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-pixelify text-center">
                  We recommend creating a wallet with{" "}
                  <a
                    href="https://www.rabby.io/"
                    target="_blank"
                    className="primary-color"
                  >
                    Rabby wallet{" "}
                  </a>{" "}
                  . Follow the Streamlined Process to Create Your Account
                  Effortlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="z-50 w-100 md:w-96 mt-10 md:mt-0">
              <CardHeader>
                <CardTitle>
                  <img src={sendToken}></img>
                  <h1 className="font-pixelify mt-5 text-center">
                    DEPOSIT ETH
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-pixelify text-center">
                  Fund Your Rabby Wallet with $ETH from the Crypto Exchange of
                  Your Choice.
                </p>
              </CardContent>
            </Card>

            <Card className="z-50 w-100 md:w-96 mt-10 md:mt-0">
              <CardHeader>
                <CardTitle>
                  <img src={trade}></img>
                  <h1 className="font-pixelify mt-5 text-center">BUY $BOGE</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-pixelify text-center">
                  Acquire $BOGE Easily: Just Copy Our Contract Address and use{" "}
                  <a
                    href="https://app.uniswap.org/"
                    target="_blank"
                    className="primary-color"
                  >
                    uniswap
                  </a>{" "}
                  to Convert $ETH into $BOGE.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          className="z-50 container-socials h-max md:h-96 mt-40"
          id="community"
        >
          <Card className="w-full h-full flex items-center">
            <div className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-pixelify mt-5 text-center text-black text-4xl relative z-50">
                    Find us Here
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-pixelify text-center text-black text-lg">
                  For the latest updates, follow BOGE Protocol on Twitter/X.
                  Join us and be part of the Print community!
                </p>
                <div className="container-actions flex justify-center mt-10">
                  <Button className="font-pixelify " variant="secondary">
                    <img className="mr-2 h-4 w-4" src={twitter}></img>

                    <a
                      href="https://twitter.com/BOGE__PROTOCOL"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </Button>
                  {/* <Button className="font-pixelify ml-10" variant="secondary">
                    <img className="mr-2 h-4 w-4" src={telegram}></img>
                    <a href="https://t.me/BOGEPROTOCOL" target="_blank">
                      Telegram
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </div>
            {isScreenMobile ? null : (
              <div
                className="w-1/2 h-1/2
              flex justify-center"
              >
                <img src={dogEye}></img>
              </div>
            )}
          </Card>
        </div>

        <div className="container-logo-name-protocol flex items-center mt-20">
          <Avatar className="w-20 h-20">
            <AvatarImage src={logoFooter} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-pixelify font-semibold	relative z-50">
            BOGEPROTOCOL
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
