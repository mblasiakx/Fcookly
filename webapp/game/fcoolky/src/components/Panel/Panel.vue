<template>
<div>
<div class="logo">
  <h1>FCOOLKY</h1>
</div>

<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>

<div class="panel">
<div class="ButtonList">

<div class="button" @click="GotoLogin" >
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Login 
</div>

<div class="button" @click="GotoMenu">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
 Play
</div>
</div>
</div>
</div>
</template>

<script>


export default {
    methods: {
    GotoMenu() {
     this.$router.push('/menu');
    },

     GotoLogin(){
     this.$router.push('/login');
    }
  }
}
</script>

<style>

.logo{
  position: absolute;
  height: 15vh;
  width: 50%;
  top:15%;
  left:50px;
  transform: translate(45%,50%);

 
}

.logo h1{
  text-align: center;
  font-size: 100px;
  color: #03e9f4;
font-family: 'Russo One', sans-serif;
}




#stars {
	width: 1px;
	height: 1px;
	background: transparent;
	box-shadow: 656px 1321px #FFF , 1766px 901px #FFF , 1789px 1085px #FFF , 1915px 780px #FFF , 1819px 1680px #FFF , 1373px 568px #FFF , 1278px 1888px #FFF , 373px 1966px #FFF , 239px 1472px #FFF , 1125px 907px #FFF , 130px 1514px #FFF , 1631px 1595px #FFF , 485px 329px #FFF , 372px 503px #FFF , 38px 1329px #FFF , 646px 967px #FFF , 1994px 742px #FFF , 1054px 51px #FFF , 1551px 1827px #FFF , 1705px 351px #FFF , 1874px 1366px #FFF , 1513px 1461px #FFF , 881px 1168px #FFF , 1407px 983px #FFF , 961px 639px #FFF , 260px 1387px #FFF , 289px 1732px #FFF , 1019px 1856px #FFF , 277px 693px #FFF , 1376px 249px #FFF , 272px 701px #FFF , 1998px 1925px #FFF , 1616px 1632px #FFF , 418px 1148px #FFF , 1584px 1696px #FFF , 1171px 532px #FFF , 843px 242px #FFF , 696px 1641px #FFF , 1049px 1715px #FFF , 1268px 1930px #FFF , 917px 767px #FFF , 1140px 569px #FFF , 375px 1087px #FFF , 722px 474px #FFF , 1003px 1866px #FFF , 1750px 792px #FFF , 1702px 1706px #FFF , 1259px 364px #FFF , 1995px 686px #FFF , 304px 107px #FFF , 348px 759px #FFF , 1740px 679px #FFF , 402px 157px #FFF , 1858px 195px #FFF , 892px 255px #FFF , 1409px 655px #FFF , 695px 231px #FFF , 1868px 190px #FFF , 377px 1240px #FFF , 112px 773px #FFF , 1994px 1171px #FFF , 918px 56px #FFF , 1188px 1824px #FFF , 181px 138px #FFF , 1194px 1191px #FFF , 509px 794px #FFF , 1137px 1961px #FFF , 1191px 119px #FFF , 538px 1619px #FFF , 51px 452px #FFF , 1558px 1486px #FFF , 1086px 1117px #FFF , 881px 1416px #FFF , 510px 1093px #FFF , 1348px 245px #FFF , 1180px 1824px #FFF , 229px 238px #FFF , 720px 741px #FFF , 1322px 1270px #FFF , 1969px 1900px #FFF , 1557px 349px #FFF , 932px 1671px #FFF , 122px 201px #FFF , 1007px 448px #FFF , 623px 1964px #FFF , 402px 1427px #FFF , 1121px 444px #FFF , 435px 1179px #FFF , 475px 1297px #FFF , 1184px 599px #FFF , 493px 1708px #FFF , 344px 1997px #FFF , 1672px 438px #FFF , 765px 213px #FFF , 65px 236px #FFF , 1313px 767px #FFF , 417px 472px #FFF , 1672px 241px #FFF , 467px 1007px #FFF , 1777px 1085px #FFF , 826px 801px #FFF , 1941px 703px #FFF , 1158px 578px #FFF , 814px 1759px #FFF , 1686px 627px #FFF , 1787px 83px #FFF , 703px 1804px #FFF , 1377px 617px #FFF , 116px 1018px #FFF , 704px 1697px #FFF , 1086px 1169px #FFF , 93px 546px #FFF , 483px 607px #FFF , 50px 539px #FFF , 124px 1300px #FFF , 1597px 872px #FFF , 1429px 1241px #FFF , 561px 1026px #FFF , 82px 1539px #FFF , 895px 1032px #FFF , 1485px 533px #FFF , 169px 347px #FFF , 825px 1807px #FFF , 490px 1776px #FFF , 1303px 1379px #FFF , 1080px 521px #FFF , 1290px 547px #FFF , 9px 1947px #FFF , 441px 728px #FFF , 1016px 1891px #FFF , 677px 385px #FFF , 222px 470px #FFF , 841px 1572px #FFF , 1722px 654px #FFF , 461px 573px #FFF , 466px 1512px #FFF , 1718px 374px #FFF , 1567px 1275px #FFF , 191px 58px #FFF , 1185px 1075px #FFF , 1461px 757px #FFF , 1386px 651px #FFF , 500px 1665px #FFF , 1946px 1686px #FFF , 192px 201px #FFF , 1351px 1845px #FFF , 1576px 1828px #FFF , 1396px 516px #FFF , 160px 83px #FFF , 866px 1829px #FFF , 237px 520px #FFF , 762px 1085px #FFF , 1117px 1262px #FFF , 277px 413px #FFF , 383px 430px #FFF , 1113px 1365px #FFF , 54px 42px #FFF , 1148px 919px #FFF , 1610px 1321px #FFF , 70px 1123px #FFF , 504px 1446px #FFF , 532px 1409px #FFF , 1183px 659px #FFF , 1624px 1306px #FFF , 38px 20px #FFF , 1984px 1822px #FFF , 49px 921px #FFF , 180px 700px #FFF , 1542px 901px #FFF , 838px 347px #FFF , 77px 803px #FFF , 1241px 169px #FFF , 206px 299px #FFF , 1255px 120px #FFF , 249px 1959px #FFF , 839px 1331px #FFF , 757px 1038px #FFF , 861px 830px #FFF , 579px 416px #FFF , 1166px 164px #FFF , 1237px 803px #FFF , 316px 611px #FFF , 1434px 70px #FFF , 1588px 849px #FFF , 195px 199px #FFF , 559px 1276px #FFF , 231px 363px #FFF , 402px 1585px #FFF , 30px 852px #FFF , 208px 1834px #FFF , 1841px 882px #FFF , 1213px 1485px #FFF , 93px 865px #FFF , 1991px 1645px #FFF , 555px 1767px #FFF , 1435px 120px #FFF , 1864px 824px #FFF , 200px 77px #FFF , 1826px 1664px #FFF , 578px 1779px #FFF , 362px 886px #FFF , 707px 1541px #FFF , 862px 388px #FFF , 226px 285px #FFF , 272px 141px #FFF , 1001px 1924px #FFF , 487px 382px #FFF , 639px 510px #FFF , 1357px 1200px #FFF , 803px 592px #FFF , 1508px 1459px #FFF , 335px 559px #FFF , 1889px 1312px #FFF , 2px 1296px #FFF , 1300px 1699px #FFF , 1608px 499px #FFF , 386px 461px #FFF , 210px 1786px #FFF , 476px 1347px #FFF , 1356px 1112px #FFF , 205px 1011px #FFF , 1281px 156px #FFF , 270px 201px #FFF , 960px 1402px #FFF , 1198px 239px #FFF , 1867px 1162px #FFF , 438px 1743px #FFF , 1378px 1012px #FFF , 1614px 632px #FFF , 961px 1011px #FFF , 1041px 315px #FFF , 1957px 1129px #FFF , 691px 1579px #FFF , 719px 1970px #FFF , 1959px 23px #FFF , 1241px 853px #FFF , 1183px 1597px #FFF , 1703px 470px #FFF , 1014px 920px #FFF , 70px 1809px #FFF , 484px 43px #FFF , 1434px 244px #FFF , 268px 1139px #FFF , 1881px 1933px #FFF , 308px 1416px #FFF , 1388px 776px #FFF , 1102px 1px #FFF , 1514px 171px #FFF , 1562px 958px #FFF , 37px 1553px #FFF , 300px 1446px #FFF , 1120px 1892px #FFF , 722px 843px #FFF , 712px 671px #FFF , 1066px 1206px #FFF , 457px 488px #FFF , 1054px 1970px #FFF , 859px 1600px #FFF , 1977px 638px #FFF , 388px 12px #FFF , 1311px 362px #FFF , 392px 669px #FFF , 121px 1019px #FFF , 703px 1246px #FFF , 1003px 438px #FFF , 1698px 1953px #FFF , 1980px 665px #FFF , 576px 1194px #FFF , 792px 1292px #FFF , 499px 75px #FFF , 747px 1530px #FFF , 84px 151px #FFF , 1044px 162px #FFF , 399px 170px #FFF , 205px 190px #FFF , 1864px 1492px #FFF , 1038px 1408px #FFF , 801px 451px #FFF , 427px 1538px #FFF , 1684px 1365px #FFF , 687px 1217px #FFF , 1984px 1450px #FFF , 1742px 601px #FFF , 946px 185px #FFF , 1445px 1658px #FFF , 970px 1965px #FFF , 1345px 1970px #FFF , 296px 1737px #FFF , 1996px 734px #FFF , 1769px 448px #FFF , 427px 1376px #FFF , 1698px 1px #FFF , 1792px 1274px #FFF , 1058px 259px #FFF , 211px 744px #FFF , 1850px 133px #FFF , 1611px 821px #FFF , 1755px 976px #FFF , 750px 572px #FFF , 1870px 1872px #FFF , 1893px 1153px #FFF , 1878px 681px #FFF , 1300px 248px #FFF , 1398px 1687px #FFF , 1999px 1986px #FFF , 1993px 1257px #FFF , 869px 1464px #FFF , 501px 678px #FFF , 1042px 1504px #FFF , 1877px 387px #FFF , 1786px 1901px #FFF , 1912px 819px #FFF , 1099px 1902px #FFF , 1418px 208px #FFF , 385px 1323px #FFF , 1194px 1997px #FFF , 1487px 1911px #FFF , 235px 75px #FFF , 586px 491px #FFF , 1923px 578px #FFF , 1478px 75px #FFF , 1542px 1836px #FFF , 877px 1171px #FFF , 631px 736px #FFF , 939px 1751px #FFF , 679px 1040px #FFF , 1465px 1770px #FFF , 1327px 478px #FFF , 1250px 1830px #FFF , 771px 520px #FFF , 1321px 1397px #FFF , 1068px 760px #FFF , 341px 1593px #FFF , 231px 576px #FFF , 1757px 776px #FFF , 800px 940px #FFF , 583px 1582px #FFF , 420px 1737px #FFF , 1938px 974px #FFF , 632px 1678px #FFF , 1909px 615px #FFF , 602px 1861px #FFF , 866px 1467px #FFF , 476px 1831px #FFF , 674px 677px #FFF , 1991px 13px #FFF , 1756px 491px #FFF , 118px 1298px #FFF , 299px 1238px #FFF , 1201px 378px #FFF , 563px 1455px #FFF , 1996px 1047px #FFF , 1122px 1360px #FFF , 1178px 1493px #FFF , 1620px 750px #FFF , 1932px 1388px #FFF , 1278px 1551px #FFF , 1667px 399px #FFF , 1758px 1947px #FFF , 307px 710px #FFF , 1598px 795px #FFF , 477px 510px #FFF , 712px 1504px #FFF , 1002px 793px #FFF , 1897px 434px #FFF , 117px 923px #FFF , 1155px 1630px #FFF , 1916px 562px #FFF , 1721px 548px #FFF , 664px 854px #FFF , 1952px 1400px #FFF , 1358px 225px #FFF , 1623px 44px #FFF , 572px 118px #FFF , 653px 296px #FFF , 190px 115px #FFF , 1332px 1539px #FFF , 189px 1518px #FFF , 470px 230px #FFF , 584px 89px #FFF , 1705px 309px #FFF , 1156px 44px #FFF , 764px 1393px #FFF , 1459px 966px #FFF , 1223px 190px #FFF , 1475px 1456px #FFF , 1699px 1657px #FFF , 718px 1003px #FFF , 63px 75px #FFF , 1401px 819px #FFF , 1442px 1917px #FFF , 159px 1818px #FFF , 1585px 303px #FFF , 954px 964px #FFF , 554px 1478px #FFF , 1728px 800px #FFF , 1123px 190px #FFF , 169px 1094px #FFF , 177px 821px #FFF , 1779px 627px #FFF , 895px 967px #FFF , 1825px 132px #FFF , 426px 1010px #FFF , 1702px 1977px #FFF , 1904px 384px #FFF , 1184px 757px #FFF , 1959px 216px #FFF , 745px 353px #FFF , 1951px 807px #FFF , 688px 645px #FFF , 1528px 524px #FFF , 1321px 1066px #FFF , 395px 556px #FFF , 497px 179px #FFF , 681px 1037px #FFF , 1337px 1382px #FFF , 403px 1898px #FFF , 859px 1460px #FFF , 686px 332px #FFF , 1851px 12px #FFF , 789px 1245px #FFF , 2px 991px #FFF , 51px 1915px #FFF , 727px 1283px #FFF , 418px 1525px #FFF , 509px 1515px #FFF , 983px 631px #FFF , 1273px 651px #FFF , 1019px 1875px #FFF , 1481px 475px #FFF , 229px 1159px #FFF , 602px 1819px #FFF , 1620px 248px #FFF , 1971px 29px #FFF , 1646px 478px #FFF , 1725px 778px #FFF , 363px 342px #FFF , 337px 1178px #FFF , 639px 1548px #FFF , 742px 992px #FFF , 32px 435px #FFF , 194px 1141px #FFF , 1313px 936px #FFF , 163px 1150px #FFF , 630px 6px #FFF , 1614px 1052px #FFF , 1239px 166px #FFF , 1826px 1196px #FFF , 449px 1624px #FFF , 1703px 1518px #FFF , 767px 408px #FFF , 636px 190px #FFF , 129px 32px #FFF , 237px 299px #FFF , 1085px 1809px #FFF , 508px 835px #FFF , 1483px 684px #FFF , 800px 1595px #FFF , 304px 1076px #FFF , 678px 1191px #FFF , 326px 119px #FFF , 167px 1372px #FFF , 1271px 1679px #FFF , 272px 311px #FFF , 216px 1762px #FFF , 83px 762px #FFF , 1837px 349px #FFF , 428px 1934px #FFF , 322px 1041px #FFF , 1108px 1897px #FFF , 1940px 1069px #FFF , 1466px 558px #FFF , 723px 142px #FFF , 1624px 184px #FFF , 1211px 1247px #FFF , 827px 995px #FFF , 871px 250px #FFF , 581px 1227px #FFF , 1656px 1607px #FFF , 828px 588px #FFF , 679px 86px #FFF , 704px 1814px #FFF , 1005px 968px #FFF , 1667px 1624px #FFF , 1651px 1773px #FFF , 679px 829px #FFF , 808px 242px #FFF , 1624px 562px #FFF , 1904px 1716px #FFF , 778px 1972px #FFF , 1470px 1971px #FFF , 434px 971px #FFF , 706px 1906px #FFF , 514px 640px #FFF , 517px 1600px #FFF , 1796px 935px #FFF , 1441px 516px #FFF , 1986px 1974px #FFF , 1294px 286px #FFF , 1569px 108px #FFF , 518px 332px #FFF , 1102px 656px #FFF , 1785px 1165px #FFF , 883px 88px #FFF , 540px 1344px #FFF , 723px 408px #FFF , 1332px 1173px #FFF , 559px 424px #FFF , 460px 501px #FFF , 530px 1686px #FFF , 1861px 1657px #FFF , 1103px 1435px #FFF , 1923px 1920px #FFF , 731px 1642px #FFF , 575px 1432px #FFF , 735px 980px #FFF , 519px 1800px #FFF , 820px 288px #FFF , 376px 514px #FFF , 476px 834px #FFF , 1794px 1680px #FFF , 521px 499px #FFF , 301px 225px #FFF , 462px 217px #FFF , 930px 1797px #FFF , 1381px 390px #FFF , 74px 1784px #FFF , 412px 257px #FFF , 717px 1830px #FFF , 290px 1269px #FFF , 1250px 1641px #FFF , 1775px 1459px #FFF , 1746px 1675px #FFF , 414px 1197px #FFF , 33px 674px #FFF , 1480px 687px #FFF , 243px 1104px #FFF , 199px 624px #FFF , 94px 1005px #FFF , 805px 1307px #FFF , 511px 1731px #FFF , 375px 1984px #FFF , 1572px 143px #FFF , 20px 6px #FFF , 697px 1769px #FFF , 204px 821px #FFF , 1797px 1249px #FFF , 780px 1173px #FFF , 384px 1232px #FFF , 1340px 1545px #FFF , 666px 1607px #FFF , 105px 1501px #FFF , 106px 1132px #FFF , 1325px 1812px #FFF , 97px 760px #FFF , 1096px 585px #FFF , 1327px 354px #FFF , 951px 1054px #FFF , 550px 656px #FFF , 459px 1138px #FFF , 1169px 121px #FFF , 1468px 1094px #FFF , 1286px 131px #FFF , 858px 1176px #FFF , 646px 1px #FFF , 1606px 1009px #FFF , 115px 877px #FFF , 5px 866px #FFF , 283px 1307px #FFF , 529px 1058px #FFF , 461px 1424px #FFF , 1103px 1807px #FFF , 534px 762px #FFF , 1304px 500px #FFF , 1202px 744px #FFF , 1519px 1680px #FFF , 1295px 822px #FFF , 1710px 1814px #FFF , 1447px 489px #FFF , 334px 249px #FFF , 1804px 5px #FFF , 982px 594px #FFF , 178px 947px #FFF , 1438px 1847px #FFF , 871px 817px #FFF , 1499px 933px #FFF , 101px 1928px #FFF , 21px 1034px #FFF , 508px 1300px #FFF , 416px 1492px #FFF , 1548px 263px #FFF , 1702px 1071px #FFF , 1713px 86px #FFF , 55px 126px #FFF , 1016px 104px #FFF , 1917px 961px #FFF , 859px 231px #FFF , 1996px 1294px #FFF , 1830px 865px #FFF , 94px 64px #FFF , 1370px 72px #FFF , 1307px 1418px #FFF , 810px 705px #FFF , 151px 591px #FFF , 1689px 1920px #FFF , 1494px 199px #FFF , 1151px 940px #FFF , 1139px 1230px #FFF , 799px 1467px #FFF , 451px 49px #FFF , 646px 744px #FFF , 287px 1770px #FFF , 682px 623px #FFF , 1173px 1707px #FFF , 1849px 1243px #FFF , 989px 11px #FFF , 1697px 544px #FFF , 1239px 462px #FFF , 1636px 1661px #FFF , 101px 1271px #FFF , 622px 240px #FFF , 950px 1486px #FFF , 1941px 1546px #FFF , 1987px 1748px #FFF , 601px 332px #FFF , 1887px 1444px #FFF , 1320px 271px #FFF , 1744px 1939px #FFF , 1735px 1290px #FFF , 556px 929px #FFF , 1081px 1769px #FFF , 2px 1826px #FFF , 794px 432px #FFF , 424px 7px #FFF , 777px 882px #FFF , 1407px 1403px #FFF , 1037px 222px #FFF , 1174px 1270px #FFF , 1259px 1705px #FFF , 711px 267px #FFF , 333px 1116px #FFF , 1961px 219px #FFF , 1666px 494px #FFF , 712px 714px #FFF , 188px 1879px #FFF , 1750px 1558px #FFF , 1455px 1544px #FFF , 1352px 663px #FFF , 662px 1347px #FFF , 1364px 874px #FFF , 23px 1510px #FFF , 1891px 1172px #FFF , 314px 1899px #FFF , 1471px 653px #FFF , 755px 110px #FFF , 1992px 514px #FFF , 1399px 1477px #FFF , 474px 395px #FFF , 1007px 1351px #FFF , 478px 827px #FFF , 1061px 357px #FFF , 50px 1178px #FFF , 520px 164px #FFF , 1373px 1998px #FFF , 1032px 1674px #FFF , 512px 1405px #FFF , 1203px 1156px #FFF , 1943px 98px #FFF , 499px 1756px #FFF , 1251px 382px #FFF , 358px 987px #FFF , 1344px 712px #FFF , 1895px 299px #FFF , 417px 1975px #FFF , 1699px 1751px #FFF , 1806px 1371px #FFF , 19px 1810px #FFF , 1569px 751px #FFF , 1428px 1733px #FFF , 1627px 705px #FFF , 1263px 1392px #FFF , 962px 827px #FFF , 899px 390px #FFF , 803px 755px #FFF , 284px 1331px #FFF , 530px 1076px #FFF , 1099px 1858px #FFF , 64px 262px #FFF , 1407px 1113px #FFF , 59px 1777px #FFF , 1257px 1727px #FFF , 40px 1000px #FFF , 647px 128px #FFF , 991px 255px #FFF , 851px 757px #FFF , 983px 652px #FFF , 824px 614px #FFF , 1115px 877px #FFF , 1666px 634px #FFF , 155px 1188px #FFF;
	animation: animStar 50s linear infinite;
}

