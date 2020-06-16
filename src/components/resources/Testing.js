import React from "react"
const Tests = {
  tests: [
    {
      rank: "",
      basics: ["ZENKUTSU DACHI GEDAN BARAI", "CHUDAN JUN ZUKI (OI ZUKI)"],
      kata: ["TAIKYOKU SHODAN"],
      sparring: ["GOHON KUMITE (HIDARI - LEFT SIDE ONLY)", "JODAN", "CHUDAN"],
    },
  ],
}

function readTests(rank) {
  var test = Tests.tests.filter(test => {
    return test.rank == rank
  })
  return (
    <div>
      <h2>KYU NO KIHON:</h2>
      {test.basics.map(term => {
        return <p>{term}</p>
      })}
      <h2>KYU NO KATA:</h2>
      {test.kata.map(term => {
        return <p>{term}</p>
      })}

      <h2>KYU NO KUMITE:</h2>
      {test.sparring.map(term => {
        return <p>{term}</p>
      })}
    </div>
  )
}

const Testing = {
  items: [
    {
      label: "WHITE TO WHITE W/ YELLOW STRIPE - 9 KYU",
      content: (
        <div>
          {Tests.tests.map(test => {
            return (
              <div>
                <h2>KYU NO KIHON:</h2>
                {test.basics.map(term => {
                  return <p>{term}</p>
                })}
                <h2>KYU NO KATA:</h2>
                {test.kata.map(term => {
                  return <p>{term}</p>
                })}

                <h2>KYU NO KUMITE:</h2>
                {test.sparring.map(term => {
                  return <p>{term}</p>
                })}
              </div>
            )
          })}
        </div>
      ),
    },
    {
      label: "FROM WHITE W/ YELLOW STRIPE TO YELLOW - 8 KYU",
      content: (
        <div>
          <h2>KYU NO KIHON:</h2>
          <p>ZENKUTSU DACHI GEDAN BARAI</p>
          <p>CHUDAN JUN ZUKI (OI ZUKI)</p>
          <p>JODAN AGE UKE</p>
          <p>CHUDAN SOTO UDE UKE</p>
          <p>ZENKUTSU DACHI GAMAE</p>
          <p>MAE GERI</p>
          <p>KOKUTSU DACHI GAMAE</p>
          <p>CHUDAN SHUTO UKE</p>
          <p>KIBA DACHI GAMAE</p>
          <p>YOKO KEAGE</p>
          <p>YOKO KEKOMI</p>
          <h2>KYU NO KATA:</h2>
          HEIAN SHODAN
          <h2>KYU NO KUMITE:</h2>
          <p>GOHON KUMITE (HIDARI and MIGI)</p>
          <p>JODAN</p>
          <p>CHUDAN</p>
          <p>MAE GERI</p>
        </div>
      ),
    },
    {
      label: "",
      content: "",
    },
    {
      label: "",
      content: "",
    },
    {
      label: "",
      content: "",
    },
  ],
}

export default Testing
