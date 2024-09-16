import { useState } from "react"
import "./FocusVisible.css"

export default function FocusVisible() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>:focus-visible</h1>
      <p>
        I love pudding gingerbread jujubes topping croissant lemon drops. Carrot cake I love gummi
        bears sesame snaps candy canes marshmallow. Soufflé cheesecake cookie jujubes dragée sugar
        plum I love macaroon chocolate cake. I love cake jelly-o macaroon liquorice bonbon.
        Croissant chupa chups <a href="/">sugar plum</a> cotton candy cake. Carrot cake fruitcake
        caramels cupcake chocolate cake caramels brownie chupa chups toffee. Dragée marshmallow I
        love ice cream jelly beans marzipan candy pie I love.
      </p>
      <p>
        <button type="button" className="btn" onClick={handleClick}>
          Click me
        </button>
      </p>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <p>
        Pastry dessert wafer liquorice powder. Tootsie roll marshmallow sesame snaps ice cream cake{" "}
        <a href="/">cheesecake</a> chocolate bar. Cake muffin I love I love jelly-o lollipop cake
        sweet roll. Soufflé wafer cupcake wafer I love. Pudding tiramisu donut gummies danish wafer
        sweet danish. Powder I love lemon drops bear claw gummi bears.
      </p>
    </>
  )
}