#stars:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 1px;
	height: 1px;
	background: transparent;
	box-shadow: 656px 1321px #FFF , 1766px 901px #FFF , 1789px 1085px #FFF , 1915px 780px #FFF , 1819px 1680px #FFF , 1373px 568px #FFF , 1278px 1888px #FFF , 373px 1966px #FFF , 239px 1472px #FFF , 1125px 907px #FFF , 130px 1514px #FFF , 1631px 1595px #FFF , 485px 329px #FFF , 372px 503px #FFF , 38px 1329px #FFF , 646px 967px #FFF , 1994px 742px #FFF , 1054px 51px #FFF , 1551px 1827px #FFF , 1705px 351px #FFF , 1874px 1366px #FFF , 1513px 1461px #FFF , 881px 1168px #FFF , 1407px 983px #FFF , 961px 639px #FFF , 260px 1387px #FFF , 289px 1732px #FFF , 1019px 1856px #FFF , 277px 693px #FFF , 1376px 249px #FFF , 272px 701px #FFF , 1998px 1925px #FFF , 1616px 1632px #FFF , 418px 1148px #FFF , 1584px 1696px #FFF , 1171px 532px #FFF , 843px 242px #FFF , 696px 1641px #FFF , 1049px 1715px #FFF , 1268px 1930px #FFF , 917px 767px #FFF , 1140px 569px #FFF , 375px 1087px #FFF , 722px 474px #FFF , 1003px 1866px #FFF , 1750px 792px #FFF , 1702px 1706px #FFF , 1259px 364px #FFF , 1995px 686px #FFF , 304px 107px #FFF , 348px 759px #FFF , 1740px 679px #FFF , 402px 157px #FFF , 1858px 195px #FFF , 892px 255px #FFF , 1409px 655px #FFF , 695px 231px #FFF , 1868px 190px #FFF , 377px 1240px #FFF , 112px 773px #FFF , 1994px 1171px #FFF , 918px 56px #FFF , 1188px 1824px #FFF , 181px 138px #FFF , 1194px 1191px #FFF , 509px 794px #FFF , 1137px 1961px #FFF , 1191px 119px #FFF , 538px 1619px #FFF , 51px 452px #FFF , 1558px 1486px #FFF , 1086px 1117px #FFF , 881px 1416px #FFF , 510px 1093px #FFF , 1348px 245px #FFF , 1180px 1824px #FFF , 229px 238px #FFF , 720px 741px #FFF , 1322px 1270px #FFF , 1969px 1900px #FFF , 1557px 349px #FFF , 932px 1671px #FFF , 122px 201px #FFF , 1007px 448px #FFF , 623px 1964px #FFF , 402px 1427px #FFF , 1121px 444px #FFF , 435px 1179px #FFF , 475px 1297px #FFF , 1184px 599px #FFF , 493px 1708px #FFF , 344px 1997px #FFF , 1672px 438px #FFF , 765px 213px #FFF , 65px 236px #FFF , 1313px 767px #FFF , 417px 472px #FFF , 1672px 241px #FFF , 467px 1007px #FFF , 1777px 1085px #FFF , 826px 801px #FFF , 1941px 703px #FFF , 1158px 578px #FFF , 814px 1759px #FFF , 1686px 627px #FFF , 1787px 83px #FFF , 703px 1804px #FFF , 1377px 617px #FFF , 116px 1018px #FFF , 704px 1697px #FFF , 1086px 1169px #FFF , 93px 546px #FFF , 483px 607px #FFF , 50px 539px #FFF , 124px 1300px #FFF , 1597px 872px #FFF , 1429px 1241px #FFF , 561px 1026px #FFF , 82px 1539px #FFF , 895px 1032px #FFF , 1485px 533px #FFF , 169px 347px #FFF , 825px 1807px #FFF , 490px 1776px #FFF , 1303px 1379px #FFF , 1080px 521px #FFF , 1290px 547px #FFF , 9px 1947px #FFF , 441px 728px #FFF , 1016px 1891px #FFF , 677px 385px #FFF , 222px 470px #FFF , 841px 1572px #FFF , 1722px 654px #FFF , 461px 573px #FFF , 466px 1512px #FFF , 1718px 374px #FFF , 1567px 1275px #FFF , 191px 58px #FFF , 1185px 1075px #FFF , 1461px 757px #FFF , 1386px 651px #FFF , 500px 1665px #FFF , 1946px 1686px #FFF , 192px 201px #FFF , 1351px 1845px #FFF , 1576px 1828px #FFF , 1396px 516px #FFF , 160px 83px #FFF , 866px 1829px #FFF , 237px 520px #FFF , 762px 1085px #FFF , 1117px 1262px #FFF , 277px 413px #FFF , 383px 430px #FFF , 1113px 1365px #FFF , 54px 42px #FFF , 1148px 919px #FFF , 1610px 1321px #FFF , 70px 1123px #FFF , 504px 1446px #FFF , 532px 1409px #FFF , 1183px 659px #FFF , 1624px 1306px #FFF , 38px 20px #FFF , 1984px 1822px #FFF , 49px 921px #FFF , 180px 700px #FFF , 1542px 901px #FFF , 838px 347px #FFF , 77px 803px #FFF , 1241px 169px #FFF , 206px 299px #FFF , 1255px 120px #FFF , 249px 1959px #FFF , 839px 1331px #FFF , 757px 1038px #FFF , 861px 830px #FFF , 579px 416px #FFF , 1166px 164px #FFF , 1237px 803px #FFF , 316px 611px #FFF , 1434px 70px #FFF , 1588px 849px #FFF , 195px 199px #FFF , 559px 1276px #FFF , 231px 363px #FFF , 402px 1585px #FFF , 30px 852px #FFF , 208px 1834px #FFF , 1841px 882px #FFF , 1213px 1485px #FFF , 93px 865px #FFF , 1991px 1645px #FFF , 555px 1767px #FFF , 1435px 120px #FFF , 1864px 824px #FFF , 200px 77px #FFF , 1826px 1664px #FFF , 578px 1779px #FFF , 362px 886px #FFF , 707px 1541px #FFF , 862px 388px #FFF , 226px 285px #FFF , 272px 141px #FFF , 1001px 1924px #FFF , 487px 382px #FFF , 639px 510px #FFF , 1357px 1200px #FFF , 803px 592px #FFF , 1508px 1459px #FFF , 335px 559px #FFF , 1889px 1312px #FFF , 2px 1296px #FFF , 1300px 1699px #FFF , 1608px 499px #FFF , 386px 461px #FFF , 210px 1786px #FFF , 476px 1347px #FFF , 1356px 1112px #FFF , 205px 1011px #FFF , 1281px 156px #FFF , 270px 201px #FFF , 960px 1402px #FFF , 1198px 239px #FFF , 1867px 1162px #FFF , 438px 1743px #FFF , 1378px 1012px #FFF , 1614px 632px #FFF , 961px 1011px #FFF , 1041px 315px #FFF , 1957px 1129px #FFF , 691px 1579px #FFF , 719px 1970px #FFF , 1959px 23px #FFF , 1241px 853px #FFF , 1183px 1597px #FFF , 1703px 470px #FFF , 1014px 920px #FFF , 70px 1809px #FFF , 484px 43px #FFF , 1434px 244px #FFF , 268px 1139px #FFF , 1881px 1933px #FFF , 308px 1416px #FFF , 1388px 776px #FFF , 1102px 1px #FFF , 1514px 171px #FFF , 1562px 958px #FFF , 37px 1553px #FFF , 300px 1446px #FFF , 1120px 1892px #FFF , 722px 843px #FFF , 712px 671px #FFF , 1066px 1206px #FFF , 457px 488px #FFF , 1054px 1970px #FFF , 859px 1600px #FFF , 1977px 638px #FFF , 388px 12px #FFF , 1311px 362px #FFF , 392px 669px #FFF , 121px 1019px #FFF , 703px 1246px #FFF , 1003px 438px #FFF , 1698px 1953px #FFF , 1980px 665px #FFF , 576px 1194px #FFF , 792px 1292px #FFF , 499px 75px #FFF , 747px 1530px #FFF , 84px 151px #FFF , 1044px 162px #FFF , 399px 170px #FFF , 205px 190px #FFF , 1864px 1492px #FFF , 1038px 1408px #FFF , 801px 451px #FFF , 427px 1538px #FFF , 1684px 1365px #FFF , 687px 1217px #FFF , 1984px 1450px #FFF , 1742px 601px #FFF , 946px 185px #FFF , 1445px 1658px #FFF , 970px 1965px #FFF , 1345px 1970px #FFF , 296px 1737px #FFF , 1996px 734px #FFF , 1769px 448px #FFF , 427px 1376px #FFF , 1698px 1px #FFF , 1792px 1274px #FFF , 1058px 259px #FFF , 211px 744px #FFF , 1850px 133px #FFF , 1611px 821px #FFF , 1755px 976px #FFF , 750px 572px #FFF , 1870px 1872px #FFF , 1893px 1153px #FFF , 1878px 681px #FFF , 1300px 248px #FFF , 1398px 1687px #FFF , 1999px 1986px #FFF , 1993px 1257px #FFF , 869px 1464px #FFF , 501px 678px #FFF , 1042px 1504px #FFF , 1877px 387px #FFF , 1786px 1901px #FFF , 1912px 819px #FFF , 1099px 1902px #FFF , 1418px 208px #FFF , 385px 1323px #FFF , 1194px 1997px #FFF , 1487px 1911px #FFF , 235px 75px #FFF , 586px 491px #FFF , 1923px 578px #FFF , 1478px 75px #FFF , 1542px 1836px #FFF , 877px 1171px #FFF , 631px 736px #FFF , 939px 1751px #FFF , 679px 1040px #FFF , 1465px 1770px #FFF , 1327px 478px #FFF , 1250px 1830px #FFF , 771px 520px #FFF , 1321px 1397px #FFF , 1068px 760px #FFF , 341px 1593px #FFF , 231px 576px #FFF , 1757px 776px #FFF , 800px 940px #FFF , 583px 1582px #FFF , 420px 1737px #FFF , 1938px 974px #FFF , 632px 1678px #FFF , 1909px 615px #FFF , 602px 1861px #FFF , 866px 1467px #FFF , 476px 1831px #FFF , 674px 677px #FFF , 1991px 13px #FFF , 1756px 491px #FFF , 118px 1298px #FFF , 299px 1238px #FFF , 1201px 378px #FFF , 563px 1455px #FFF , 1996px 1047px #FFF , 1122px 1360px #FFF , 1178px 1493px #FFF , 1620px 750px #FFF , 1932px 1388px #FFF , 1278px 1551px #FFF , 1667px 399px #FFF , 1758px 1947px #FFF , 307px 710px #FFF , 1598px 795px #FFF , 477px 510px #FFF , 712px 1504px #FFF , 1002px 793px #FFF , 1897px 434px #FFF , 117px 923px #FFF , 1155px 1630px #FFF , 1916px 562px #FFF , 1721px 548px #FFF , 664px 854px #FFF , 1952px 1400px #FFF , 1358px 225px #FFF , 1623px 44px #FFF , 572px 118px #FFF , 653px 296px #FFF , 190px 115px #FFF , 1332px 1539px #FFF , 189px 1518px #FFF , 470px 230px #FFF , 584px 89px #FFF , 1705px 309px #FFF , 1156px 44px #FFF , 764px 1393px #FFF , 1459px 966px #FFF , 1223px 190px #FFF , 1475px 1456px #FFF , 1699px 1657px #FFF , 718px 1003px #FFF , 63px 75px #FFF , 1401px 819px #FFF , 1442px 1917px #FFF , 159px 1818px #FFF , 1585px 303px #FFF , 954px 964px #FFF , 554px 1478px #FFF , 1728px 800px #FFF , 1123px 190px #FFF , 169px 1094px #FFF , 177px 821px #FFF , 1779px 627px #FFF , 895px 967px #FFF , 1825px 132px #FFF , 426px 1010px #FFF , 1702px 1977px #FFF , 1904px 384px #FFF , 1184px 757px #FFF , 1959px 216px #FFF , 745px 353px #FFF , 1951px 807px #FFF , 688px 645px #FFF , 1528px 524px #FFF , 1321px 1066px #FFF , 395px 556px #FFF , 497px 179px #FFF , 681px 1037px #FFF , 1337px 1382px #FFF , 403px 1898px #FFF , 859px 1460px #FFF , 686px 332px #FFF , 1851px 12px #FFF , 789px 1245px #FFF , 2px 991px #FFF , 51px 1915px #FFF , 727px 1283px #FFF , 418px 1525px #FFF , 509px 1515px #FFF , 983px 631px #FFF , 1273px 651px #FFF , 1019px 1875px #FFF , 1481px 475px #FFF , 229px 1159px #FFF , 602px 1819px #FFF , 1620px 248px #FFF , 1971px 29px #FFF , 1646px 478px #FFF , 1725px 778px #FFF , 363px 342px #FFF , 337px 1178px #FFF , 639px 1548px #FFF , 742px 992px #FFF , 32px 435px #FFF , 194px 1141px #FFF , 1313px 936px #FFF , 163px 1150px #FFF , 630px 6px #FFF , 1614px 1052px #FFF , 1239px 166px #FFF , 1826px 1196px #FFF , 449px 1624px #FFF , 1703px 1518px #FFF , 767px 408px #FFF , 636px 190px #FFF , 129px 32px #FFF , 237px 299px #FFF , 1085px 1809px #FFF , 508px 835px #FFF , 1483px 684px #FFF , 800px 1595px #FFF , 304px 1076px #FFF , 678px 1191px #FFF , 326px 119px #FFF , 167px 1372px #FFF , 1271px 1679px #FFF , 272px 311px #FFF , 216px 1762px #FFF , 83px 762px #FFF , 1837px 349px #FFF , 428px 1934px #FFF , 322px 1041px #FFF , 1108px 1897px #FFF , 1940px 1069px #FFF , 1466px 558px #FFF , 723px 142px #FFF , 1624px 184px #FFF , 1211px 1247px #FFF , 827px 995px #FFF , 871px 250px #FFF , 581px 1227px #FFF , 1656px 1607px #FFF , 828px 588px #FFF , 679px 86px #FFF , 704px 1814px #FFF , 1005px 968px #FFF , 1667px 1624px #FFF , 1651px 1773px #FFF , 679px 829px #FFF , 808px 242px #FFF , 1624px 562px #FFF , 1904px 1716px #FFF , 778px 1972px #FFF , 1470px 1971px #FFF , 434px 971px #FFF , 706px 1906px #FFF , 514px 640px #FFF , 517px 1600px #FFF , 1796px 935px #FFF , 1441px 516px #FFF , 1986px 1974px #FFF , 1294px 286px #FFF , 1569px 108px #FFF , 518px 332px #FFF , 1102px 656px #FFF , 1785px 1165px #FFF , 883px 88px #FFF , 540px 1344px #FFF , 723px 408px #FFF , 1332px 1173px #FFF , 559px 424px #FFF , 460px 501px #FFF , 530px 1686px #FFF , 1861px 1657px #FFF , 1103px 1435px #FFF , 1923px 1920px #FFF , 731px 1642px #FFF , 575px 1432px #FFF , 735px 980px #FFF , 519px 1800px #FFF , 820px 288px #FFF , 376px 514px #FFF , 476px 834px #FFF , 1794px 1680px #FFF , 521px 499px #FFF , 301px 225px #FFF , 462px 217px #FFF , 930px 1797px #FFF , 1381px 390px #FFF , 74px 1784px #FFF , 412px 257px #FFF , 717px 1830px #FFF , 290px 1269px #FFF , 1250px 1641px #FFF , 1775px 1459px #FFF , 1746px 1675px #FFF , 414px 1197px #FFF , 33px 674px #FFF , 1480px 687px #FFF , 243px 1104px #FFF , 199px 624px #FFF , 94px 1005px #FFF , 805px 1307px #FFF , 511px 1731px #FFF , 375px 1984px #FFF , 1572px 143px #FFF , 20px 6px #FFF , 697px 1769px #FFF , 204px 821px #FFF , 1797px 1249px #FFF , 780px 1173px #FFF , 384px 1232px #FFF , 1340px 1545px #FFF , 666px 1607px #FFF , 105px 1501px #FFF , 106px 1132px #FFF , 1325px 1812px #FFF , 97px 760px #FFF , 1096px 585px #FFF , 1327px 354px #FFF , 951px 1054px #FFF , 550px 656px #FFF , 459px 1138px #FFF , 1169px 121px #FFF , 1468px 1094px #FFF , 1286px 131px #FFF , 858px 1176px #FFF , 646px 1px #FFF , 1606px 1009px #FFF , 115px 877px #FFF , 5px 866px #FFF , 283px 1307px #FFF , 529px 1058px #FFF , 461px 1424px #FFF , 1103px 1807px #FFF , 534px 762px #FFF , 1304px 500px #FFF , 1202px 744px #FFF , 1519px 1680px #FFF , 1295px 822px #FFF , 1710px 1814px #FFF , 1447px 489px #FFF , 334px 249px #FFF , 1804px 5px #FFF , 982px 594px #FFF , 178px 947px #FFF , 1438px 1847px #FFF , 871px 817px #FFF , 1499px 933px #FFF , 101px 1928px #FFF , 21px 1034px #FFF , 508px 1300px #FFF , 416px 1492px #FFF , 1548px 263px #FFF , 1702px 1071px #FFF , 1713px 86px #FFF , 55px 126px #FFF , 1016px 104px #FFF , 1917px 961px #FFF , 859px 231px #FFF , 1996px 1294px #FFF , 1830px 865px #FFF , 94px 64px #FFF , 1370px 72px #FFF , 1307px 1418px #FFF , 810px 705px #FFF , 151px 591px #FFF , 1689px 1920px #FFF , 1494px 199px #FFF , 1151px 940px #FFF , 1139px 1230px #FFF , 799px 1467px #FFF , 451px 49px #FFF , 646px 744px #FFF , 287px 1770px #FFF , 682px 623px #FFF , 1173px 1707px #FFF , 1849px 1243px #FFF , 989px 11px #FFF , 1697px 544px #FFF , 1239px 462px #FFF , 1636px 1661px #FFF , 101px 1271px #FFF , 622px 240px #FFF , 950px 1486px #FFF , 1941px 1546px #FFF , 1987px 1748px #FFF , 601px 332px #FFF , 1887px 1444px #FFF , 1320px 271px #FFF , 1744px 1939px #FFF , 1735px 1290px #FFF , 556px 929px #FFF , 1081px 1769px #FFF , 2px 1826px #FFF , 794px 432px #FFF , 424px 7px #FFF , 777px 882px #FFF , 1407px 1403px #FFF , 1037px 222px #FFF , 1174px 1270px #FFF , 1259px 1705px #FFF , 711px 267px #FFF , 333px 1116px #FFF , 1961px 219px #FFF , 1666px 494px #FFF , 712px 714px #FFF , 188px 1879px #FFF , 1750px 1558px #FFF , 1455px 1544px #FFF , 1352px 663px #FFF , 662px 1347px #FFF , 1364px 874px #FFF , 23px 1510px #FFF , 1891px 1172px #FFF , 314px 1899px #FFF , 1471px 653px #FFF , 755px 110px #FFF , 1992px 514px #FFF , 1399px 1477px #FFF , 474px 395px #FFF , 1007px 1351px #FFF , 478px 827px #FFF , 1061px 357px #FFF , 50px 1178px #FFF , 520px 164px #FFF , 1373px 1998px #FFF , 1032px 1674px #FFF , 512px 1405px #FFF , 1203px 1156px #FFF , 1943px 98px #FFF , 499px 1756px #FFF , 1251px 382px #FFF , 358px 987px #FFF , 1344px 712px #FFF , 1895px 299px #FFF , 417px 1975px #FFF , 1699px 1751px #FFF , 1806px 1371px #FFF , 19px 1810px #FFF , 1569px 751px #FFF , 1428px 1733px #FFF , 1627px 705px #FFF , 1263px 1392px #FFF , 962px 827px #FFF , 899px 390px #FFF , 803px 755px #FFF , 284px 1331px #FFF , 530px 1076px #FFF , 1099px 1858px #FFF , 64px 262px #FFF , 1407px 1113px #FFF , 59px 1777px #FFF , 1257px 1727px #FFF , 40px 1000px #FFF , 647px 128px #FFF , 991px 255px #FFF , 851px 757px #FFF , 983px 652px #FFF , 824px 614px #FFF , 1115px 877px #FFF , 1666px 634px #FFF , 155px 1188px #FFF;
}

