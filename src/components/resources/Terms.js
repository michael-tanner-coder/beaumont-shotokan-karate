import React from "react"
import { Table, Accordion } from "react-bootstrap"

const CommonTerms = {
  terms: [
    {
      japanese: "Sensei",
      english: "Instructor",
    },
    {
      japanese: "Sempai",
      english: "Senior Student",
    },
    {
      japanese: "Dojo",
      english: "Training Hall",
    },
    {
      japanese: "Gi",
      english: "Uniform",
    },
    {
      japanese: "Obi",
      english: "Belt",
    },
    {
      japanese: "Jodan",
      english: "Face level",
    },
    {
      japanese: "Chudan",
      english: "Middle level",
    },
    {
      japanese: "Gedan",
      english: "Lower level",
    },
    {
      japanese: "Hajime",
      english: "Begin",
    },
    {
      japanese: "Yame",
      english: "Finish",
    },
    {
      japanese: "Seiza",
      english: "Formal kneeling position",
    },
    {
      japanese: "Rei",
      english: "Bow",
    },
    {
      japanese: "Ki",
      english: "Energy",
    },
    {
      japanese: "Mokuso",
      english: "Meditation",
    },
    {
      japanese: "Kyu",
      english: "Junior rank, colored belt",
    },
    {
      japanese: "Dan",
      english: "Senior rank, black belt",
    },
    {
      japanese: "Hidari",
      english: "Left",
    },
    {
      japanese: "Migi",
      english: "Right",
    },
  ],

  techniques: {
    stances: [
      {
        japanese: "Zenkutsu Dachi",
        english: "Front stance",
      },
      {
        japanese: "Kiba Dachi",
        english: "Horse riding stance",
      },
      {
        japanese: "Kokutsu Dachi",
        english: "Back stance",
      },
      {
        japanese: "Shizen Dachi",
        english: "Natural stance",
      },
      {
        japanese: "Heiko Dachi",
        english: "Feet shoulder width and straight",
      },
      {
        japanese: "Hachiji Dachi",
        english: "Feet shoulder width and pointed out",
      },
      {
        japanese: "Uchi Hachiji Dachi",
        english: "Feet shoulder width and pointed in",
      },
      {
        japanese: "Musubi Dachi",
        english: "Heels together, each foot turned out at 45 degrees",
      },
      {
        japanese: "Heisoku Dachi",
        english: "Feet and toes together",
      },
      {
        japanese: "Teiji Dachi",
        english: "T-angled stance",
      },
      {
        japanese: "Renoji Dachi",
        english: "L-angled stance",
      },
      {
        japanese: "Hangetsu Dachi",
        english: "Half-moon stance",
      },
      {
        japanese: "Kosa Dachi",
        english: "Crossed-foot stance",
      },
      {
        japanese: "Neko Ashi Dachi",
        english: "Cat-foot stance",
      },
    ],

    blocks: [
      { japanese: "Gedan Barai", english: "Downward block" },
      { japanese: "Jodan Age Uke", english: "Rising block" },
      { japanese: "Soto Ude Uke", english: "Outside forearm block" },
      { japanese: "Uchi Ude Uke", english: "Inside forearm block" },
      { japanese: "Shuto Uke", english: "Knife hand block" },
      { japanese: "Juji Uke (Kosa Uke)", english: "X-block" },
      { japanese: "Haishu Uke", english: "Backhand block" },
      { japanese: "Teisho Uke", english: "Palm block" },
      { japanese: "Kakiwake Uke", english: "Inside wedge hand block" },
      { japanese: "Morote Uke", english: "Reinforced forearm block" },
      { japanese: "Nagashi Uke", english: "Sweeping block" },
      {
        japanese: "Tate Shuto Uke",
        english: "Vertical knife-hand block (arm straight)",
      },
      { japanese: "Haiwan Uke", english: "Back-arm block" },
      { japanese: "Sukui Uke", english: "Scooping block" },
    ],
    punches: [
      { japanese: "Choku Zuki", english: "Front punch" },
      { japanese: "Oi Zuki (Jun Zuki)", english: "Lunge punch" },
      { japanese: "Gyaku Zuki", english: "Reverse punch" },
      { japanese: "Kizami Zuki", english: "Leading hand jab" },
      { japanese: "Sanbon Zuki", english: "Three-punch combination" },
      { japanese: "Age Zuki", english: "Rising punch" },
      { japanese: "Ura Zuki", english: "Half punch used at close range" },
      { japanese: "Kagi Zuki", english: "Hook punch" },
      { japanese: "Mawashi Zuki", english: "Roundhouse punch" },
      { japanese: "Morote Zuki", english: "Double punch" },
      { japanese: "Yama Zuki", english: "Over the mountain double punch" },
      { japanese: "Tate Zuki", english: "Vertical punch" },
    ],
    strikes: [
      { japanese: "Age Empi Uchi", english: "Upward elbow strike" },
      {
        japanese: "Haishu Uchi",
        english: "Back hand strike (hand and fingers are straight)",
      },
      { japanese: "Haito Uchi", english: "Ridge-hand strike" },
      { japanese: "Empi Uchi (Hiji Ate)", english: "Elbow strike" },
      { japanese: "Ippon Nukite", english: "One-finger strike/thrust" },
      { japanese: "Keito Uchi", english: "Chicken-head strike" },
      {
        japanese: "Tettsui Uchi (Kentsui Uchi)",
        english: "Hammer fist strike",
      },
      { japanese: "Kumade Uchi", english: "Bear-hand strike" },
      { japanese: "Nihon Nukite", english: "Two-finger strike" },
      { japanese: "Nukite", english: "Spear hand" },
      {
        japanese: "Shihon Nukite (Yonhon Nukite)",
        english: "Four-finger strike",
      },
      { japanese: "Shuto Uchi", english: "Knife-hand strike" },
      { japanese: "Tate Empi Uchi", english: "Upward elbow strike" },
      { japanese: "Teisho Uchi", english: "Palm heel strike" },
      { japanese: "Uraken Uchi", english: "Back fist strike" },
      {
        japanese: "Ushiro Mawashi Empi Uchi",
        english: "Back roundhouse elbow strike",
      },
      { japanese: "Yoko Empi Uchi", english: "Side elbow strike" },
    ],
    kicks: [
      { japanese: "Mae Geri", english: "Front kick" },
      { japanese: "Mae Geri Keage", english: "Front snap kick" },
      { japanese: "Mawashi Geri", english: "Roundhouse kick" },
      { japanese: "Yoko Geri Keage", english: "Side snap kick" },
      { japanese: "Yoko Geri Kekomi", english: "Side thrust kick" },
      { japanese: "Ushiro Geri", english: "Back thrust kick" },
      { japanese: "Gyaku Mawashi Geri", english: "Reverse roundhouse kick" },
      { japanese: "Fumikomi Geri", english: "Downward thrust kick" },
      { japanese: "Mikazuki Geri", english: "Crescent kick" },
      { japanese: "Ashi Barai", english: "Foot or leg sweep" },
      { japanese: "Hiza Geri", english: "Knee kick" },
      { japanese: "Namimae Ashi", english: "Returning wave kick" },
      { japanese: "Kakato Geri", english: "Axe kick" },
      { japanese: "Ura Mawashi Geri (Kake Geri)", english: "Hook kick" },
      { japanese: "Ren Geri", english: "Combination kick" },
    ],
  },
}

