import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./components/ui/button";

import walletDownload from "./assets/downloadWallet.png";
import stampLogo from "./assets/testStamp.svg";
import sendToken from "./assets/sendToken.png";
import logoProtocol from "./assets/logo.svg";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";
import trade from "./assets/trade.png";

import "./App.css";

function App() {
  return (
    <div className="bg-background dark text-foreground container-main flex flex-col justify-center">
      <div className="container-navigation flex items-center justify-around">
        <div className="container-logo-name-protocol flex items-center">
          <Avatar className="w-32 h-32">
            <AvatarImage src={logoProtocol} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-poppins">STAMPPROTOCOL</h1>
        </div>

        <div className="container-menu flex justify-between w-2/5">
          <Badge className="text-lg rounded font-poppins">
            <a href="/">About</a>
          </Badge>
          <Badge className="text-lg rounded font-poppins">
            <a href="/">How to buy</a>
          </Badge>
          <Badge className="text-lg rounded font-poppins">
            <a href="/">Community</a>
          </Badge>
          <Badge className="text-lg rounded font-poppins">
            <a href="/">App (soon)</a>
          </Badge>
        </div>
      </div>

      <div className="container-home flex justify-center mt-40">
        <div className="container-description w-2/5">
          <div className="container-money">
            <h1 className="text-7xl font-poppins font-bold">Buy $STAMP</h1>
            <h1 className="text-7xl font-poppins font-bold">Earn $AVAX</h1>
          </div>
          <div className="container-intro-protocol mt-10">
            <p className="text-xl font-poppins">
              Experience STAMP Protocol's Hold to Earn (H2E) rewards feature.
              Keeping $STAMP allows you to consistently gain $AVAX rewards.
            </p>
          </div>
          <div className="container-actions mt-10">
            <Button className="font-poppins">COPY TOKEN ADDRESS</Button>
          </div>
        </div>
        <div className="container-description-logo bg-yellow-400 flex rounded-md ml-10">
          <img src={stampLogo}></img>
        </div>
      </div>

      <div className="container-about mt-40">
        <h1 className="font-poppins font-semibold text-4xl text-yellow-400">
          Exploring the $STAMP
        </h1>

        <div className="container-cards flex justify-between mt-10">
          <Card className="">
            <CardHeader>
              <CardTitle className="font-poppins">Total Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-poppins">
                6% for rewards, 2% for Project and 2% to liquidity
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">
                Hold $STAMP Earn $AVAX
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-wrap font-poppins">
                Revenue from taxes is seamlessly exchanged for Avax,
                <br />
                benefiting all holders and reinforcing the liquidity pool.
                <br />
                Rewards Mechanism is 100% automatic
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">Total Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-wrap font-poppins">
                100 000 000 $STAMP <br />
                50 000 000 $STAMP burn progressively
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container-buy mt-40">
        <h1 className="font-poppins font-semibold text-4xl text-yellow-400">
          How to buy
        </h1>

        <div className="container-cards flex justify-between mt-10">
          <Card className="w-96">
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

          <Card className="w-96">
            <CardHeader>
              <CardTitle>
                <img src={sendToken}></img>
                <h1 className="font-poppins mt-5 text-center">DEPOSIT AVAX</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-poppins text-center">
                Fund Your Phantom Wallet with $SOL from the Crypto Exchange of
                Your Choice.
              </p>
            </CardContent>
          </Card>

          <Card className="w-96">
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

      <div className="container-socials h-96 mt-40">
        <Card className="w-full h-full bg-yellow-400 flex items-center">
          <div className="w-1/2">
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
                    href="https://www.rabby.io/"
                    target="_blank"
                    className="text-yellow-400"
                  >
                    Twitter
                  </a>
                </Button>
                <Button className="font-poppins ml-10" variant="secondary">
                  <img className="mr-2 h-4 w-4" src={telegram}></img>
                  <a
                    href="https://www.rabby.io/"
                    target="_blank"
                    className="text-yellow-400"
                  >
                    Telegram
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={stampLogo}></img>
          </div>
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
  );
}

export default App;