#stars2 {
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow: 193px 1272px #FFF , 501px 1519px #FFF , 1943px 1022px #FFF , 327px 925px #FFF , 257px 59px #FFF , 350px 987px #FFF , 128px 233px #FFF , 1387px 1353px #FFF , 1085px 609px #FFF , 1558px 1452px #FFF , 716px 1097px #FFF , 1437px 1569px #FFF , 637px 1330px #FFF , 1377px 1311px #FFF , 1112px 1776px #FFF , 74px 9px #FFF , 1197px 1812px #FFF , 556px 696px #FFF , 539px 835px #FFF , 1431px 84px #FFF , 1016px 1254px #FFF , 1949px 1282px #FFF , 1251px 1076px #FFF , 1554px 1015px #FFF , 1063px 922px #FFF , 1665px 991px #FFF , 1627px 1569px #FFF , 1660px 498px #FFF , 417px 399px #FFF , 1009px 1243px #FFF , 1605px 1741px #FFF , 1856px 1029px #FFF , 773px 571px #FFF , 1431px 1739px #FFF , 1520px 1442px #FFF , 939px 1604px #FFF , 193px 483px #FFF , 1849px 1635px #FFF , 1533px 898px #FFF , 373px 782px #FFF , 860px 351px #FFF , 550px 246px #FFF , 1069px 1242px #FFF , 1840px 728px #FFF , 35px 1272px #FFF , 1330px 1909px #FFF , 1038px 633px #FFF , 158px 1563px #FFF , 1251px 1442px #FFF , 247px 1465px #FFF , 510px 646px #FFF , 607px 1648px #FFF , 1010px 1106px #FFF , 1980px 590px #FFF , 1963px 1888px #FFF , 473px 323px #FFF , 1174px 781px #FFF , 1016px 209px #FFF , 1855px 696px #FFF , 896px 450px #FFF , 1111px 438px #FFF , 207px 1898px #FFF , 1198px 951px #FFF , 95px 68px #FFF , 1019px 1611px #FFF , 415px 7px #FFF , 1497px 457px #FFF , 1599px 1406px #FFF , 94px 399px #FFF , 1929px 379px #FFF , 1848px 1496px #FFF , 1173px 855px #FFF , 1396px 1916px #FFF , 13px 1660px #FFF , 1489px 1348px #FFF , 1076px 135px #FFF , 1869px 818px #FFF , 781px 796px #FFF , 1209px 1182px #FFF , 1838px 1658px #FFF , 1212px 1041px #FFF , 899px 683px #FFF , 706px 843px #FFF , 1623px 1256px #FFF , 1347px 1540px #FFF , 1404px 444px #FFF , 1725px 1470px #FFF , 1782px 86px #FFF , 1001px 1040px #FFF , 1411px 1814px #FFF , 674px 960px #FFF , 1496px 1081px #FFF , 560px 1289px #FFF , 1512px 1747px #FFF , 542px 1265px #FFF , 1621px 1364px #FFF , 1988px 1346px #FFF , 1846px 773px #FFF , 1559px 1410px #FFF , 1525px 547px #FFF , 1992px 1412px #FFF , 1575px 1430px #FFF , 171px 729px #FFF , 813px 1475px #FFF , 1726px 1061px #FFF , 241px 1670px #FFF , 873px 269px #FFF , 1782px 621px #FFF , 1528px 1703px #FFF , 1782px 1713px #FFF , 1407px 1454px #FFF , 23px 943px #FFF , 1811px 1179px #FFF , 1973px 1157px #FFF , 1477px 289px #FFF , 50px 1547px #FFF , 729px 1202px #FFF , 420px 324px #FFF , 392px 1876px #FFF , 36px 159px #FFF , 1761px 694px #FFF , 1870px 427px #FFF , 1488px 1845px #FFF , 549px 1525px #FFF , 132px 1640px #FFF , 331px 1305px #FFF , 1265px 1595px #FFF , 1630px 256px #FFF , 259px 1027px #FFF , 158px 524px #FFF , 880px 151px #FFF , 943px 1524px #FFF , 654px 199px #FFF , 1952px 829px #FFF , 1438px 1657px #FFF , 1485px 1072px #FFF , 643px 1528px #FFF , 711px 879px #FFF , 542px 1871px #FFF , 224px 1378px #FFF , 1783px 840px #FFF , 131px 1807px #FFF , 601px 535px #FFF , 1334px 777px #FFF , 1510px 288px #FFF , 987px 958px #FFF , 1341px 1358px #FFF , 1276px 67px #FFF , 1757px 243px #FFF , 934px 1930px #FFF , 1490px 683px #FFF , 334px 1295px #FFF , 417px 1122px #FFF , 683px 1019px #FFF , 1375px 393px #FFF , 1095px 1784px #FFF , 282px 664px #FFF , 224px 764px #FFF , 1963px 1656px #FFF , 855px 1361px #FFF , 648px 1816px #FFF , 394px 450px #FFF , 1181px 782px #FFF , 542px 467px #FFF , 330px 689px #FFF , 142px 1157px #FFF , 484px 1052px #FFF , 940px 149px #FFF , 239px 1918px #FFF , 83px 211px #FFF , 678px 797px #FFF , 503px 884px #FFF , 404px 1475px #FFF , 1377px 1969px #FFF , 1453px 1639px #FFF , 1183px 853px #FFF , 1232px 1174px #FFF , 833px 1759px #FFF , 1251px 68px #FFF , 1308px 1962px #FFF , 279px 480px #FFF , 287px 164px #FFF , 310px 1797px #FFF , 1890px 1992px #FFF , 1571px 1293px #FFF , 1332px 262px #FFF , 1500px 162px #FFF , 1981px 1233px #FFF , 709px 1375px #FFF , 741px 1332px #FFF , 1108px 1791px #FFF , 1969px 1120px #FFF , 1765px 136px #FFF , 1248px 1305px #FFF , 757px 1532px #FFF , 1905px 344px #FFF , 1328px 966px #FFF , 356px 1910px #FFF , 1953px 1448px #FFF , 40px 843px #FFF;
	animation: animStar 100s linear infinite;
}

