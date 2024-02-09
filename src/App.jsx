import { useState } from "react";

import { useWindowSize } from "@uidotdev/usehooks";

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
import { Button } from "./components/ui/button";

import walletDownload from "./assets/downloadWallet.png";
import stampLogo from "./assets/testStamp.svg";
import sendToken from "./assets/sendToken.png";
import logoProtocol from "./assets/logo.svg";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";
import alert from "./assets/alert.svg";
import trade from "./assets/trade.png";
import menu from "./assets/menu.svg";

import "./App.css";
import { useEffect } from "react";

function App() {
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

  return (
    <div className="bg-background dark text-foreground container-main flex flex-col justify-center items-center">
      <div className="w-full 2xl:w-9/12 flex flex-col">
        <div className="container-navigation flex items-center justify-between">
          <div className="container-logo-name-protocol flex items-center">
            <Avatar className="w-20 md:w-32 h-20 md:h-32">
              <AvatarImage src={logoProtocol} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-poppins">STAMPPROTOCOL</h1>
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
                      className="text-lg rounded font-poppins"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#about">About</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-poppins"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#How-to-buy">How to buy</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-poppins"
                      onClick={() => setOpen(false)}
                    >
                      <a href="#community">Community</a>
                    </Badge>{" "}
                  </DialogDescription>
                  <DialogDescription>
                    <Badge
                      className="text-lg rounded font-poppins"
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
              <Badge className="text-lg rounded font-poppins">
                <a href="#about">About</a>
              </Badge>
              <Badge className="text-lg rounded font-poppins">
                <a href="#How-to-buy">How to buy</a>
              </Badge>
              <Badge className="text-lg rounded font-poppins">
                <a href="#community">Community</a>
              </Badge>
              <Badge className="text-lg rounded font-poppins">
                <a href="/">App (soon)</a>
              </Badge>
            </div>
          )}
        </div>

        <div className="container-home flex justify-center mt-40">
          <div className="container-description w-full md:w-2/5">
            <div className="container-money">
              <h1 className="text-4xl md:text-7xl font-poppins font-bold">
                Buy $STAMP
              </h1>
              <h1 className="text-4xl md:text-7xl font-poppins font-bold">
                Earn $AVAX
              </h1>
            </div>
            <div className="container-intro-protocol mt-10">
              <p className="text-xl font-poppins">
                Experience STAMP Protocol's Hold to Earn (H2E) rewards feature.
                Keeping $STAMP allows you to consistently gain $AVAX rewards.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <img className="w-4 mt-2 cursor-pointer" src={alert} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[420px]">
                  <DialogHeader>
                    <DialogTitle>Disclaimer</DialogTitle>
                    <DialogDescription>
                      Returns from Stamp Protocol's Hold 2 Earn (H2E) rewards
                      rely on the maintenance of trading volume. Sustained AVAX
                      returns from holding $STAMP tokens are contingent upon
                      adequate volume levels. Market fluctuations can impact
                      returns. Users are urged to conduct due diligence and
                      evaluate risks before engaging. Stamp Protocol and its
                      affiliates are not accountable for return variations due
                      to volume or market changes.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="container-actions mt-10">
              <Button className="font-poppins">COPY TOKEN ADDRESS</Button>
            </div>
          </div>
          {isScreenMobile ? null : (
            <div className="container-description-logo bg-yellow-400 flex rounded-md ml-10">
              <img src={stampLogo}></img>
            </div>
          )}
        </div>

        <div className="container-about mt-20 md:mt-40" id="about">
          <h1 className="font-poppins font-semibold text-4xl text-yellow-400">
            Exploring the $STAMP
          </h1>

          <div className="container-cards flex flex-col md:flex-row  justify-between mt-10">
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins text-center">
                  Total Tax
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-center">
                  6% for rewards, 2% for Project and 2% to liquidity
                </p>
              </CardContent>
            </Card>

            <Card className="mt-10 md:mt-0">
              <CardHeader>
                <CardTitle className="font-poppins text-center">
                  Hold $STAMP {isScreenMobile ? <br /> : null} Earn $AVAX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wrap font-poppins text-center">
                  Revenue from taxes is seamlessly exchanged for Avax,
                  <br />
                  benefiting all holders and reinforcing the liquidity pool.
                  <br />
                  Rewards Mechanism is 100% automatic
                </p>
              </CardContent>
            </Card>

            <Card className="mt-10 md:mt-0">
              <CardHeader>
                <CardTitle className="font-poppins text-center">
                  Total Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wrap font-poppins text-center">
                  100 000 000 $STAMP <br />
                  50 000 000 $STAMP burn progressively
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container-buy mt-20 md:mt-40" id="How-to-buy">
          <h1 className="font-poppins font-semibold text-4xl text-yellow-400">
            How to buy
          </h1>

          <div className="container-cards flex flex-col md:flex-row justify-between mt-10 ">
            <Card className="w-100 md:w-96">
              <CardHeader>
                <CardTitle>
                  <img src={walletDownload}></img>
                  <h1 className="font-poppins mt-5 text-center">
                    CREATE A WALLET
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-center">
                  We recommend creating a wallet with{" "}
                  <a
                    href="https://www.rabby.io/"
                    target="_blank"
                    className="text-yellow-400"
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
                  <h1 className="font-poppins mt-5 text-center">
                    DEPOSIT AVAX
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-center">
                  Fund Your Phantom Wallet with $SOL from the Crypto Exchange of
                  Your Choice.
                </p>
              </CardContent>
            </Card>

            <Card className="w-100 md:w-96 mt-10 md:mt-0">
              <CardHeader>
                <CardTitle>
                  <img src={trade}></img>
                  <h1 className="font-poppins mt-5 text-center">BUY $STAMP</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-center">
                  Acquire $STAMP Easily: Just Copy Our Contract Address and use{" "}
                  <a
                    href="https://traderjoexyz.com/avalanche/trade"
                    target="_blank"
                    className="text-yellow-400"
                  >
                    traderjoe.xyz
                  </a>{" "}
                  to Convert $AVAX into $STAMP.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container-socials h-max md:h-96 mt-40" id="community">
          <Card className="w-full h-full bg-yellow-400 flex items-center">
            <div className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-poppins mt-5 text-center text-black text-4xl">
                    Find us Here
                  </h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-center text-black text-lg">
                  For the latest updates, follow Stamp Protocol on Twitter/X and
                  Telegram. Join us and be part of the Print community!
                </p>
                <div className="container-actions flex justify-center mt-10">
                  <Button className="font-poppins " variant="secondary">
                    <img className="mr-2 h-4 w-4" src={twitter}></img>

                    <a
                      href="https://twitter.com/stampProtocol"
                      target="_blank"
                      className="text-yellow-400"
                    >
                      Twitter
                    </a>
                  </Button>
                  <Button className="font-poppins ml-10" variant="secondary">
                    <img className="mr-2 h-4 w-4" src={telegram}></img>
                    <a
                      href="https://t.me/+lHSQoijTkSZjMWI0"
                      target="_blank"
                      className="text-yellow-400"
                    >
                      Telegram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
            {isScreenMobile ? null : (
              <div className="w-1/2 flex justify-center">
                <img src={stampLogo}></img>
              </div>
            )}
          </Card>
        </div>

        <div className="container-logo-name-protocol flex items-center mt-20">
          <Avatar className="w-20 h-20">
            <AvatarImage src={logoProtocol} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-poppins">STAMPPROTOCOL</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
