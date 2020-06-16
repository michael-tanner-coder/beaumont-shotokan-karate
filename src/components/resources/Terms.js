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
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Kiba Dachi</th>
              <td>Horse riding stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <tr>
              <th>Kokutsu Dachi</th>
              <td>Back stance</td>
            </tr>
            <h1>Blocking Techniques</h1>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <h1>Punching Techniques</h1>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <h1>Striking Techniques</h1>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <h1>Kicking Techniques</h1>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
            <tr>
              <th>Zenkutsu Dachi</th>
              <td>Front stance</td>
            </tr>
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