#stars2:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow: 193px 1272px #FFF , 501px 1519px #FFF , 1943px 1022px #FFF , 327px 925px #FFF , 257px 59px #FFF , 350px 987px #FFF , 128px 233px #FFF , 1387px 1353px #FFF , 1085px 609px #FFF , 1558px 1452px #FFF , 716px 1097px #FFF , 1437px 1569px #FFF , 637px 1330px #FFF , 1377px 1311px #FFF , 1112px 1776px #FFF , 74px 9px #FFF , 1197px 1812px #FFF , 556px 696px #FFF , 539px 835px #FFF , 1431px 84px #FFF , 1016px 1254px #FFF , 1949px 1282px #FFF , 1251px 1076px #FFF , 1554px 1015px #FFF , 1063px 922px #FFF , 1665px 991px #FFF , 1627px 1569px #FFF , 1660px 498px #FFF , 417px 399px #FFF , 1009px 1243px #FFF , 1605px 1741px #FFF , 1856px 1029px #FFF , 773px 571px #FFF , 1431px 1739px #FFF , 1520px 1442px #FFF , 939px 1604px #FFF , 193px 483px #FFF , 1849px 1635px #FFF , 1533px 898px #FFF , 373px 782px #FFF , 860px 351px #FFF , 550px 246px #FFF , 1069px 1242px #FFF , 1840px 728px #FFF , 35px 1272px #FFF , 1330px 1909px #FFF , 1038px 633px #FFF , 158px 1563px #FFF , 1251px 1442px #FFF , 247px 1465px #FFF , 510px 646px #FFF , 607px 1648px #FFF , 1010px 1106px #FFF , 1980px 590px #FFF , 1963px 1888px #FFF , 473px 323px #FFF , 1174px 781px #FFF , 1016px 209px #FFF , 1855px 696px #FFF , 896px 450px #FFF , 1111px 438px #FFF , 207px 1898px #FFF , 1198px 951px #FFF , 95px 68px #FFF , 1019px 1611px #FFF , 415px 7px #FFF , 1497px 457px #FFF , 1599px 1406px #FFF , 94px 399px #FFF , 1929px 379px #FFF , 1848px 1496px #FFF , 1173px 855px #FFF , 1396px 1916px #FFF , 13px 1660px #FFF , 1489px 1348px #FFF , 1076px 135px #FFF , 1869px 818px #FFF , 781px 796px #FFF , 1209px 1182px #FFF , 1838px 1658px #FFF , 1212px 1041px #FFF , 899px 683px #FFF , 706px 843px #FFF , 1623px 1256px #FFF , 1347px 1540px #FFF , 1404px 444px #FFF , 1725px 1470px #FFF , 1782px 86px #FFF , 1001px 1040px #FFF , 1411px 1814px #FFF , 674px 960px #FFF , 1496px 1081px #FFF , 560px 1289px #FFF , 1512px 1747px #FFF , 542px 1265px #FFF , 1621px 1364px #FFF , 1988px 1346px #FFF , 1846px 773px #FFF , 1559px 1410px #FFF , 1525px 547px #FFF , 1992px 1412px #FFF , 1575px 1430px #FFF , 171px 729px #FFF , 813px 1475px #FFF , 1726px 1061px #FFF , 241px 1670px #FFF , 873px 269px #FFF , 1782px 621px #FFF , 1528px 1703px #FFF , 1782px 1713px #FFF , 1407px 1454px #FFF , 23px 943px #FFF , 1811px 1179px #FFF , 1973px 1157px #FFF , 1477px 289px #FFF , 50px 1547px #FFF , 729px 1202px #FFF , 420px 324px #FFF , 392px 1876px #FFF , 36px 159px #FFF , 1761px 694px #FFF , 1870px 427px #FFF , 1488px 1845px #FFF , 549px 1525px #FFF , 132px 1640px #FFF , 331px 1305px #FFF , 1265px 1595px #FFF , 1630px 256px #FFF , 259px 1027px #FFF , 158px 524px #FFF , 880px 151px #FFF , 943px 1524px #FFF , 654px 199px #FFF , 1952px 829px #FFF , 1438px 1657px #FFF , 1485px 1072px #FFF , 643px 1528px #FFF , 711px 879px #FFF , 542px 1871px #FFF , 224px 1378px #FFF , 1783px 840px #FFF , 131px 1807px #FFF , 601px 535px #FFF , 1334px 777px #FFF , 1510px 288px #FFF , 987px 958px #FFF , 1341px 1358px #FFF , 1276px 67px #FFF , 1757px 243px #FFF , 934px 1930px #FFF , 1490px 683px #FFF , 334px 1295px #FFF , 417px 1122px #FFF , 683px 1019px #FFF , 1375px 393px #FFF , 1095px 1784px #FFF , 282px 664px #FFF , 224px 764px #FFF , 1963px 1656px #FFF , 855px 1361px #FFF , 648px 1816px #FFF , 394px 450px #FFF , 1181px 782px #FFF , 542px 467px #FFF , 330px 689px #FFF , 142px 1157px #FFF , 484px 1052px #FFF , 940px 149px #FFF , 239px 1918px #FFF , 83px 211px #FFF , 678px 797px #FFF , 503px 884px #FFF , 404px 1475px #FFF , 1377px 1969px #FFF , 1453px 1639px #FFF , 1183px 853px #FFF , 1232px 1174px #FFF , 833px 1759px #FFF , 1251px 68px #FFF , 1308px 1962px #FFF , 279px 480px #FFF , 287px 164px #FFF , 310px 1797px #FFF , 1890px 1992px #FFF , 1571px 1293px #FFF , 1332px 262px #FFF , 1500px 162px #FFF , 1981px 1233px #FFF , 709px 1375px #FFF , 741px 1332px #FFF , 1108px 1791px #FFF , 1969px 1120px #FFF , 1765px 136px #FFF , 1248px 1305px #FFF , 757px 1532px #FFF , 1905px 344px #FFF , 1328px 966px #FFF , 356px 1910px #FFF , 1953px 1448px #FFF , 40px 843px #FFF;
}

