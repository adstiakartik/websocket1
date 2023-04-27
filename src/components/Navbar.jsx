import React from "react";
// import "../App.css";
// import { useSelector } from "react-redux";

const Navbar = () => {
  // const rData = useSelector(state => state.responseData.responseData)
  const rData = [
    [
      "RATE\t1\n",
      "USDPLAYER\tNO\n",
      "USERSIGNUPTYPE\tR\nCURRTIME\tApr 26, 2023. 05:47:27 PM +05:30\tApr 26, 2023. 05:47:27 PM +05:30\n",
      "IPPORTLIST\t192.168.0.63-9801-R-[2a06:4101:7064:0:0:0:6cd8:9aec]&192.168.0.63-9802-O-[2a06:4101:7064:0:0:0:af8a:ca56]&185.106.240.73-9803-OHL-[2a06:4101:7064:0:0:0:af8a:ca56]&192.168.0.63-9253-RIT-[2a06:4101:7064:0:0:0:6cd8:9aec]&185.106.240.73-9805-RITO-[2a06:4101:7064:0:0:0:af8a:ca56]&185.106.240.73-9806-OH5-[2a06:4101:7064:0:0:0:af8a:ca56]&192.168.0.63-9254-OH6R-[2a06:4101:7064:0:0:0:af8a:ca56]&192.168.0.63-9253-OH6-[2a06:4101:7064:0:0:0:af8a:ca56]&192.168.0.63-9802-OH7-[2a06:4101:7064:0:0:0:af8a:ca56]&192.168.0.63-9252-OH7R-[2a06:4101:7064:0:0:0:af8a:ca56]&\nBADBEATVALUE\t42885.98\n",
      "BIGBADBEATVALUE\t0\n",
      "ALLOWTEENPATTI\tN\n",
      "CREDITINFO\tsachin\t98091\t10000\t0\t393.01\t0\t0\t0\nOK\nUSERINFO\tOK\tY\tYES\tN~\tSachin\t1\t0\tFalse\t~(#)\n",
    ],
  ];
  //console.log(rData);

  for (let i = 0; i < rData.length; i++) {
    if (rData[i].toString() !== "") {
      var innerArray = rData[i];
      var temp = [];
      var result = [];

      for (let j = 0; j < innerArray.length; j++) {
        const splitArray = innerArray[j].split(/[\t\n]/);
        temp.push(splitArray.slice(0, -1));
        result.push(temp);
        //ProcessCommands(temp[j][i], result);
      }
    }
  }
  // function ProcessCommands(temp, result) {
  //   console.log(result);
  //   //console.log(temp);
  //   switch (temp) {
  //     case "RATE":
  //       console.log(`The rate is ${result[0][0][1]} `);
  //       break;
  //     case "USDPLAYER":
  //       console.log(`USDPLAYER response is ${result[1][1][1]}`);
  //       break;
  //     case "USERSIGNUPTYPE":
  //       console.log(`User sign up type is${result[2][2][1]}`);
  //       break;
  //     case "IPPORTLIST":
  //       console.log(
  //         `IP port list is${result[3][3][1]}   and the bad beat value is  ${result[3][3][2]}`
  //       );
  //       break;
  //     case "BIGBADBEATVALUE":
  //       console.log(`The big bad beat value is ${result[4][4][1]}`);
  //       break;
  //     case "ALLOWTEENPATTI":
  //       console.log(`Allow teen patti response is ${result[5][5][1]} `);
  //       break;
  //     case "CREDITINFO":
  //       console.log(`Credit info is  and user info is ${result[6][6][1]} `);
  //       break;
  //     case "PLAYERNAME":
  //       console.log(`Player  the game ${result[7][7][1]} `);
  //       break;
  //     case "TABLECOUNT":
  //       console.log(`There are  tables with players ${result[8][8][1]}`);
  //       break;
  //     default:
  //       console.log(`Unhandled response: response ${result[9][9][1]}`);
  //   }
  // }
  //console.log(temp);
  //console.log(result);

  return (
    <div className="App">
      <h1>Navbar</h1>
      {/* <button onClick={cases}>case</button> */}
    </div>
  );
  // }
};

export default Navbar;
