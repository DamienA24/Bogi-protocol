import { useState, useEffect } from "react";

import { useCopyToClipboard, useWindowSize } from "@uidotdev/usehooks";

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
import { SparklesCore } from "../components/ui/sparkles";

import walletDownload from "./assets/downloadWallet.png";
import BLASTERLogo from "./assets/testStamp.svg";
import blasterLogo from "./assets/blasterLogo.png";
import sendToken from "./assets/sendToken.png";
import logoProtocol from "./assets/blast.svg";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";
import alert from "./assets/alert.svg";
import trade from "./assets/trade2.png";
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
    <div className="bg-background dark text-foreground container-main flex flex-col justify-center items-center container-global">
      <div className="w-full absolute inset-0 test-test">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="w-full 2xl:w-9/12 flex flex-col z-50">
        <div className="container-navigation flex items-center justify-between">
          <div className="container-logo-name-protocol flex items-center">
            <Avatar className="w-12 md:w-32 h-12 md:h-32">
              <AvatarImage src={logoProtocol} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-chakra">BLASTERPROTOCOL</h1>
          </div>
          {isScreenMobile ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img className="w-10 cursor-pointer" src={menu} />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[420px] bg-yellow-400">
                <DialogHeader>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-chakra"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#about">About</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-chakra"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#How-to-buy">How to buy</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-chakra"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#community">Community</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-chakra"
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
              <Badge className="text-lg rounded font-chakra">
                <a href="#about">About</a>
              </Badge>
              <Badge className="text-lg rounded font-chakra">
                <a href="#How-to-buy">How to buy</a>
              </Badge>
              <Badge className="text-lg rounded font-chakra">
                <a href="#community">Community</a>
              </Badge>
              <Badge className="text-lg rounded font-chakra">
                <a href="/">App (soon)</a>
              </Badge>
            </div>
          )}
        </div>

        <div className="container-home flex justify-center mt-40">
          <div className="container-description w-full md:w-2/5">
            <div className="container-money">
              <h1 className="text-4xl md:text-7xl font-chakra font-bold">
                Buy $BLASTER
              </h1>
              <h1 className="text-4xl md:text-7xl font-chakra font-bold">
                Earn $ETH
              </h1>
            </div>
            <div className="container-intro-protocol mt-10">
              <p className="text-xl font-chakra">
                Experience BLASTER Protocol's Hold to Earn (H2E) rewards
                feature. Keeping $BLASTER allows you to consistently gain $ETH
                rewards.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <img className="w-4 mt-2 cursor-pointer" src={alert} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[420px]">
                  <DialogHeader>
                    <DialogTitle>Disclaimer</DialogTitle>
                    <DialogDescription>
                      Returns from BLASTER Protocol's Hold 2 Earn (H2E) rewards
                      rely on the maintenance of trading volume. Sustained ETH
                      returns from holding $BLASTER tokens are contingent upon
                      adequate volume levels. Market fluctuations can impact
                      returns. Users are urged to conduct due diligence and
                      evaluate risks before engaging. BLASTER Protocol and its
                      affiliates are not accountable for return variations due
                      to volume or market changes.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="container-actions mt-10">
              <Button
                className="font-chakra"
                onClick={() =>
                  copyToClipboard("0x66deb295f1deb8b255b4041836221606b3c33ec4")
                }
              >
                COPY TOKEN ADDRESS
              </Button>
              <p>0x66deb295f1deb8b255b4041836221606b3c33ec4</p>
            </div>
          </div>
          {isScreenMobile ? null : (
            <div className="container-description-logo background-primary-color flex rounded-md ml-10">
              <img src={blasterLogo}></img>
            </div>
          )}
        </div>

        <div className="container-about mt-20 md:mt-40" id="about">
          <h1 className="font-chakra font-semibold text-4xl primary-color">
            Exploring the $BLASTER
          </h1>

          <div className="container-cards flex flex-col md:flex-row  justify-between mt-10">
            <Card>
              <CardHeader>
                <CardTitle className="font-chakra text-center">
                  Total Tax
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-chakra text-center">
                  6% for rewards, 2% for Project and 2% to liquidity
                </p>
              </CardContent>
            </Card>

            <Card className="mt-10 md:mt-0">
              <CardHeader>
                <CardTitle className="font-chakra text-center">
                  Hold $BLASTER {isScreenMobile ? <br /> : null} Earn $ETH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wrap font-chakra text-center">
                  Revenue from taxes is seamlessly exchanged for ETH,
                  <br />
                  benefiting all holders and reinforcing the liquidity pool.
                  <br />
                  Rewards Mechanism is 100% automatic
                </p>
              </CardContent>
            </Card>

            <Card className="mt-10 md:mt-0">
              <CardHeader>
                <CardTitle className="font-chakra text-center">
                  Total Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wrap font-chakra text-center">
                  100 000 000 $BLASTER <br />
                  50 000 000 $BLASTER burn progressively
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container-buy mt-20 md:mt-40" id="How-to-buy">
          <h1 className="font-chakra font-semibold text-4xl primary-color">
            How to buy
          </h1>

          <div className="container-cards flex flex-col md:flex-row justify-between mt-10 ">
            <Card className="w-100 md:w-96">
              <CardHeader>
                <CardTitle>
                  <img src={walletDownload}></img>
                  <h1 className="font-chakra mt-5 text-center">
                    CREATE A WALLET
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-chakra text-center">
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

            <Card className="w-100 md:w-96 mt-10 md:mt-0">
              <CardHeader>
                <CardTitle>
                  <img src={sendToken}></img>
                  <h1 className="font-chakra mt-5 text-center">DEPOSIT ETH</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-chakra text-center">
                  Fund Your Rabby Wallet with $ETH from the Crypto Exchange of
                  Your Choice.
                </p>
              </CardContent>
            </Card>

            <Card className="w-100 md:w-96 mt-10 md:mt-0">
              <CardHeader>
                <CardTitle>
                  <img src={trade}></img>
                  <h1 className="font-chakra mt-5 text-center">BUY $BLASTER</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-chakra text-center">
                  Acquire $BLASTER Easily: Just Copy Our Contract Address and
                  use{" "}
                  <a
                    href="https://app.thruster.finance"
                    target="_blank"
                    className="primary-color"
                  >
                    thruster.finance
                  </a>{" "}
                  to Convert $ETH into $BLASTER.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container-socials h-max md:h-96 mt-40" id="community">
          <Card className="w-full h-full background-primary-color flex items-center">
            <div className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-chakra mt-5 text-center text-black text-4xl">
                    Find us Here
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-chakra text-center text-black text-lg">
                  For the latest updates, follow BLASTER Protocol on Twitter/X
                  and Telegram. Join us and be part of the Print community!
                </p>
                <div className="container-actions flex justify-center mt-10">
                  <Button className="font-chakra " variant="secondary">
                    <img className="mr-2 h-4 w-4" src={twitter}></img>

                    <a
                      href="https://twitter.com/BLASTERProtocol"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </Button>
                  <Button className="font-chakra ml-10" variant="secondary">
                    <img className="mr-2 h-4 w-4" src={telegram}></img>
                    <a href="https://t.me/+lHSQoijTkSZjMWI0" target="_blank">
                      Telegram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
            {isScreenMobile ? null : (
              <div
                className="w-1/2 h-1/2
              flex justify-center"
              >
                <img src={blasterLogo}></img>
              </div>
            )}
          </Card>
        </div>

        {isScreenMobile ? null : (
          <div className="container-iframe flex flex-col justify-center mt-40">
            <h1 className="font-chakra font-semibold text-4xl primary-color">
              BE FAST!
            </h1>
            <iframe
              id="frame"
              src="https://draw.rudyfaile.com/"
              className="mt-10"
            />
          </div>
        )}

        <div className="container-logo-name-protocol flex items-center mt-20">
          <Avatar className="w-20 h-20">
            <AvatarImage src={logoProtocol} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-chakra">BLASTERPROTOCOL</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