const Terms = {
  items: [
    {
      label: "Counting",
      content: (
        <Table responsive>
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </thead>
          <tbody>
            <td>Ichi</td>
            <td>Ni</td>
            <td>San</td>
            <td>Shi</td>
            <td>Go</td>
            <td>Roku</td>
            <td>Shichi</td>
            <td>Hachi</td>
            <td>Ku</td>
            <td>Ju</td>
          </tbody>
        </Table>
      ),
    },
    {
      label: "Common Terms",
      content: (
        <Table>
          <tbody>
            {CommonTerms.terms.map(term => {
              return (
                <tr>
                  <th>{term.japanese}</th>
                  <td>{term.english}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      ),
    },
    {
      label: "Techniques",
      content: (
        <Table>
          <tbody>
            <h1>Stances</h1>
            {CommonTerms.techniques.stances.map(term => {
              return (
                <tr>
                  <th>{term.japanese}</th>
                  <td>{term.english}</td>
                </tr>
              )
            })}
            <h1>Blocks</h1>
            {CommonTerms.techniques.blocks.map(term => {
              return (
                <tr>
                  <th>{term.japanese}</th>
                  <td>{term.english}</td>
                </tr>
              )
            })}
            <h1>Punching Techniques</h1>
            {CommonTerms.techniques.punches.map(term => {
              return (
                <tr>
                  <th>{term.japanese}</th>
                  <td>{term.english}</td>
                </tr>
              )
            })}
            <h1>Striking Techniques</h1>
            {CommonTerms.techniques.strikes.map(term => {
              return (
                <tr>
                  <th>{term.japanese}</th>
                  <td>{term.english}</td>
                </tr>
              )
            })}
            <h1>Kicking Techniques</h1>
            {CommonTerms.techniques.kicks.map(term => {
              return (
                <tr>
                  <th>{term.japanese}</th>
                  <td>{term.english}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      ),
    },

    {
      label: "Dojo Kun",
      content: (
        <Table>
          <tbody>
            <tr>
              {" "}
              <th>Hitotsu! Jinkaku kansei ni tsutomuru koto.</th>
              <td>Seek perfection of character</td>
            </tr>
            <tr>
              {" "}
              <th>Hitotsu! Makato no michi o mamoru koto.</th>
              <td>Be faithful</td>
            </tr>
            <tr>
              {" "}
              <th>Hitotsu! Doryoku no seishin o yashinau koto.</th>
              <td>Endeavor</td>
            </tr>
            <tr>
              {" "}
              <th>Hitotsu! Reigi o omonzuru koto.</th>
              <td>Respect others</td>
            </tr>
            <tr>
              <th>Hitotsu! Kekki no yu o imashimuru koto.</th>
              <td>Refrain from violent behavior</td>
            </tr>
          </tbody>
        </Table>
      ),
    },
  ],
}

export default Terms