#stars3 {
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow: 1610px 479px #FFF , 328px 1526px #FFF , 1679px 1697px #FFF , 1602px 1642px #FFF , 1965px 217px #FFF , 1744px 134px #FFF , 682px 1110px #FFF , 216px 719px #FFF , 990px 695px #FFF , 58px 1545px #FFF , 1865px 8px #FFF , 1344px 328px #FFF , 1568px 1881px #FFF , 187px 1578px #FFF , 1716px 711px #FFF , 841px 621px #FFF , 1596px 1697px #FFF , 258px 1530px #FFF , 866px 1456px #FFF , 78px 892px #FFF , 621px 186px #FFF , 1190px 91px #FFF , 618px 550px #FFF , 629px 178px #FFF , 1817px 1524px #FFF , 1147px 51px #FFF , 477px 687px #FFF , 1650px 1793px #FFF , 945px 1214px #FFF , 966px 186px #FFF , 1306px 140px #FFF , 634px 800px #FFF , 1068px 987px #FFF , 1677px 1488px #FFF , 1888px 296px #FFF , 91px 1310px #FFF , 1800px 827px #FFF , 201px 452px #FFF , 777px 1787px #FFF , 1928px 1395px #FFF , 358px 1634px #FFF , 267px 189px #FFF , 1487px 1501px #FFF , 1100px 814px #FFF , 1848px 95px #FFF , 24px 148px #FFF , 774px 871px #FFF , 409px 1045px #FFF , 784px 1325px #FFF , 877px 1094px #FFF , 1630px 1721px #FFF , 854px 997px #FFF , 1183px 1309px #FFF , 26px 1343px #FFF , 257px 135px #FFF , 800px 566px #FFF , 796px 44px #FFF , 1962px 1737px #FFF , 189px 4px #FFF , 1484px 1515px #FFF , 1693px 225px #FFF , 594px 1321px #FFF , 827px 1915px #FFF , 963px 1984px #FFF , 1677px 1407px #FFF , 114px 290px #FFF , 1897px 25px #FFF , 1082px 467px #FFF , 468px 1929px #FFF , 1025px 571px #FFF , 1629px 489px #FFF , 517px 7px #FFF , 1453px 682px #FFF , 1031px 1491px #FFF , 134px 762px #FFF , 1437px 1053px #FFF , 564px 1332px #FFF , 1449px 1882px #FFF , 1726px 1625px #FFF , 1650px 1745px #FFF , 137px 516px #FFF , 517px 46px #FFF , 1735px 843px #FFF , 230px 1730px #FFF , 1496px 1148px #FFF , 921px 717px #FFF , 523px 858px #FFF , 1293px 313px #FFF , 539px 459px #FFF , 1845px 1457px #FFF , 583px 1185px #FFF , 1120px 1000px #FFF , 542px 1859px #FFF , 282px 378px #FFF , 1029px 1205px #FFF , 1441px 1475px #FFF , 67px 1809px #FFF , 933px 1189px #FFF , 276px 91px #FFF , 247px 1629px #FFF;
	animation: animStar 150s linear infinite;
}

