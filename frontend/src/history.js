import React, { useState } from "react";
import "./history.css";

const History = () => {
  return <div>

    <div className="h1-history"> History</div>
    <div className="container-history">
      <div className="row row-top">
        <div className="column-history text1-history top-history">#</div>
        <div className="column-history text2-history top-history">Name</div>
        <div className="column-history text3-history top-history">Surname</div>
        <div className="column-history text4-history top-history">Age</div>
        <div className="column-history text5-history top-history">Sex</div>
        <div className="column-history text6-history top-history">Thickness</div>
        <div className="column-history text7-history">Cell<br/>size</div>
        <div className="column-history text8-history">Cell<br/>shape</div>
        <div className="column-history text9-history top-history">Adhesion</div>
        <div className="column-history text10-history">Epithelial<br/>size</div>
        <div className="column-history text11-history">Bare<br/>niclei</div>
        <div className="column-history text12-history">Bland<br/>cromatin</div>
        <div className="column-history text13-history">Normal<br/>nucleoli</div>
        <div className="column-history text14-history top-history">Mitoses</div>
        <div className="column-history text15-history">Class<br/>label</div>
        <div className="column-history text16-history top-history">Results</div>
      </div>


      <div className="line"></div>
      <div className="row">
        <div className="column-history text1-history data">1</div>
        <div className="column-history text2-history data">สรวงฤทัย</div>
        <div className="column-history text3-history data">ฐิติพัฒนานนท์</div>
        <div className="column-history text4-history data">21</div>
        <div className="column-history text5-history data">Female</div>
        <div className="column-history text6-history data">5</div>
        <div className="column-history text7-history data">1</div>
        <div className="column-history text8-history data">1</div>
        <div className="column-history text9-history data">1</div>
        <div className="column-history text10-history data">2</div>
        <div className="column-history text11-history data">1</div>
        <div className="column-history text12-history data">3</div>
        <div className="column-history text13-history data">1</div>
        <div className="column-history text14-history data">1</div>
        <div className="column-history text15-history data">2</div>
        <div className="column-history text16-history data">ไม่เป็น</div>
      </div>

      <div className="line"></div>
      <div className="row">
        <div className="column-history text1-history data">2</div>
        <div className="column-history text2-history data">สิริวิมล</div>
        <div className="column-history text3-history data">กังสวณิช</div>
        <div className="column-history text4-history data">21</div>
        <div className="column-history text5-history data">Female</div>
        <div className="column-history text6-history data">5</div>
        <div className="column-history text7-history data">4</div>
        <div className="column-history text8-history data">4</div>
        <div className="column-history text9-history data">5</div>
        <div className="column-history text10-history data">7</div>
        <div className="column-history text11-history data">10</div>
        <div className="column-history text12-history data">3</div>
        <div className="column-history text13-history data">2</div>
        <div className="column-history text14-history data">1</div>
        <div className="column-history text15-history data">2</div>
        <div className="column-history text16-history data">ไม่เป็น</div>
      </div>
    </div>
    <div className="button-home">
      <input className="button-history" type="button" value="Back"></input>
    </div>

  </div>;
};

export default History;
