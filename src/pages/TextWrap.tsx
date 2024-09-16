import { Card } from "../components"
import "./TextWrap.css"

export default function TextWrap() {
  return (
    <>
      <h1>text-wrap: balance</h1>
      <div className="grid-auto">
        <Card
          title="Chocolate lemon drops liquorice muffin tart carrot cake"
          imageSrc="https://satyr.dev/360x240/1"
        >
          Lollipop biscuit candy chupa chups shortbread. Candy canes cotton candy chocolate wafer
          cake. Cake fruitcake tart gummies I love gingerbread I love.
        </Card>
        <Card
          title="Cake liquorice ice cream sugar plum jelly-o cotton"
          imageSrc="https://satyr.dev/360x240/2"
        >
          Macaroon brownie lollipop liquorice pudding I love marshmallow. Cotton candy dragée
          macaroon candy canes icing powder candy canes.
        </Card>
        <Card
          title="Cheesecake muffin croissant candy canes jelly"
          imageSrc="https://satyr.dev/360x240/3"
        >
          Lollipop powder fruitcake topping tiramisu sweet roll. Marshmallow bear claw icing jelly
          beans I love sweet. I love jelly beans sesame snaps cheesecake ice cream.
        </Card>
      </div>
    </>
  )
}