#stars3:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow: 1610px 479px #FFF , 328px 1526px #FFF , 1679px 1697px #FFF , 1602px 1642px #FFF , 1965px 217px #FFF , 1744px 134px #FFF , 682px 1110px #FFF , 216px 719px #FFF , 990px 695px #FFF , 58px 1545px #FFF , 1865px 8px #FFF , 1344px 328px #FFF , 1568px 1881px #FFF , 187px 1578px #FFF , 1716px 711px #FFF , 841px 621px #FFF , 1596px 1697px #FFF , 258px 1530px #FFF , 866px 1456px #FFF , 78px 892px #FFF , 621px 186px #FFF , 1190px 91px #FFF , 618px 550px #FFF , 629px 178px #FFF , 1817px 1524px #FFF , 1147px 51px #FFF , 477px 687px #FFF , 1650px 1793px #FFF , 945px 1214px #FFF , 966px 186px #FFF , 1306px 140px #FFF , 634px 800px #FFF , 1068px 987px #FFF , 1677px 1488px #FFF , 1888px 296px #FFF , 91px 1310px #FFF , 1800px 827px #FFF , 201px 452px #FFF , 777px 1787px #FFF , 1928px 1395px #FFF , 358px 1634px #FFF , 267px 189px #FFF , 1487px 1501px #FFF , 1100px 814px #FFF , 1848px 95px #FFF , 24px 148px #FFF , 774px 871px #FFF , 409px 1045px #FFF , 784px 1325px #FFF , 877px 1094px #FFF , 1630px 1721px #FFF , 854px 997px #FFF , 1183px 1309px #FFF , 26px 1343px #FFF , 257px 135px #FFF , 800px 566px #FFF , 796px 44px #FFF , 1962px 1737px #FFF , 189px 4px #FFF , 1484px 1515px #FFF , 1693px 225px #FFF , 594px 1321px #FFF , 827px 1915px #FFF , 963px 1984px #FFF , 1677px 1407px #FFF , 114px 290px #FFF , 1897px 25px #FFF , 1082px 467px #FFF , 468px 1929px #FFF , 1025px 571px #FFF , 1629px 489px #FFF , 517px 7px #FFF , 1453px 682px #FFF , 1031px 1491px #FFF , 134px 762px #FFF , 1437px 1053px #FFF , 564px 1332px #FFF , 1449px 1882px #FFF , 1726px 1625px #FFF , 1650px 1745px #FFF , 137px 516px #FFF , 517px 46px #FFF , 1735px 843px #FFF , 230px 1730px #FFF , 1496px 1148px #FFF , 921px 717px #FFF , 523px 858px #FFF , 1293px 313px #FFF , 539px 459px #FFF , 1845px 1457px #FFF , 583px 1185px #FFF , 1120px 1000px #FFF , 542px 1859px #FFF , 282px 378px #FFF , 1029px 1205px #FFF , 1441px 1475px #FFF , 67px 1809px #FFF , 933px 1189px #FFF , 276px 91px #FFF , 247px 1629px #FFF;
}


@keyframes animStar {
	from {
		transform: translateY(0px);
	}

	to {
		transform: translateY(-2000px);
	}
}

.panel{
 position: relative;
 height: 40vh;
 width: 30%;
 top:50%;
 left:50%;
 transform: translate(-50%,120%);
;
}

.ButtonList{
  display: flex;
  position: absolute;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  height: 50%;
  width:100%;
  top:25%;
}


.button {
  padding: 30px 61px;
  border-radius: 4px;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin: 25px;
  font-family: "Roboto", sans-serif;
  border: 3px solid #d2bdff;
  transition: all 0.1s linear;
}
.button:hover {
  border: 1px solid transparent;
}
.button:hover span {
  position: absolute;
  display: block;
}
.button:hover span:nth-child(1) {
  filter: hue-rotate(0deg);
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #3a86ff);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}
.button:hover span:nth-child(2) {
  filter: hue-rotate(60deg);
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #3a86ff);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}
.button:hover span:nth-child(3) {
  filter: hue-rotate(120deg);
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, #3a86ff);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }
  50%, 100% {
    height: 2px;
    right: 100%;
  }
}
.button:hover span:nth-child(4) {
  filter: hue-rotate(300deg);
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #3a86ff);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}
</style>
